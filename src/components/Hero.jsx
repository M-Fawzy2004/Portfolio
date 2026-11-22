import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Terminal,
  ArrowRight
} from "lucide-react";
import AppleLiquidGlassCard from "./AppleLiquidGlassCard";
import {
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  WhatsAppIcon
} from "./TechIcons";

const dynamicHighlights = [
  "Senior Flutter Mobile Engineer • 3 Production Apps on App Store & Google Play",
  "Shipped Sakina, DocMate & Academia AI to Apple App Store & Google Play",
  "Architected 4K Video Reel Engine, Mathematical Astronomy & Native Widgets",
  "Clean Architecture, BLoC / Cubit Predictable State Machines & 60 FPS",
  "Commercial Healthcare & Multi-Modal Gemini 1.5 AI Architectures",
  "Offline-First SQLite Caching, Supabase PostgreSQL & Mapbox GPS",
];

const quickMetrics = [
  { value: "3 Apps", label: "App Store & Google Play", highlight: true },
  { value: "25+ Screens", label: "Shipped in Single App" },
  { value: "Clean Arch", label: "BLoC / Cubit Standard" },
  { value: "60 FPS", label: "Zero-Jank Fluid UI" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/201068805663", icon: WhatsAppIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-fawzy-02388729b/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/M-Fawzy2004", icon: GitHubIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@mo7amedfawzy6", icon: TikTokIcon },
];

export default function Hero() {
  const [highlightIdx, setHighlightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!document.hidden) {
        setHighlightIdx((prev) => (prev + 1) % dynamicHighlights.length);
      }
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-14 overflow-hidden">
      <div className="max-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Pitch & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-default)] text-xs font-mono mb-5 shadow-2xs">
              <span className="radar-dot">
                <span className="radar-dot-ping" />
                <span className="radar-dot-core" />
              </span>
              <span className="text-emerald-400 font-semibold">Available for Production & Contract Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-4 text-[var(--text-primary)]">
              Engineering fluid,{' '}
              <span className="text-cyan-accent">high-performance</span>{' '}
              mobile systems.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-[var(--text-primary)] font-bold">Mohamed Fawzy</strong> — a Flutter Mobile Engineer specialized in engineering high-impact, revenue-driving iOS & Android applications with <strong className="text-cyan-accent font-semibold">Clean Architecture</strong> and <strong className="text-cyan-accent font-semibold">BLoC</strong>. Proven track record shipping 3 commercial production applications to both the <strong className="text-[var(--text-primary)]">Apple App Store</strong> & <strong className="text-[var(--text-primary)]">Google Play</strong>.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-6">
              {quickMetrics.map((m) => (
                <div 
                  key={m.label} 
                  className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] flex flex-col justify-center"
                >
                  <div className="text-sm sm:text-base font-bold font-mono text-[var(--text-primary)]">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Rotating Highlights Terminal Box */}
            <div className="w-full h-11 flex items-center mb-7 px-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
              <Terminal size={14} className="text-cyan-accent mr-2.5 flex-shrink-0" />
              <div className="relative flex-1 overflow-hidden h-6 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={highlightIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs sm:text-sm font-mono text-[var(--text-body)] truncate"
                  >
                    {dynamicHighlights[highlightIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-7 w-full sm:w-auto">
              <a href="#projects" className="btn-primary-action">
                <span>Explore Production Apps</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="/cv/Mohamed_Fawzy_Flutter_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-action"
              >
                <FileText size={14} className="text-sky-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social Channels & Geo Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)] w-full">
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-mono">
                Connect
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-body)] hover:text-white hover:border-sky-500/40 hover:bg-[var(--bg-tertiary)] transition-colors text-decoration-none"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Cairo, Egypt (GMT+2)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Apple Liquid Glass Interactive 3D Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <AppleLiquidGlassCard />
          </div>

        </div>
      </div>
    </section>
  );
}
