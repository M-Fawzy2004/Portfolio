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

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="position-fixed top-0 start-0 w-100" style={{ height: 3, zIndex: 9999 }}>
      <div style={{ width: `${progress * 100}%`, height: '100%', backgroundColor: '#38BDF8', transition: 'width 0.1s linear' }} />
    </div>
  );
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
      <ScrollProgress />
      <div className="min-vh-100 app-container position-relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="position-fixed top-0 start-0 w-100 h-100 pointer-events-none bg-dot-grid" style={{ zIndex: 0 }} />
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
