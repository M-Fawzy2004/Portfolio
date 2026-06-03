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

      // Hide when scrolling down past 80px, show when scrolling up
      if (currentY > 80) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      setScrolled(currentY > 80);

      if (guardExpiry.current || isNavigationLocked()) return;

      // Use a trigger line at 35% from the top of the viewport
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
    // Run once on mount to set initial state
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  const handleNavClick = (href) => {
    const id = href.slice(1);
    setActive(id); // Immediately reflect the clicked section
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

  // Never hide the bar while the mobile menu is open
  const isHidden = hidden && !mobileOpen;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[99] mt-4 sm:mt-6 w-full flex justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -120 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ pointerEvents: isHidden ? "none" : "auto" }}
        className="w-[92%] sm:w-[88%] max-w-7xl"
      >
        <nav
          className={`
            relative flex items-center justify-between px-6 py-3 w-full
            rounded-[30px] sm:rounded-full
            backdrop-blur-xl border border-white/[0.05]
            transition-colors duration-500
            ${scrolled
              ? "bg-[#0D0E12]/60 shadow-lg shadow-black/20"
              : "bg-[#0D0E12]/40"
            }
          `}
        >
          <a href="#" className="text-white font-bold text-lg tracking-tight">
            MF<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-[12px] transition-colors duration-300 ${isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-200"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/[0.06] rounded-[12px]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="block md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
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
              className="backdrop-blur-2xl bg-[#0D0E12]/95 border border-white/10 rounded-[24px] mt-2 p-6 w-full shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`px-4 py-3 text-sm font-medium rounded-[14px] transition-all duration-300 ${isActive
                          ? "text-white bg-white/[0.06]"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                        }`}
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
