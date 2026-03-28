'use client';
import { SVGDrawPath } from '@/components/ui/RoughElements';
import { motion } from 'framer-motion';
import { useState } from 'react';

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

  return (
    <section id="contact" className="relative pt-32 pb-12 mt-20">
      {/* Top border scratch */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-muted/20" />
      <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-accent/50 filter blur-[2px]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-accent mb-6 font-bold uppercase font-display leading-tight">Drop a <br/><span className="text-white relative inline-block">Message<span className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform -skew-x-12"></span></span></h2>
          <p className="text-lg md:text-xl font-mono text-gray-400 mb-12 leading-relaxed">
            Ready to architect something massive? My inbox is always open for robust system builds and deep-tech collaborations.
          </p>
          
          <div className="flex flex-col space-y-6 font-mono text-lg md:text-xl">
            {[
              { label: 'Email', val: 'mohammed.saifulhuq@gmail.com', href: 'mailto:mohammed.saifulhuq@gmail.com' },
              { label: 'GitHub', val: 'github.com/Saifulhuq01', href: 'https://github.com/Saifulhuq01' },
              { label: 'LinkedIn', val: 'linkedin.com/in/saifulhuq', href: 'https://www.linkedin.com/in/saifulhuq' },
              { label: 'LeetCode', val: 'leetcode.com/saiful_huq', href: 'https://leetcode.com/saiful_huq/' }
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-4 w-fit">
                <span className="text-accent uppercase text-sm tracking-widest">{link.label}</span>
                <span className="text-white group-hover:text-accent transition-colors border-b border-transparent group-hover:border-accent pb-0.5">{link.val}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-6 top-0 h-full hidden md:block">
            <SVGDrawPath stroke="var(--color-accent-dim)" />
          </div>

          <form 
            className="relative z-10 space-y-8 font-mono bg-surface-2/50 p-6 md:p-8 border border-muted/10" 
            onSubmit={handleSubmit}
          >
            {status === 'success' && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface-2/95 backdrop-blur-sm border border-accent/20">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-accent text-center"
                >
                  <div className="text-4xl mb-4">{'// ACKNOWLEDGED'}</div>
                  <p className="text-white text-sm tracking-widest uppercase">Payload sequence complete.</p>
                </motion.div>
              </div>
            )}

            <div className="flex flex-col relative group">
              <label className="text-gray-400 mb-2 text-xs md:text-sm uppercase tracking-widest group-focus-within:text-accent transition-colors">Target_Name</label>
              <input name="targetName" disabled={status === 'loading'} type="text" className="bg-surface border-b border-muted/30 focus:border-accent outline-none p-3 text-white transition-colors w-full focus:bg-surface-2/80 disabled:opacity-50" required />
            </div>
            <div className="flex flex-col relative group">
              <label className="text-gray-400 mb-2 text-xs md:text-sm uppercase tracking-widest group-focus-within:text-accent transition-colors">Target_Email</label>
              <input name="targetEmail" disabled={status === 'loading'} type="email" className="bg-surface border-b border-muted/30 focus:border-accent outline-none p-3 text-white transition-colors w-full focus:bg-surface-2/80 disabled:opacity-50" required />
            </div>
            <div className="flex flex-col relative group">
              <label className="text-gray-400 mb-2 text-xs md:text-sm uppercase tracking-widest group-focus-within:text-accent transition-colors">Payload (Message)</label>
              <textarea name="payload" disabled={status === 'loading'} rows={4} className="bg-surface border-b border-muted/30 focus:border-accent outline-none p-3 text-white transition-colors resize-none w-full focus:bg-surface-2/80 disabled:opacity-50" required></textarea>
            </div>
            
            {status === 'error' && (
              <div className="text-red-500 text-sm font-bold uppercase tracking-widest">
                [ERROR]: {errorMessage}
              </div>
            )}

            <button disabled={status === 'loading'} type="submit" className="w-full relative inline-block px-8 py-4 font-bold text-white bg-accent hover:bg-white hover:text-black transition-colors uppercase tracking-[0.3em] overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="relative z-10 transition-colors group-hover:text-black">
                {status === 'loading' ? 'EXECUTING...' : 'EXECUTE_SEND'}
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-24 md:mt-32 pt-12 pb-12 flex flex-col items-center justify-center border-t border-muted/10 font-mono !text-white text-sm md:text-base relative w-full overflow-hidden">
        {/* Abstract background watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none whitespace-nowrap text-8xl font-black italic uppercase tracking-widest">
          SAIFULHUQ SAIFULHUQ SAIFULHUQ
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-base text-accent font-bold tracking-[0.5em]">///</div>
        
        <p className="text-center relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 uppercase leading-relaxed">
          <span className="text-accent-dim">{'>>'}</span>
          <span>Engineered with</span>
          <span className="text-white border border-white/20 px-2 py-0.5 rounded-sm bg-white/5 backdrop-blur-md animate-pulse">
            SHEER_SELF_DISCIPLINE
          </span>
          <span>by</span>
          <strong className="text-white tracking-[0.2em] relative group cursor-crosshair">
            MOHAMMED SAIFULHUQ
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </strong>
        </p>

        <div className="mt-8 flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/30 relative z-10">
          <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div> STATUS: PRODUCTION_READY</span>
          <span>BUILD: v1.0.42</span>
        </div>

        <a href="https://saifulhuq.vercel.app/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-12 group relative px-10 py-3 overflow-hidden border border-accent flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/5">
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative z-10 text-accent group-hover:text-white transition-colors uppercase text-xs md:text-sm font-black tracking-[0.4em]">
            Export_Full_Payload (Resume)
          </span>
          <span className="relative z-10 text-accent group-hover:text-white transition-colors transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  )
}
