'use client';
import { motion } from 'framer-motion';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/MotionPrimitives';

const projects = [
  {
    title: "DLQ Revive",
    desc: "Open-source Kafka Dead-Letter Queue recovery tool. Production-safe consumer with assign()+seek(), idempotent redrives, JSONata transforms, paginated DLQ reader, PostgreSQL audit trail, and GitHub Actions CI. MIT licensed.",
    tech: "Java 17 / Spring Boot 3 / Apache Kafka / PostgreSQL",
    linkText: "GitHub Repo",
    linkHref: "https://github.com/Saifulhuq01/dlq-revive",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    title: "Fineract GSoC 2026",
    desc: "System-wide command idempotency interceptor for Apache Fineract. Proposed O(1) OncePerRequestFilter replacing exception-based idempotency, coordinated with PMC Chair as FINERACT-2485 sub-task.",
    tech: "Java 17 / Spring Boot 3 / PostgreSQL",
    linkText: "JIRA Ticket",
    linkHref: "https://issues.apache.org/jira/browse/FINERACT-2485",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    title: "Razorpay Clone",
    desc: "A fully responsive Razorpay homepage clone showcasing layout skills, responsive design, and modern UI.",
    tech: "HTML / Tailwind CSS",
    linkText: "Live Demo",
    linkHref: "https://glittering-seahorse-d978ed.netlify.app/",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "Chat App",
    desc: "Real-time messaging app built in Kotlin using Firebase Realtime Database and Authentication. Clean UI, group chat.",
    tech: "Kotlin / Firebase",
    linkText: "GitHub Repo",
    linkHref: "https://github.com/Saifulhuq01/ChatApp",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
  },
  {
    title: "Railway Reservation System",
    desc: "Console-based Java project that simulates ticket reservations with seat allocation, cancellation, and queue handling.",
    tech: "Java",
    linkText: "GitHub Repo",
    linkHref: "https://github.com/Saifulhuq01/Saifulhuq01-Railway-Reservation-System",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <SectionReveal>
        <h2 className="text-3xl md:text-5xl text-accent mb-16 font-bold text-center font-display uppercase tracking-widest">
          {'<'} Built Executables {'>'}
        </h2>
      </SectionReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <StaggerItem key={i}>
            {/* CSS-only 3D tilt replaces per-card useMotionValue springs */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group relative card-tilt glass-refract glass-light-leak glass-edge-iridescent rounded-lg p-6 md:p-8 transition-all duration-300 flex flex-col justify-between min-h-[320px] overflow-hidden"
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg`} />

              {/* Animated border beam */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 rounded-bl-lg" />

              <div className="relative z-10">
                <div className="text-accent font-mono text-sm mb-4 flex items-center gap-2">
                  {/* CSS animation instead of Framer infinite loop */}
                  <span className="animate-comment-blink">
                    {'//'}
                  </span>
                  Project_0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 font-display uppercase text-white group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="!text-white text-white leading-relaxed font-mono text-sm md:text-base">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 font-mono relative z-10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-muted/20 to-transparent" />
                <div className="text-xs md:text-sm mb-4 flex items-center justify-between">
                  <span className="!text-white text-white">{p.tech}</span>
                </div>
                <a
                  href={p.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-bold group/link"
                >
                  [ {p.linkText} ]
                  <span className="ml-2 inline-block group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
