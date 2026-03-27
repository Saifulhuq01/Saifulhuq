import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white">
      {/* Raw texture layer */}
      <div className="pointer-events-none fixed inset-0 z-50 h-[150vh] w-full opacity-[0.05] bg-noise mix-blend-overlay" />
      
      {/* Abstract background shapes targeting performance GPUs */}
      <div className="fixed -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 filter blur-[100px] pointer-events-none" />
      <div className="fixed top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-900/5 filter blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-24 space-y-32 md:space-y-40 relative z-10 overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <OpenSource />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
