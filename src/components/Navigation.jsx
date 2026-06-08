import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  isNavigationLocked,
  lockNavigation,
  unlockNavigation,
} from "../lib/clickGuard";

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
            scrolled
              ? "shadow-lg"
              : ""
          }`}
          style={{
            backgroundColor: scrolled ? 'rgba(13, 14, 18, 0.6)' : 'rgba(13, 14, 18, 0.4)',
            backdropFilter: 'blur(24px)',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            transition: 'background-color 0.5s',
          }}
        >
          <a href="#" className="fw-bold text-white text-decoration-none" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
            MF<span style={{ color: '#22D3EE' }}>.</span>
          </a>

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
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.target.style.color = 'rgba(255,255,255,0.8)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.target.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="d-block d-md-none p-2 border-0 bg-transparent"
            style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <XMarkIcon style={{ width: 24, height: 24 }} /> : <Bars3Icon style={{ width: 24, height: 24 }} />}
          </button>
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
                backgroundColor: 'rgba(13, 14, 18, 0.95)',
                backdropFilter: 'blur(32px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 24,
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
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
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        backgroundColor: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
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
