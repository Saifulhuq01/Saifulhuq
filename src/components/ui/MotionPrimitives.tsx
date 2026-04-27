'use client';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export function SectionReveal({ children, className = '', delay = 0, direction = 'up' }: SectionRevealProps) {
  const dirMap = {
    up: { y: 60, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="glitch"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-accent/50 z-0"
        variants={{
          glitch: {
            x: [0, -2, 3, -1, 0],
            y: [0, 1, -2, 1, 0],
            transition: { duration: 0.3, repeat: Infinity },
          },
        }}
        aria-hidden
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-400/30 z-0"
        variants={{
          glitch: {
            x: [0, 2, -3, 1, 0],
            y: [0, -1, 2, -1, 0],
            transition: { duration: 0.3, repeat: Infinity, delay: 0.05 },
          },
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </motion.span>
  );
}

export function CountUp({ target, suffix = '', className = '' }: { target: number; suffix?: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {target}{suffix}
      </motion.span>
    </motion.span>
  );
}

export function SectionDivider() {
  return (
    <div className="relative py-8 flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative z-10 w-3 h-3 rotate-45 border border-accent/40 bg-base"
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </div>
  );
}
