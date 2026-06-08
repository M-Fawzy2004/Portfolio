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
    <div className="min-vh-100 text-white" style={{ backgroundColor: '#050507' }}>
      <div className="fixed-top vh-100 w-100 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(180deg, rgba(14,165,233,0.02), transparent, rgba(139,92,246,0.02))',
          }}
        />
      </div>
      <BackgroundEasterEggs />
      <Navigation />
      <main className="position-relative" style={{ zIndex: 10 }}>
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
