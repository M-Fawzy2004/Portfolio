import { useState, useEffect, createContext, useContext } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import BackgroundEasterEggs from './components/BackgroundEasterEggs'
import ScrollToTop from './components/ScrollToTop'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-vh-100 app-container" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
        <ScrollToTop />
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
    </ThemeContext.Provider>
  )
}

export default App
