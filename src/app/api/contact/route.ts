import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Define the expected payload schema
const contactSchema = z.object({
  targetName: z.string().min(1, 'Target Name is required.'),
  targetEmail: z.string().email('Invalid email address.'),
  payload: z.string().min(2, 'Payload must be at least 2 characters long.'),
});

// Initialize Resend with key or dummy to prevent build crash
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

// Initialize Upstash Redis Rate Limiter
let ratelimit: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  
  // Create a new ratelimiter, that allows 3 requests per 1 hour
  ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
  });
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP-based Rate Limiting (if configured)
    if (ratelimit) {
      const ip = req.headers.get('x-forwarded-for') ?? 'anonymous';
      const { success, limit, reset, remaining } = await ratelimit.limit(ip);
      
      if (!success) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Too many requests.' },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString()
            }
          }
        );
      }
    }

    // 2. Parse and Validate Payload
    const body = await req.json();
    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      const errorMessages = validatedData.error.issues.map((err) => err.message).join(' | ');
      return NextResponse.json(
        { error: errorMessages, details: validatedData.error.issues },
        { status: 400 }
      );
    }

    const { targetName, targetEmail, payload } = validatedData.data;

    // 3. Dispatch Email via Resend
    if (!process.env.RESEND_API_KEY) {
       console.warn("RESEND_API_KEY is missing. Simulating successful dispatch for development.");
       return NextResponse.json({ message: 'Payload received (Simulated).' }, { status: 200 });
    }

    const { data, error } = await resend.emails.send({
      from: 'System <onboarding@resend.dev>', // Update this to your verified domain later if you have one
      to: ['mohammed.saifulhuq@gmail.com'],
      subject: `[Deep-Tech Priority] Connection from ${targetName}`,
      replyTo: targetEmail,
      text: `Sender: ${targetName} (${targetEmail})\n\nPayload:\n${payload}`
    });

    if (error) {
       console.error('Error dispatching email:', error);
       return NextResponse.json({ error: 'Failed to dispatch payload via Resend.' }, { status: 500 });
    }

    // 4. Return Success
    return NextResponse.json(
      { message: 'Payload successfully dispatched.', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing the payload.' },
      { status: 500 }
    );
  }
}
