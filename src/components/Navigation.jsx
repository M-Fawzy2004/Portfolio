import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileText,
  MessageCircle
} from "lucide-react";
import {
  isNavigationLocked,
  lockNavigation,
  unlockNavigation,
} from "../lib/clickGuard";
import { useTheme } from "../context/ThemeContext";

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
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const guardExpiry = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    let ticking = false;

    const updateActive = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrolled(currentY > 20);

          if (!guardExpiry.current && !isNavigationLocked()) {
            const triggerY = currentY + window.innerHeight * 0.35;
            let currentId = sectionIds[0];
            for (const id of sectionIds) {
              const el = document.getElementById(id);
              if (!el) continue;
              if (el.offsetTop <= triggerY) {
                currentId = id;
              }
            }
            setActive((prev) => (prev !== currentId ? currentId : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
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

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-2 sm:pt-3 px-3 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div 
          className={`flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl border border-[var(--border-default)] transition-all duration-300 backdrop-blur-xl ${
            scrolled 
              ? 'bg-[var(--bg-nav)] shadow-sm' 
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
            <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white font-mono font-bold text-xs tracking-tight shadow-sm">
              MF
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[var(--text-primary)] group-hover:text-sky-400 transition-colors">
                Mohamed Fawzy
              </span>
              <div className="flex items-center gap-1.5">
                <span className="radar-dot">
                  <span className="radar-dot-ping" />
                  <span className="radar-dot-core" />
                </span>
                <span className="text-[10px] text-emerald-400 font-medium tracking-wide">
                  Available for Hire
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-0.5 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
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
                      className="absolute inset-0 rounded-md bg-sky-600 shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/cv/MOHAMED_FAWZY_FLUTTER_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[var(--text-secondary)] hover:text-white bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-sky-500/40 transition-colors text-decoration-none"
              title="Download Mohamed Fawzy Resume"
            >
              <FileText size={12} className="text-sky-400" />
              <span>Resume</span>
            </a>

            <a
              href="https://wa.me/201068805663"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 transition-colors text-decoration-none"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-body)] hover:text-[var(--text-primary)] hover:border-sky-500/40 transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-amber-400 transition-transform duration-200 rotate-0 hover:rotate-45" />
              ) : (
                <Moon size={15} className="text-sky-600 transition-transform duration-200 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] cursor-pointer"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-3 rounded-xl bg-[var(--bg-nav-mobile)] border border-[var(--border-strong)] flex flex-col gap-1 backdrop-blur-xl shadow-2xl"
            >
              {navItems.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors text-decoration-none ${
                      isActive 
                        ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30' 
                        : 'text-[var(--text-body)] hover:text-white hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} className="opacity-40" />
                  </a>
                );
              })}

              <div className="pt-2 mt-2 border-t border-[var(--border-subtle)] flex items-center gap-2">
                <a
                  href="/cv/MOHAMED_FAWZY_FLUTTER_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] text-decoration-none"
                >
                  <FileText size={13} className="text-sky-400" />
                  <span>Resume (PDF)</span>
                </a>

                <a
                  href="https://wa.me/201068805663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-decoration-none"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
