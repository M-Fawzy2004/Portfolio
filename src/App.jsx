import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import EngineeringMetrics from './components/EngineeringMetrics'
import InteractiveAppShowcase from './components/InteractiveAppShowcase'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Contact from './components/Contact'
import BackgroundEasterEggs from './components/BackgroundEasterEggs'
import ScrollToTop from './components/ScrollToTop'
import CommandPalette from './components/CommandPalette'
import CardTiltEffect from './components/CardTiltEffect'
import InitialLoader from './components/InitialLoader'
import { ThemeContext } from './context/ThemeContext'

function ScrollProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (barRef.current) {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
            barRef.current.style.transform = `scaleX(${progress})`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-bar fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none transition-opacity duration-200">
      <div 
        ref={barRef}
        style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
        className="h-full w-full bg-sky-500 will-change-transform" 
      />
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'dark'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = (event) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // If browser doesn't support View Transitions or reduced motion is preferred
    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // Determine circular expansion epicenter from the clicked element
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event?.clientX !== undefined && event?.clientY !== undefined) {
      x = event.clientX;
      y = event.clientY;
    } else if (event?.target?.getBoundingClientRect) {
      const rect = event.target.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      <ScrollProgressBar />
      <CommandPalette />
      <CardTiltEffect />
      <div className="min-h-screen relative selection:bg-sky-500/20 selection:text-sky-300">
        <BackgroundEasterEggs />
        <Navigation />
        <ScrollToTop />
        
        <main className="relative z-10">
          <Hero />
          <EngineeringMetrics />
          <InteractiveAppShowcase />
          <Experience />
          <Projects />
          <Skills />
          <AboutMe />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}
