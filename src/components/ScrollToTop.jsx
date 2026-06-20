import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={scrollToTop}
          className="position-fixed border-0 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            bottom: '2rem',
            right: '2rem',
            width: 44,
            height: 44,
            zIndex: 90,
            backgroundColor: 'var(--bg-elevated)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#38BDF8'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon style={{ width: 20, height: 20 }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}