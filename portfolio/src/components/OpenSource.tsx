'use client';
import { motion } from 'framer-motion';

const contributions = [
  {
    id: "FINERACT-2471",
    title: "Force Debit Functionality",
    desc: "Implemented 'Force Debit' for Savings Accounts with configurable limits on the Apache Fineract platform.",
    impact: "Functional Enhancement"
  },
  {
    id: "FINERACT-2464",
    title: "Architecture Refactoring",
    desc: "Refactored core LoanScheduleAssembler logic extraction to improve maintainability and performance.",
    impact: "Code Sustainability"
  },
  {
    id: "FINERACT-2461/59",
    title: "SQL Injection Security",
    desc: "Secured Email and SMS Read Services by transitioning from string concatenation to Prepared Statements.",
    impact: "Security Hardening"
  },
  {
    id: "Mifos X Web",
    title: "Angular Frontend Contributor",
    desc: "Active contributor to the Mifos X (OpenMF) Angular web application, optimizing UI layers for micro-finance workflows.",
    impact: "UI Optimization"
  }
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-5xl text-accent mb-12 font-bold font-display uppercase tracking-widest"
      >
        // Upstream Contributions
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
        {contributions.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 md:p-8 bg-surface-2/30 border border-muted/10 hover:border-accent/40 transition-all overflow-hidden"
          >
            {/* Jittery edge line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-accent/10 group-hover:bg-accent/30 transition-colors" />
            
            <div className="flex items-start justify-between mb-4">
              <span className="text-accent font-bold text-sm tracking-tighter">{c.id}</span>
              <span className="text-[10px] uppercase border border-white/20 px-2 py-0.5 text-white/50">{c.impact}</span>
            </div>

            <h3 className="text-xl text-white font-bold mb-4 uppercase group-hover:text-accent transition-colors">
              {c.title}
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {c.desc}
            </p>

            <a 
              href="https://github.com/Saifulhuq01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-[10px] uppercase tracking-widest text-white/40 hover:text-accent transition-colors"
            >
              [ View Patch on GitHub ]
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
