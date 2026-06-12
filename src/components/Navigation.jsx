import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import {
  isNavigationLocked,
  lockNavigation,
  unlockNavigation,
} from "../lib/clickGuard";
import { useTheme } from "../App";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const guardExpiry = useRef(null);
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const updateActive = () => {
      const currentY = window.scrollY;
      if (currentY > 80) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
      setScrolled(currentY > 80);

      if (guardExpiry.current || isNavigationLocked()) return;

      const triggerY = currentY + window.innerHeight * 0.35;
      let currentId = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= triggerY) {
          currentId = id;
        }
      }
      setActive(currentId);
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const handleNavClick = (href) => {
    const id = href.slice(1);
    setActive(id);
    setMobileOpen(false);
    lockNavigation();
    if (guardExpiry.current) clearTimeout(guardExpiry.current);
    guardExpiry.current = setTimeout(() => {
      unlockNavigation();
      guardExpiry.current = null;
    }, 1000);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.96 },
  };

  const isHidden = hidden && !mobileOpen;

  return (
    <header className="fixed-top d-flex justify-content-center" style={{ marginTop: '1.5rem', zIndex: 99 }}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ pointerEvents: isHidden ? "none" : "auto", width: '92%', maxWidth: '72rem' }}
      >
        <nav
          className={`d-flex align-items-center justify-content-between px-4 py-2 w-100 rounded-pill border ${
            scrolled ? "shadow-lg" : ""
          }`}
          style={{
            backgroundColor: scrolled ? 'var(--bg-nav)' : 'var(--bg-tertiary)',
            backdropFilter: 'blur(24px)',
            borderColor: 'var(--border-default)',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="fw-bold text-decoration-none" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              MF<span style={{ color: '#22D3EE' }}>.</span>
            </a>
          </div>

          <div className="d-none d-md-flex align-items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="position-relative px-3 py-2 text-decoration-none rounded-3"
                  style={{
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-nav-active)' : 'var(--text-nav)',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = 'var(--text-nav-hover)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = ''; }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                      style={{ backgroundColor: 'rgba(34,211,238,0.08)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="d-flex align-items-center justify-content-center rounded-circle border-0 ms-2"
              style={{
                width: 32,
                height: 32,
                backgroundColor: 'var(--btn-outline-bg)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-nav)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 14,
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          <div className="d-flex d-md-none align-items-center gap-2">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="d-flex align-items-center justify-content-center rounded-circle border-0"
              style={{
                width: 32,
                height: 32,
                backgroundColor: 'transparent',
                color: 'var(--text-nav)',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontSize: 14,
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 border-0 bg-transparent"
              style={{ color: 'var(--text-nav)', cursor: 'pointer' }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <XMarkIcon style={{ width: 22, height: 22 }} /> : <Bars3Icon style={{ width: 22, height: 22 }} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="mt-2 p-4"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                backdropFilter: 'blur(32px)',
                border: '1px solid var(--border-strong)',
                borderRadius: 24,
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}
            >
              <div className="d-flex flex-column gap-2">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="px-3 py-2 text-decoration-none rounded-4"
                      style={{
                        fontSize: 'clamp(0.85rem, 4vw, 1rem)',
                        fontWeight: 500,
                        backgroundColor: isActive ? 'rgba(34,211,238,0.08)' : 'transparent',
                        color: isActive ? 'var(--text-nav-active)' : 'var(--text-nav)',
                        transition: 'all 0.3s',
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
