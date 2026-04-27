'use client';
import { motion } from 'framer-motion';

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
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-5xl text-accent mb-12 font-bold font-display uppercase tracking-widest"
      >
        // Core Engine & Specs
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative p-6 md:p-12 bg-surface-2/40 border-l border-b border-muted/20 backdrop-blur-sm"
      >
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
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
                <span className="text-accent">#</span> The Architecture
              </h3>
               <p className="leading-relaxed !text-white text-sm md:text-base">
                I'm <strong>Mohammed Saifulhuq</strong> — Founder of <strong>DLQ Revive</strong> (open-source Kafka recovery), Apache Fineract contributor, and Computer Science graduate (B.Sc., 2023). I genuinely believe the best systems are born from curiosity, not convenience.
                <br /><br />
                My path into tech wasn't linear — and honestly, that's what makes it worth telling. I began in revenue cycle management as an AR Caller, decoding complex claim workflows and payer logic before pivoting entirely into software development through sheer self-discipline, late-night builds, and the kind of mentorship that changes trajectories. I didn't wait for the perfect opportunity — <strong>I built one.</strong>
                <br /><br />
                From architecting production-safe Kafka consumers and idempotent redrives to patching SQL injection vulnerabilities in a globally deployed fintech engine, I'm driven by one thing: building real solutions to real problems, at production scale. If there's a hard problem on the table, consider me already at the whiteboard.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl !text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-accent">#</span> Tech Payload
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm !text-white">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-base shadow shadow-black/50 border border-accent/20 px-3 py-1.5 hover:border-accent hover:text-accent transition-all cursor-crosshair"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl !text-white mb-4 uppercase flex items-center gap-2">
                <span className="text-accent">#</span> Operating Directive
              </h3>
              <p className="leading-relaxed !text-white text-sm md:text-base border-l-2 border-muted/30 pl-4">
                I don't settle for surface-level fluency with frameworks — I push until I understand <strong>why</strong> they work, not just how to use them.
                <br /><br />
                That means founding <strong>DLQ Revive</strong> to solve a zero-tooling gap in Kafka dead-letter queue recovery — architecting assign()+seek() consumers, idempotency guards on UNIQUE(topic, partition, offset), and JSONata-only transforms to eliminate RCE risk. It means patching SQL injection vulnerabilities in Apache Fineract (PR #5465) and designing system-wide idempotency interceptors for GSoC 2026. It means reducing Angular bundle loads by 40% with <strong>OnPush</strong> change detection and <strong>exhaustMap</strong> pipelines that eliminate race conditions before they ever reach production.
                <br /><br />
                Performance isn't a bonus feature — it's the baseline. Every millisecond of latency, every wasted memory allocation, every redundant API call is a problem worth solving. I build with that mindset baked in from line one.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
