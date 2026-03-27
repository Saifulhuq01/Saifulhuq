'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Razorpay Clone",
    desc: "A fully responsive Razorpay homepage clone showcasing layout skills, responsive design, and modern UI.",
    tech: "HTML / Tailwind CSS",
    linkText: "Live Demo",
    linkHref: "https://glittering-seahorse-d978ed.netlify.app/"
  },
  {
    title: "Chat App",
    desc: "Real-time messaging app built in Kotlin using Firebase Realtime Database and Authentication. Clean UI, group chat.",
    tech: "Kotlin / Firebase",
    linkText: "GitHub Repo",
    linkHref: "https://github.com/Saifulhuq01/ChatApp"
  },
  {
    title: "Railway Reservation System",
    desc: "Console-based Java project that simulates ticket reservations with seat allocation, cancellation, and queue handling.",
    tech: "Java",
    linkText: "GitHub Repo",
    linkHref: "https://github.com/Saifulhuq01/Saifulhuq01-Railway-Reservation-System"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-accent mb-16 font-bold text-center font-display uppercase tracking-widest"
      >
        {'<'} Built Executables {'>'}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -10 }}
            className="group relative bg-surface-2/80 p-6 md:p-8 border border-muted/20 hover:border-accent transition-all duration-300 flex flex-col justify-between min-h-[320px] backdrop-blur-sm"
          >
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            
            <div>
              <div className="text-accent font-mono text-sm mb-4">{'// Project_0'+(i+1)}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-display uppercase text-white group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-mono text-sm md:text-base">
                {p.desc}
              </p>
            </div>
            
            <div className="mt-8 pt-4 font-mono relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-muted/20 to-transparent" />
              <div className="text-xs md:text-sm mb-4 flex items-center justify-between">
                <span className="text-gray-400">{p.tech}</span>
              </div>
              <a href={p.linkHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-bold group/link">
                [ {p.linkText} ]
                <span className="ml-2 transform transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
