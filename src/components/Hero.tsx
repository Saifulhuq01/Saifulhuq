'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HandDrawnButton } from '@/components/ui/RoughElements';
import TechAssembly from '@/components/ui/TechAssembly';
import TextScramble from '@/components/ui/TextScramble';
import { GlitchText } from '@/components/ui/MotionPrimitives';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex flex-col justify-center min-h-[95vh] py-20">
      {/* Radial glow behind hero */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <motion.div style={{ y, opacity }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          {/* Left column — all text content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Terminal prompt with glass backing */}
            <motion.div
              className="text-accent font-mono mb-4 text-sm md:text-lg flex items-center glass-pill px-4 py-2 w-fit rounded-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-zinc-500 mr-2">root@saifulhuq:~$</span>
              <TextScramble text="./init_system" delay={500} speed={40} />
              <motion.span
                className="ml-1 inline-block w-2 h-4 bg-accent"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              />
            </motion.div>

            {/* Name with staggered letter reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 text-white uppercase font-display leading-[0.9]"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="block">
                  <GlitchText text="Mohammed" />
                </span>
                <span className="block">
                  <GlitchText text="Saifulhuq" />{' '}
                  <motion.span
                    className="text-accent relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  >
                    /Sai.nux/
                    <motion.span
                      className="absolute -inset-2 border border-accent/20 -skew-x-3"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.4 }}
                    />
                  </motion.span>
                </span>
              </motion.h1>
            </div>

            <motion.div
              className="space-y-6 md:space-y-8 max-w-4xl border-l-2 border-accent/40 pl-4 md:pl-6 ml-1 uppercase"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl font-mono !text-white leading-tight">
                I architect high-performance, production-grade distributed systems —
                <motion.span
                  className="bg-[#FF4500] text-white px-3 py-1 mx-1 font-black italic -rotate-1 inline-block shadow-[4px_4px_0px_0px_#cc3700]"
                  whileHover={{ rotate: 1, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  no shortcuts, no sugarcoating,
                </motion.span>
                just battle-tested code built to scale.
              </p>

              <p className="text-lg md:text-xl font-mono !text-white leading-relaxed lowercase">
                Somewhere between a{' '}
                <span className="text-accent underline decoration-dotted">switchMap</span> and a
                cold brew is where the magic happens. <br />
                I don&apos;t just write code — I engineer systems that{' '}
                <strong className="text-white border-b-2 border-accent uppercase">
                  communicate, perform, and endure.
                </strong>
              </p>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <HandDrawnButton href="#projects">Tear Down My Code</HandDrawnButton>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16 flex flex-col items-center gap-2 text-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
              <motion.div
                className="w-[1px] h-8 bg-gradient-to-b from-accent/50 to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Right column — animated tech assembly schematic */}
          <motion.div
            className="hidden md:flex items-center justify-center w-[320px] lg:w-[380px] xl:w-[420px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <TechAssembly />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
