import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { MessageCircle } from 'lucide-react'
import myAvatar from "../assets/my_photo.jpg";

const WhatsAppIcon = () => <MessageCircle style={{ width: 18, height: 18 }} />

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const heroSocialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/201068808559', icon: WhatsAppIcon, color: '#34D399', hoverBg: 'rgba(52,211,153,0.1)' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/', icon: () => <LinkedInIcon size={18} />, color: '#60A5FA', hoverBg: 'rgba(96,165,250,0.1)' },
  { label: 'GitHub', href: 'https://github.com/M-Fawzy2004', icon: () => <GitHubIcon size={18} />, color: '#D1D5DB', hoverBg: 'rgba(255,255,255,0.08)' },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const wordReveal = {
  initial: { filter: "blur(12px)", opacity: 0, scale: 0.8 },
  enter: (i) => ({
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: (i) => ({
    filter: "blur(8px)",
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.4,
      delay: i * 0.02,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function AnimatedPhrase({ phrase }) {
  const words = phrase.split(" ");
  return (
    <motion.span className="d-inline-flex flex-wrap justify-content-center justify-content-lg-start" style={{ gap: '0.25em' }}>
      <AnimatePresence mode="popLayout">
        {words.map((word, i) => (
          <motion.span
            key={`${phrase}-${word}-${i}`}
            custom={i}
            variants={wordReveal}
            initial="initial"
            animate="enter"
            exit="exit"
            className="d-inline-block text-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}

function LiquidAura() {
  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden pointer-events-none">
      <motion.div
        className="position-absolute rounded-circle"
        style={{ width: '500px', height: '500px', backgroundColor: 'rgba(14,165,233,0.1)', filter: 'blur(100px)' }}
        animate={{
          x: [0, 40, -30, 50, 0],
          y: [0, -30, 20, -40, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{ width: '450px', height: '450px', backgroundColor: 'rgba(139,92,246,0.1)', filter: 'blur(100px)' }}
        animate={{
          x: [0, -45, 35, -25, 0],
          y: [0, 40, -25, 30, 0],
          scale: [1, 0.85, 1.2, 0.95, 1],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="position-relative d-flex align-items-center justify-content-center section-padding overflow-hidden" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
      <div className="max-container w-100">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="d-flex flex-column flex-lg-row align-items-center gap-5"
          style={{ gap: '5rem' }}
        >
          {/* Avatar card */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 position-relative"
          >
            {/* Orbiting rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="position-absolute pointer-events-none rounded-4 border"
              style={{
                top: -16, right: -16, bottom: -16, left: -16,
                borderColor: 'rgba(34,211,238,0.1)',
                background: 'conic-gradient(from 0deg, transparent, rgba(34,211,238,0.08), transparent 60%)',
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="position-absolute pointer-events-none rounded-4 border"
              style={{
                top: -28, right: -28, bottom: -28, left: -28,
                borderColor: 'rgba(139,92,246,0.1)',
                background: 'conic-gradient(from 180deg, transparent, rgba(139,92,246,0.08), transparent 60%)',
              }}
            />

            {/* Glow behind image */}
            <motion.div
              animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="position-absolute rounded-4 pointer-events-none"
              style={{
                top: -4, right: -4, bottom: -4, left: -4,
                background: 'linear-gradient(90deg, rgba(34,211,238,0.2), rgba(139,92,246,0.2), rgba(34,211,238,0.2))',
                filter: 'blur(24px)',
              }}
            />

            {/* Image container */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="position-relative"
            >
              <div
                className="position-relative overflow-hidden rounded-4"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: '460px',
                  background: 'rgba(18,19,26,0.6)',
                  backdropFilter: 'blur(40px) saturate(1.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 0 80px rgba(34,211,238,0.04)',
                }}
              >
                <img
                  src={myAvatar}
                  alt="Mohamed Fawzy"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'top', transform: 'scale(1.05)' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{ height: '50%', background: 'linear-gradient(0deg, #050507, transparent)', opacity: 0.6 }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{ height: '30%', background: 'linear-gradient(180deg, rgba(34,211,238,0.05), transparent)' }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="position-absolute start-50 translate-middle-x d-flex align-items-center gap-2 px-3 py-1 rounded-pill border"
                style={{
                  bottom: -12,
                  backgroundColor: 'rgba(18, 19, 26, 0.5)',
                  backdropFilter: 'blur(32px)',
                  borderColor: 'rgba(52,211,153,0.2)',
                  boxShadow: '0 4px 24px rgba(52,211,153,0.05)',
                }}
              >
                <span className="position-relative d-inline-block" style={{ width: 8, height: 8 }}>
                  <span className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" style={{ backgroundColor: '#34D399', opacity: 0.6, animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
                  <span className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" style={{ backgroundColor: '#34D399' }} />
                </span>
                <span className="text-nowrap" style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'rgba(52,211,153,0.9)' }}>
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="flex-grow-1 text-center text-lg-start">
            <motion.div variants={itemVariants}>
              <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.2)' }}>
                <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#22D3EE', animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
                Flutter Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="fw-bold text-white lh-1 mb-3"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Mohamed
              <br />
              <span className="text-gradient">Fawzy</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-2"
              style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '36rem' }}
            >
              Premium Cross-Platform Mobile Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="position-relative mb-4 d-flex align-items-center justify-content-center justify-content-lg-start"
              style={{ maxWidth: '36rem', minHeight: '3.5rem' }}
            >
              <LiquidAura />
              <p className="position-relative mb-0 z-1 fw-light" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <AnimatedPhrase key={phrases[index]} phrase={phrases[index]} />
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"
            >
              <a
                href="#projects"
                className="btn btn-primary d-inline-flex align-items-center gap-2 px-4 py-2"
              >
                <ArrowDownTrayIcon style={{ width: 16, height: 16 }} />
                View My Work
              </a>

              <a
                href="#contact"
                className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-4 py-2"
              >
                <ChatBubbleLeftRightIcon style={{ width: 16, height: 16 }} />
                Let's Connect
              </a>
            </motion.div>

            {/* Social links row */}
            <motion.div
              variants={itemVariants}
              className="mt-4"
            >
              <div
                className="d-inline-flex align-items-center gap-1 px-3 py-2 rounded-pill border"
                style={{
                  backgroundColor: 'rgba(18, 19, 26, 0.4)',
                  backdropFilter: 'blur(20px)',
                  borderColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <span style={{ fontSize: '0.625rem', fontWeight: 500, color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase', marginRight: 4, marginLeft: 4 }}>
                  Find me
                </span>
                <span className="mx-1" style={{ width: 1, height: 16, backgroundColor: 'rgba(255,255,255,0.06)' }} />
                {heroSocialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                    style={{
                      width: 34,
                      height: 34,
                      color: link.color,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = link.hoverBg;
                      e.currentTarget.style.transform = 'translateY(-2px)';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="position-absolute start-50 translate-middle-x"
        style={{ bottom: '2rem' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="d-flex flex-column align-items-center gap-2"
        >
          <span className="text-uppercase" style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.1em', color: '#6B7280' }}>Scroll</span>
          <div className="d-flex justify-content-center p-1 rounded-pill border" style={{ width: 20, height: 32, borderColor: '#6B7280' }}>
            <motion.div className="rounded-pill" style={{ width: 4, height: 8, backgroundColor: '#9CA3AF' }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
