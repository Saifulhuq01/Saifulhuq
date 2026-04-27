'use client';
import { SVGDrawPath } from '@/components/ui/RoughElements';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionReveal } from '@/components/ui/MotionPrimitives';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetName: formData.get('targetName'),
          targetEmail: formData.get('targetEmail'),
          payload: formData.get('payload'),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to dispatch payload.');
      }

      setStatus('success');
      form.reset();
      
      // Reset success state after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Dispatch Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Transmission failed. Try again.');
    }
  };

  const socialLinks = [
    { label: 'Email', val: 'mohammed.saifulhuq@gmail.com', href: 'mailto:mohammed.saifulhuq@gmail.com', icon: '✉' },
    { label: 'GitHub', val: 'github.com/Saifulhuq01', href: 'https://github.com/Saifulhuq01', icon: '⌘' },
    { label: 'LinkedIn', val: 'linkedin.com/in/saifulhuq', href: 'https://www.linkedin.com/in/saifulhuq', icon: '◆' },
    { label: 'LeetCode', val: 'leetcode.com/saiful_huq', href: 'https://leetcode.com/saiful_huq/', icon: '⟁' }
  ];

  return (
    <section id="contact" className="relative pt-32 pb-12 mt-20">
      {/* Top border scratch */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-muted/20" />
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <SectionReveal direction="left">
          <h2 className="text-4xl md:text-6xl text-accent mb-6 font-bold uppercase font-display leading-tight">
            Drop a <br />
            <span className="text-white relative inline-block">
              Message
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform -skew-x-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl font-mono text-gray-400 mb-12 leading-relaxed">
            Ready to architect something massive? My inbox is always open for robust system builds and deep-tech collaborations.
          </p>
          
          <div className="flex flex-col space-y-6 font-mono text-lg md:text-xl">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-fit relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <span className="text-accent uppercase text-sm tracking-widest flex items-center gap-2">
                  {/* CSS animated icon instead of Framer infinite loop */}
                  <span
                    className="text-lg animate-icon-wiggle"
                    style={{ '--icon-delay': `${2 + i}s` } as React.CSSProperties}
                  >
                    {link.icon}
                  </span>
                  {link.label}
                </span>
                <span className="text-white group-hover:text-accent transition-colors border-b border-transparent group-hover:border-accent pb-0.5">
                  {link.val}
                </span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full hidden md:block">
              <SVGDrawPath stroke="var(--color-accent-dim)" />
            </div>

            <form 
              className="relative z-10 space-y-8 font-mono glass-refract rounded-lg p-6 md:p-8 overflow-hidden group/form"
              onSubmit={handleSubmit}
            >
              {/* Animated border glow on focus-within */}
              <div className="absolute inset-0 border border-accent/0 group-focus-within/form:border-accent/20 transition-all duration-500 pointer-events-none rounded-lg" />

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center glass-liquid rounded-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="text-accent text-center"
                    >
                      <motion.div
                        className="text-5xl mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        ✓
                      </motion.div>
                      <div className="text-3xl mb-4">{'// ACKNOWLEDGED'}</div>
                      <p className="text-white text-sm tracking-widest uppercase">Payload sequence complete.</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {[
                { name: 'targetName', label: 'Target_Name', type: 'text' },
                { name: 'targetEmail', label: 'Target_Email', type: 'email' },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  className="flex flex-col relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label className="text-gray-400 mb-2 text-xs md:text-sm uppercase tracking-widest group-focus-within:text-accent transition-colors">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    disabled={status === 'loading'}
                    type={field.type}
                    className="bg-white/[0.02] border-b border-muted/30 focus:border-accent outline-none p-3 text-white transition-all w-full focus:bg-white/[0.04] disabled:opacity-50 focus:pl-5 rounded-sm"
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-gray-400 mb-2 text-xs md:text-sm uppercase tracking-widest group-focus-within:text-accent transition-colors">
                  Payload (Message)
                </label>
                <textarea
                  name="payload"
                  disabled={status === 'loading'}
                  rows={4}
                  className="bg-white/[0.02] border-b border-muted/30 focus:border-accent outline-none p-3 text-white transition-all resize-none w-full focus:bg-white/[0.04] disabled:opacity-50 focus:pl-5 rounded-sm"
                  required
                />
              </motion.div>
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 text-sm font-bold uppercase tracking-widest"
                >
                  [ERROR]: {errorMessage}
                </motion.div>
              )}

              <motion.button
                disabled={status === 'loading'}
                type="submit"
                className="w-full relative inline-block px-8 py-4 font-bold text-white bg-accent hover:bg-white hover:text-black transition-colors uppercase tracking-[0.3em] overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 transition-colors group-hover:text-black">
                  {status === 'loading' ? (
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      EXECUTING...
                    </motion.span>
                  ) : (
                    'EXECUTE_SEND'
                  )}
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
              </motion.button>
            </form>
          </div>
        </SectionReveal>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 md:mt-32 pt-12 pb-12 flex flex-col items-center justify-center border-t border-muted/10 font-mono !text-white text-sm md:text-base relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* CSS-animated watermark instead of Framer Motion */}
        <div
          className="absolute inset-0 flex items-center opacity-[0.02] select-none pointer-events-none whitespace-nowrap text-8xl font-black italic uppercase tracking-widest animate-watermark gpu-layer"
        >
          SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ &nbsp; SAIFULHUQ
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-base text-accent font-bold tracking-[0.5em]">///</div>
        
        <p className="text-center relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 uppercase leading-relaxed">
          <span className="text-accent-dim">{'>>'}</span>
          <span>Engineered with</span>
          <span className="text-white glass-pill px-2 py-0.5 animate-box-glow">
            SHEER_SELF_DISCIPLINE
          </span>
          <span>by</span>
          <strong className="text-white tracking-[0.2em] relative group cursor-crosshair">
            MOHAMMED SAIFULHUQ
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </strong>
        </p>

        <div className="mt-8 flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/30 relative z-10">
          <span className="flex items-center gap-1.5">
            {/* CSS animated status pulse instead of Framer infinite loop */}
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-status-pulse" />
            STATUS: PRODUCTION_READY
          </span>
          <span>BUILD: v2.0.0</span>
        </div>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 group relative px-10 py-3 overflow-hidden glass-liquid rounded-lg flex items-center gap-4 transition-all border-accent/30"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 69, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg" />
          <span className="relative z-10 text-accent group-hover:text-white transition-colors uppercase text-xs md:text-sm font-black tracking-[0.4em]">
            Export_Full_Payload (Resume)
          </span>
          <span className="relative z-10 text-accent group-hover:text-white transition-colors group-hover:translate-x-1 transition-transform">
            →
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
