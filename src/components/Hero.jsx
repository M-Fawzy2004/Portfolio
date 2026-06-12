import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { MessageCircle } from 'lucide-react'
import myAvatar from "../assets/my_photo.jpg";

const WhatsAppIcon = () => <MessageCircle style={{ width: '1em', height: '1em' }} />

const LinkedInIcon = ({ size = '1em' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = ({ size = '1em' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const TikTokIcon = ({ size = '1em' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const heroSocialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/201068808559', icon: WhatsAppIcon, color: '#34D399', hoverBg: 'rgba(52,211,153,0.12)' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@mo7amedfawzy6', icon: () => <TikTokIcon size='1em' />, color: '#ffffff', hoverBg: 'rgba(255,255,255,0.1)' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/', icon: () => <LinkedInIcon size='1em' />, color: '#60A5FA', hoverBg: 'rgba(96,165,250,0.12)' },
  { label: 'GitHub', href: 'https://github.com/M-Fawzy2004', icon: () => <GitHubIcon size='1em' />, color: '#D1D5DB', hoverBg: 'rgba(255,255,255,0.08)' },
]

const phrases = [
  "1+ Years of Crafting High-Performance Cross-Platform Apps",
  "Advanced Architecture: Clean Architecture, BLoC, and Cubit Expert",
  "Full-Stack Native Experiences Integrated with Supabase & Firebase",
  "Architect of Production-Ready Gemini AI Educational Platforms",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function AnimatedPhrase({ phrase }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={phrase}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="d-inline-block"
      >
        {phrase}
      </motion.span>
    </AnimatePresence>
  );
}

function LiquidAura() {
  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <motion.div
        className="position-absolute rounded-circle"
        style={{ width: 'clamp(160px, 40vw, 400px)', height: 'clamp(160px, 40vw, 400px)', backgroundColor: 'rgba(14,165,233,0.06)', filter: 'blur(60px)' }}
        animate={{ x: [0, 30, -20, 40, 0], y: [0, -20, 15, -30, 0], scale: [1, 1.1, 0.95, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{ width: 'clamp(140px, 35vw, 360px)', height: 'clamp(140px, 35vw, 360px)', backgroundColor: 'rgba(139,92,246,0.06)', filter: 'blur(60px)' }}
        animate={{ x: [0, -35, 25, -20, 0], y: [0, 30, -20, 25, 0], scale: [1, 0.9, 1.15, 0.95, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(true);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        hasScrolled.current = false;
        setShowScroll(true);
      } else if (!hasScrolled.current) {
        hasScrolled.current = true;
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="position-relative d-flex align-items-center justify-content-center section-padding overflow-hidden hero-section" style={{ minHeight: '100dvh' }}>
      <div className="max-container w-100">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-5"
        >
          {/* Avatar card */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 position-relative d-flex align-items-center justify-content-center"
          >
            {/* Outer decorative ring */}
            <div className="position-absolute pointer-events-none avatar-ring-outer"
              style={{
                top: -28, right: -28, bottom: -28, left: -28,
                borderRadius: 28,
                background: 'conic-gradient(from 0deg, rgba(34,211,238,0.1), rgba(139,92,246,0.05), rgba(34,211,238,0.03), rgba(139,92,246,0.06), rgba(34,211,238,0.1))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0.5px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0.5px))',
                animation: 'spin-slow 35s linear infinite',
              }}
            />
            {/* Inner decorative ring */}
            <div className="position-absolute pointer-events-none avatar-ring-inner"
              style={{
                top: -14, right: -14, bottom: -14, left: -14,
                borderRadius: 24,
                background: 'conic-gradient(from 180deg, rgba(139,92,246,0.08), rgba(34,211,238,0.04), rgba(139,92,246,0.02), rgba(34,211,238,0.05), rgba(139,92,246,0.08))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0.5px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0.5px))',
                animation: 'spin-slow 25s linear infinite reverse',
              }}
            />

            {/* Soft glow behind image */}
            <motion.div
              animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="position-absolute rounded-4 pointer-events-none"
              style={{
                top: -4, right: -4, bottom: -4, left: -4,
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.1), rgba(34,211,238,0.15))',
                filter: 'blur(32px) saturate(1.3)',
              }}
            />

            {/* Image container */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="position-relative d-flex justify-content-center"
            >
              <div
                className="position-relative overflow-hidden rounded-4 avatar-card-img"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: '460px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="position-absolute inset-0 rounded-4 pointer-events-none" style={{
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.06), transparent 40%, rgba(139,92,246,0.04) 70%, transparent)',
                  zIndex: 2,
                }} />
                <img
                  src={myAvatar}
                  alt="Mohamed Fawzy"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'top', transform: 'scale(1.04)' }}
                  loading="eager"
                  decoding="async"
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{ height: '45%', background: 'linear-gradient(0deg, var(--bg-primary), transparent)', opacity: 0.5 }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{ height: '25%', background: 'linear-gradient(180deg, rgba(34,211,238,0.04), transparent)' }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                  style={{ boxShadow: 'inset 0 0 0 1px var(--border-default)' }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="position-absolute start-50 translate-middle-x d-flex align-items-center gap-2 px-3 py-1 rounded-pill"
                style={{
                  bottom: -10,
                  backgroundColor: 'var(--bg-elevated)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(52,211,153,0.12)',
                  boxShadow: '0 4px 16px rgba(52,211,153,0.04)',
                  zIndex: 3,
                }}
              >
                <span className="position-relative d-inline-flex align-items-center justify-content-center" style={{ width: 7, height: 7 }}>
                  <span className="position-absolute w-100 h-100 rounded-circle" style={{ backgroundColor: '#34D399', opacity: 0.4, animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
                  <span className="position-absolute w-100 h-100 rounded-circle" style={{ backgroundColor: '#34D399' }} />
                </span>
                <span className="text-nowrap" style={{ fontSize: 'clamp(0.55rem, 1.6vw, 0.675rem)', fontWeight: 500, color: 'rgba(52,211,153,0.8)', letterSpacing: '0.01em' }}>
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="flex-grow-1 text-center text-lg-start hero-text-content">
            <motion.div variants={itemVariants}>
              <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: 'clamp(0.6rem, 1.6vw, 0.725rem)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.08)', borderColor: 'rgba(34,211,238,0.15)' }}>
                <span className="rounded-circle d-inline-block flex-shrink-0" style={{ width: 5, height: 5, backgroundColor: '#22D3EE' }} />
                Flutter Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="fw-bold lh-1 mb-3"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 4.5rem)', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}
            >
              Mohamed
              <br />
              <span className="text-gradient">Fawzy</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-3"
              style={{ fontSize: 'clamp(0.95rem, 2.4vw, 1.125rem)', color: 'var(--text-body)', maxWidth: '36rem' }}
            >
              Premium Cross-Platform Mobile Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="position-relative mb-4 d-flex align-items-center justify-content-center justify-content-lg-start"
              style={{ maxWidth: '36rem', minHeight: '2.8rem' }}
            >
              <LiquidAura />
              <p className="position-relative mb-0 z-1 fw-light" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: 'var(--text-body)' }}>
                <AnimatedPhrase key={phrases[index]} phrase={phrases[index]} />
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"
            >
              <a
                href="#projects"
                className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2 hero-cta-primary"
              >
                <ArrowDownTrayIcon style={{ width: '1em', height: '1em' }} />
                View My Work
              </a>

              <a
                href="#contact"
                className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-4 py-2 hero-cta-secondary"
              >
                <ChatBubbleLeftRightIcon style={{ width: '1em', height: '1em' }} />
                Let's Connect
              </a>
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-4"
            >
              <div
                className="d-inline-flex align-items-center gap-1 px-3 py-2 rounded-pill border hero-social-row"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: 'var(--border-default)',
                }}
              >
                <span style={{ fontSize: 'clamp(0.5rem, 1.4vw, 0.6rem)', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginRight: 2, marginLeft: 2 }}>
                  Find me
                </span>
                <span className="mx-1" style={{ width: 1, height: 14, backgroundColor: 'var(--border-default)' }} />
                {heroSocialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none hero-social-link"
                    style={{
                      width: 32,
                      height: 32,
                      color: link.color,
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = link.hoverBg;
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = '';
                    }}
                    title={link.label}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="position-fixed start-50 translate-middle-x"
            style={{ bottom: '1.5rem', zIndex: 50, pointerEvents: 'none' }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="d-flex flex-column align-items-center gap-1 px-3 py-2 rounded-pill"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <span className="text-uppercase" style={{ fontSize: 'clamp(0.5rem, 1.2vw, 0.6rem)', fontWeight: 500, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>Scroll</span>
              <div className="d-flex justify-content-center p-1 rounded-pill border" style={{ width: 18, height: 28, borderColor: 'var(--text-muted)' }}>
                <motion.div className="rounded-pill" style={{ width: 3, height: 6, backgroundColor: '#9CA3AF' }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
