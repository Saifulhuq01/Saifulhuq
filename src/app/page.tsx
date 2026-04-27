import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MagneticCursor from '@/components/ui/MagneticCursor'
import ParticleField from '@/components/ui/ParticleField'
import Navbar from '@/components/ui/Navbar'
import { SectionDivider } from '@/components/ui/MotionPrimitives'

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white cursor-none md:cursor-none">
      {/* Custom cursor */}
      <MagneticCursor />

      {/* Particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Raw texture layer */}
      <div className="pointer-events-none fixed inset-0 z-50 h-[150vh] w-full opacity-[0.03] bg-noise mix-blend-overlay gpu-layer" />
      
      {/* Abstract background shapes — tuned for liquid glass depth */}
      <div className="fixed -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/[0.025] filter blur-[140px] pointer-events-none animate-breathe gpu-layer" />
      <div className="fixed top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-900/[0.03] filter blur-[160px] pointer-events-none animate-breathe-slow gpu-layer" />
      <div className="fixed bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-900/[0.02] filter blur-[120px] pointer-events-none animate-breathe gpu-layer" />
      
      {/* Subtle mesh gradient layer for glass depth */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.015]"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(255, 69, 0, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(100, 100, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(200, 100, 255, 0.08) 0%, transparent 50%)'
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-24 relative z-10 overflow-x-hidden">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <OpenSource />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </div>
    </div>
  )
}
