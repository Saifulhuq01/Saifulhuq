'use client';
import { motion } from 'framer-motion';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/MotionPrimitives';

export default function About() {
  const techStack = [
    'Java 17', 'Spring Boot 3', 'Apache Kafka', 'Microservices', 'RESTful APIs',
    'Angular 13+', 'TypeScript', 'RxJS', 'JavaScript', 'HTML5', 'CSS3',
    'PostgreSQL', 'MySQL', 'Liquibase', 'JPA/Hibernate',
    'JUnit 5', 'Mockito', 'Docker', 'GitHub Actions', 'Git',
    'Kotlin', 'Jetpack Compose', 'JSONata', 'Linux', 'Gradle', 'Maven'
  ];

  return (
    <section id="about" className="py-20">
      <SectionReveal direction="left">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-accent mb-12 font-bold font-display uppercase tracking-widest">
          // Core Engine &amp; Specs
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="relative p-6 md:p-12 glass-refract glass-light-leak glass-edge-iridescent rounded-lg group/card">
          {/* Animated corner accents */}
          <motion.div
            className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/0 group-hover/card:border-accent/40 transition-all duration-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/0 group-hover/card:border-accent/40 transition-all duration-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />

          {/* Hand-drawn SVG frame */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.path
              d="M 2,2 L 98,2 L 99,98 L 2,99 Z"
              vectorEffect="non-scaling-stroke"
              fill="none"
              stroke="var(--color-muted-2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 97,3 L 99,7 M 96,5 L 99,9"
              vectorEffect="non-scaling-stroke"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-mono relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl !text-white mb-4 uppercase flex items-center gap-2">
                  <span className="text-accent animate-hash" style={{ '--hash-delay': '0s' } as React.CSSProperties}>
                    #
                  </span>{' '}
                  The Architecture
                </h3>
                <p className="leading-relaxed !text-white text-sm md:text-base">
                  I&apos;m <strong>Mohammed Saifulhuq</strong> — Founder of <strong>DLQ Revive</strong> (open-source Kafka recovery), Apache Fineract contributor, and Computer Science graduate (B.Sc., 2023). I genuinely believe the best systems are born from curiosity, not convenience.
                  <br /><br />
                  My path into tech wasn&apos;t linear — and honestly, that&apos;s what makes it worth telling. I began in revenue cycle management as an AR Caller, decoding complex claim workflows and payer logic before pivoting entirely into software development through sheer self-discipline, late-night builds, and the kind of mentorship that changes trajectories. I didn&apos;t wait for the perfect opportunity — <strong>I built one.</strong>
                  <br /><br />
                  From architecting production-safe Kafka consumers and idempotent redrives to patching SQL injection vulnerabilities in a globally deployed fintech engine, I&apos;m driven by one thing: building real solutions to real problems, at production scale. If there&apos;s a hard problem on the table, consider me already at the whiteboard.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl !text-white mb-4 uppercase flex items-center gap-2">
                  <span className="text-accent animate-hash" style={{ '--hash-delay': '1s' } as React.CSSProperties}>
                    #
                  </span>{' '}
                  Tech Payload
                </h3>
                <StaggerContainer className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm !text-white">
                  {techStack.map((tech) => (
                    <StaggerItem key={tech}>
                      <span className="glass-pill px-3 py-1.5 text-white/90 hover:text-accent cursor-crosshair inline-block">
                        {tech}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl !text-white mb-4 uppercase flex items-center gap-2">
                  <span className="text-accent animate-hash" style={{ '--hash-delay': '2s' } as React.CSSProperties}>
                    #
                  </span>{' '}
                  Operating Directive
                </h3>
                <p className="leading-relaxed !text-white text-sm md:text-base border-l-2 border-muted/30 pl-4">
                  I don&apos;t settle for surface-level fluency with frameworks — I push until I understand <strong>why</strong> they work, not just how to use them.
                  <br /><br />
                  That means founding <strong>DLQ Revive</strong> to solve a zero-tooling gap in Kafka dead-letter queue recovery — architecting assign()+seek() consumers, idempotency guards on UNIQUE(topic, partition, offset), and JSONata-only transforms to eliminate RCE risk. It means patching SQL injection vulnerabilities in Apache Fineract (PR #5465) and designing system-wide idempotency interceptors for GSoC 2026. It means reducing Angular bundle loads by 40% with <strong>OnPush</strong> change detection and <strong>exhaustMap</strong> pipelines that eliminate race conditions before they ever reach production.
                  <br /><br />
                  Performance isn&apos;t a bonus feature — it&apos;s the baseline. Every millisecond of latency, every wasted memory allocation, every redundant API call is a problem worth solving. I build with that mindset baked in from line one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
