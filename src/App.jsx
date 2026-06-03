import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import BackgroundEasterEggs from './components/BackgroundEasterEggs'

function App() {
  return (
    <div className="relative min-h-screen bg-midnight text-gray-300 font-body overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none z-0" />
      <BackgroundEasterEggs />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
    </div>
  )
}

export default App
