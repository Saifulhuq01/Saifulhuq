'use client';
import { motion } from 'framer-motion';
import { HandDrawnButton, RoughHighlight } from '@/components/ui/RoughElements';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-accent font-mono mb-4 text-sm md:text-lg animate-blink flex items-center">
          <span className="text-zinc-500 mr-2">root@saifulhuq:~$</span> ./init_system
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 text-white uppercase font-display leading-[0.9]">
          Mohammed<br />
          Saifulhuq <span className="text-accent">/Sai/</span>
        </h1>

        <div className="space-y-6 md:space-y-8 max-w-4xl border-l-2 border-accent/40 pl-4 md:pl-6 ml-1 uppercase">
          <p className="text-xl md:text-2xl font-mono !text-white leading-tight">
            I architect high-performance, production-grade distributed systems —
            <span className="bg-[#FF4500] text-white px-3 py-1 mx-1 font-black italic -rotate-1 inline-block shadow-[4px_4px_0px_0px_#cc3700]"> no shortcuts, no sugarcoating, </span>
            just battle-tested code built to scale.
          </p>

          <p className="text-lg md:text-xl font-mono !text-white leading-relaxed lowercase">
            Somewhere between a <span className="text-accent underline decoration-dotted">switchMap</span> and a cold brew is where the magic happens. <br />
            I don't just write code — I engineer systems that <strong className="text-white border-b-2 border-accent uppercase">communicate, perform, and endure.</strong>
          </p>
        </div>

        <div className="mt-12">
          <HandDrawnButton href="#projects">
            Tear Down My Code
          </HandDrawnButton>
        </div>
      </motion.div>
    </section>
  )
}
