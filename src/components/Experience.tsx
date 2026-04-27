'use client';
import { motion } from 'framer-motion';
import { SVGDrawPath } from '@/components/ui/RoughElements';
import { SectionReveal } from '@/components/ui/MotionPrimitives';

export default function Experience() {
  const experiences = [
    {
      role: 'Founder & Solo Engineer',
      company: 'DLQ Revive — Open Source Kafka Recovery',
      period: 'April 2026 – Present',
      points: [
        'Validated zero-tooling gap in Kafka DLQ schema recovery via r/apachekafka community research; architected production-safe consumer using assign()+seek() to prevent partition stealing from live consumers.',
        'Engineered idempotency guard on UNIQUE(topic, partition, offset) with SELECT-before-produce semantics — pod restarts during bulk redrives cannot double-process financial messages; JSONata-only transforms eliminate RCE risk.',
        'Shipped full open-source core: paginated DLQ reader, schema transformation engine, PostgreSQL audit trail, GitHub Actions CI; MIT licensed with public contributor roadmap.'
      ]
    },
    {
      role: 'Open Source Contributor',
      company: 'Apache Fineract (Core Banking)',
      period: 'January 2026 – Present',
      points: [
        'Patched critical SQL Injection in core lending engine; PR #5465 resolved Liquibase migration failures achieving 100% green CI across PostgreSQL, MariaDB, MySQL. Coordinated with PMC members on security roadmap.',
        'Architecting system-wide transaction idempotency interceptor (FINERACT-2485): OncePerRequestFilter + PostgreSQL INSERT ... ON CONFLICT DO NOTHING atomic locks replacing exception-driven control flow.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Muthu Soft Labs',
      period: 'April 2025 – March 2026',
      points: [
        'Reduced Angular initial bundle load by 40% via OnPush change detection and lazy-loaded modules; eliminated API race conditions using RxJS exhaustMap/switchMap pipelines across distributed Spring Boot services.',
        'Led legacy Angular component migration cutting technical debt; resolved production-critical distributed system bugs directly with stakeholders; enforced SOLID principles through peer code reviews.'
      ]
    },
    {
      role: 'Freelance Software Developer',
      company: 'Independent Contractor (Freelancer.com)',
      period: 'June 2023 – March 2025',
      points: [
        'Delivered Android applications end-to-end for international clients: UI with Jetpack Compose, state management via ViewModel, REST API integration, and iterative feature delivery from requirement gathering to release.'
      ]
    },
    {
      role: 'Associate, Data Operations',
      company: 'Vee Technologies',
      period: 'July 2024 – March 2025',
      points: [
        'Managed revenue cycle operations while self-studying Java and distributed systems concurrently; transitioned fully into software engineering within 8 months.'
      ]
    }
  ];

  const education = [
    { degree: 'B.Sc. in Computer Science', place: 'Dhanraj Baid Jain College', period: 'June 2020 – April 2023', detail: 'CGPA: 8.52 / 10' }
  ];

  return (
    <section id="experience" className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">

      {/* Experience Timeline */}
      <div className="relative">
        <SectionReveal direction="left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-accent mb-12 font-bold font-display uppercase tracking-widest">
            ~ Service Logs
          </h2>
        </SectionReveal>

        <div className="relative border-l-2 border-accent/20 pl-8 ml-4">
          <SVGDrawPath stroke="var(--color-accent)" />

          <div className="relative z-10 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group"
              >
                {/* Timeline dot — glass orb style */}
                <div className="absolute -left-[41px] mt-1.5">
                  <div className="w-4 h-4 rounded-full glass-orb group-hover:scale-110 transition-transform" />
                </div>

                <motion.h3
                  className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide text-white group-hover:text-accent transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {exp.role}
                </motion.h3>
                <div className="font-mono text-white mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                  <span className="text-white glass-pill px-2 py-0.5 text-sm">{exp.company}</span>
                  <span className="text-xs uppercase tracking-widest text-accent-dim">{exp.period}</span>
                </div>
                <ul className="space-y-3 font-mono text-sm md:text-base">
                  {exp.points.map((point, j) => (
                    <motion.li
                      key={j}
                      className="text-white flex gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.1 + 0.3 }}
                    >
                      {/* CSS animated chevron instead of Framer Motion infinite loop */}
                      <span
                        className="text-accent mt-0.5 inline-block animate-chevron"
                        style={{ '--chevron-delay': `${3 + j}s` } as React.CSSProperties}
                      >
                        {'>'}
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certs */}
      <div className="space-y-16">
        <div>
          <SectionReveal direction="right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-accent mb-12 font-bold font-display uppercase tracking-widest">
              ~ Academics
            </h2>
          </SectionReveal>
          <div className="space-y-8 font-mono">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10, borderColor: 'rgba(255, 69, 0, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="p-6 glass-liquid glass-light-leak glass-edge-iridescent rounded-lg transition-all shadow-xl relative overflow-hidden group"
              >
                <h3 className="text-lg md:text-xl font-bold text-white uppercase relative z-10">{edu.degree}</h3>
                <div className="text-accent text-sm mt-1 mb-3 relative z-10">{edu.period}</div>
                <div className="text-white text-sm md:text-base flex flex-col sm:flex-row sm:items-center gap-2 mt-2 relative z-10">
                  <span className="!text-white text-white font-bold">{edu.place}</span>
                  {edu.detail && <span className="text-white glass-pill px-2 text-xs py-1 w-fit">{edu.detail}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <SectionReveal direction="right" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-accent mb-12 font-bold font-display uppercase tracking-widest">
              ~ Certifications
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(255, 69, 0, 0.1)' }}
              className="p-4 glass-liquid glass-light-leak glass-edge-iridescent rounded-lg hover:border-accent group transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
              <h4 className="text-white font-bold group-hover:text-accent transition-colors">ICT by PayPal</h4>
              <p className="text-xs md:text-sm text-white mt-2">CRM Course endorsed by PayPal (Feb 2023 - April 2023)</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(255, 69, 0, 0.1)' }}
              className="p-4 glass-liquid glass-light-leak glass-edge-iridescent rounded-lg hover:border-accent group transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
              <h4 className="text-white font-bold group-hover:text-accent transition-colors">DLK Career Dev</h4>
              <p className="text-xs md:text-sm text-white mt-2">Android Development Course (Aug 2022 - Sept 2022)</p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
