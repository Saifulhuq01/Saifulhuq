'use client';
import { motion } from 'framer-motion';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui/MotionPrimitives';

const contributions = [
  {
    id: "DLQ-REVIVE",
    title: "Kafka DLQ Recovery Tool",
    desc: "Founded and built open-source Kafka Dead-Letter Queue recovery tool. Production-safe consumer using assign()+seek(), idempotent redrives with UNIQUE(topic, partition, offset), JSONata transforms, PostgreSQL audit trail.",
    impact: "Open Source Founder",
    link: "https://github.com/Saifulhuq01/dlq-revive",
    color: "from-orange-500",
  },
  {
    id: "FINERACT-2485",
    title: "GSoC 2026 — Command Idempotency",
    desc: "Proposed O(1) OncePerRequestFilter replacing exception-based idempotency for system-wide transaction safety. Coordinated with PMC Chair under architecture epic FINERACT-2169.",
    impact: "Architecture Proposal",
    link: "https://issues.apache.org/jira/browse/FINERACT-2485",
    color: "from-blue-500",
  },
  {
    id: "PR #5465",
    title: "SQL Injection Security Patch",
    desc: "Patched critical SQL Injection in core lending engine; resolved Liquibase migration failures achieving 100% green CI across PostgreSQL, MariaDB, MySQL.",
    impact: "Security Hardening",
    link: "https://github.com/apache/fineract/pull/5465",
    color: "from-red-500",
  },
  {
    id: "FINERACT-2461/59",
    title: "Email & SMS Security",
    desc: "Secured Email and SMS Read Services by transitioning from string concatenation to Prepared Statements across the Apache Fineract platform.",
    impact: "Security Hardening",
    link: "https://github.com/Saifulhuq01",
    color: "from-emerald-500",
  },
  {
    id: "Mifos X Web",
    title: "Angular Frontend Contributor",
    desc: "Active contributor to the Mifos X (OpenMF) Angular web application, optimizing UI layers for micro-finance workflows.",
    impact: "UI Optimization",
    link: "https://github.com/Saifulhuq01",
    color: "from-purple-500",
  }
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <SectionReveal direction="left">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-accent mb-12 font-bold font-display uppercase tracking-widest">
          // Upstream Contributions
        </h2>
      </SectionReveal>

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        {contributions.map((c, i) => (
          <StaggerItem key={i}>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group relative p-6 md:p-8 glass-refract glass-light-leak glass-edge-iridescent rounded-lg transition-all overflow-hidden"
            >
              {/* Animated left edge with unique color */}
              <motion.div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${c.color} to-transparent`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ transformOrigin: 'top' }}
              />

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${c.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex items-start justify-between mb-4 relative z-10">
                <span className="text-accent font-bold text-sm tracking-tighter">
                  {c.id}
                </span>
                <span className="text-[10px] uppercase glass-pill px-2 py-0.5 text-white/50 group-hover:text-accent/60 transition-all">
                  {c.impact}
                </span>
              </div>

              <h3 className="text-xl text-white font-bold mb-4 uppercase group-hover:text-accent transition-colors relative z-10">
                {c.title}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10">
                {c.desc}
              </p>

              <motion.a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] uppercase tracking-widest text-white/40 hover:text-accent transition-colors relative z-10"
                whileHover={{ x: 4 }}
              >
                [ View Patch on GitHub ]
                <motion.span className="ml-1" whileHover={{ x: 3 }}>→</motion.span>
              </motion.a>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
