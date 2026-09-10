import { useState, useEffect, createContext, useContext } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import InteractiveAppShowcase from './components/InteractiveAppShowcase'
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

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none">
      <div 
        style={{ width: `${progress * 100}%` }} 
        className="h-full bg-sky-500 transition-all duration-75 ease-out" 
      />
    </div>
  )
}

export default function App() {
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
      <ScrollProgressBar />
      <div className="min-h-screen relative selection:bg-sky-500/20 selection:text-sky-300">
        <BackgroundEasterEggs />
        <Navigation />
        <ScrollToTop />
        
        <main className="relative z-10">
          <Hero />
          <InteractiveAppShowcase />
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}
