'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 100);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 py-3"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between px-6 py-3 rounded-2xl glass-liquid">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-accent font-mono font-bold text-sm tracking-widest uppercase flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              SAI.NUX
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] transition-colors cursor-pointer ${
                    activeSection === link.href ? 'text-accent' : 'text-white/50 hover:text-white/80'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Status indicator */}
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-status-pulse" />
              Online
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-5 h-[1.5px] bg-accent block"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
              />
              <motion.span
                className="w-5 h-[1.5px] bg-accent block"
                animate={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-5 h-[1.5px] bg-accent block"
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -4 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' as const : 'none' as const,
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[99] bg-base/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link, i) => (
          <motion.button
            key={link.href}
            onClick={() => handleClick(link.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0, transition: { delay: i * 0.08 } } : { opacity: 0, y: 20 }}
            className={`text-2xl font-display uppercase tracking-[0.2em] cursor-pointer ${
              activeSection === link.href ? 'text-accent' : 'text-white/60'
            }`}
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}
