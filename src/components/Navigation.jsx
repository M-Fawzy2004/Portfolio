import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageCircle
} from "lucide-react";
import {
  isNavigationLocked,
  lockNavigation,
  unlockNavigation,
} from "../lib/clickGuard";
import { useTheme } from "../App";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
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
        setHidden(currentY > lastScrollY.current && !mobileOpen);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
      setScrolled(currentY > 40);

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
  }, [mobileOpen]);

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

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-2.5 sm:pt-3.5 px-3 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div 
          className={`flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl border border-[#1c222c] transition-colors duration-200 backdrop-blur-md ${
            scrolled 
              ? 'bg-[var(--bg-nav)]' 
              : 'bg-[var(--bg-glass)]'
          }`}
        >
          {/* Brand Logo & Status */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group text-decoration-none"
          >
            <div className="w-7 h-7 rounded-md bg-[#0284C7] flex items-center justify-center text-white font-bold text-xs">
              MF
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[var(--text-primary)]">
                Mohamed Fawzy
              </span>
              <div className="flex items-center gap-1.5">
                <span className="radar-dot">
                  <span className="radar-dot-ping" />
                  <span className="radar-dot-core" />
                </span>
                <span className="text-[10px] text-emerald-400 font-medium tracking-wide">
                  Junior Flutter Dev (2 Yrs)
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items - Clean solid active pill, NO gradient */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-1 rounded-md text-xs font-semibold transition-colors text-decoration-none ${
                    isActive 
                      ? 'text-white' 
                      : 'text-[var(--text-body)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-md bg-[#0284C7]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/201068808559"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors text-decoration-none"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="w-7 h-7 rounded-md flex items-center justify-center bg-[var(--bg-secondary)] border border-[#1c222c] text-[var(--text-body)] hover:text-[var(--text-primary)] hover:border-sky-500 transition-colors"
            >
              {theme === "dark" ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-sky-500" />}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-7 h-7 rounded-md flex items-center justify-center bg-[var(--bg-secondary)] border border-[#1c222c] text-[var(--text-primary)]"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-2.5 rounded-xl bg-[var(--bg-nav-mobile)] border border-[var(--border-strong)] flex flex-col gap-1 shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-decoration-none ${
                      isActive 
                        ? 'bg-sky-500/20 text-sky-400 font-semibold' 
                        : 'text-[var(--text-body)] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} className="opacity-40" />
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
