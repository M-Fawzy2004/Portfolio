import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Terminal,
  ArrowRight
} from "lucide-react";
import myAvatar from "../assets/my_photo.jpg";
import {
  FlutterIcon,
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  WhatsAppIcon
} from "./TechIcons";

const dynamicHighlights = [
  "Production Flutter Engineer with +1 Year of Hands-on Experience",
  "Shipped DocMate to Apple App Store & Google Play Store",
  "Architected Academia AI (25+ Screens) with Google Gemini 1.5",
  "Clean Architecture, BLoC & Cubit Predictable State Machines",
  "Supabase PostgreSQL, Offline SQLite Caching & Mapbox GPS Routing",
];

const quickMetrics = [
  { value: "2 Stores", label: "App Store & Play Store", highlight: true },
  { value: "25+ Screens", label: "Shipped in Single App" },
  { value: "Clean Arch", label: "BLoC / Cubit Standard" },
  { value: "60 FPS", label: "Fluid Native UI" },
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
              Hi, I'm <strong className="text-[var(--text-primary)] font-bold">Mohamed Fawzy</strong> — a Flutter Developer specializing in high-performance iOS & Android applications with <strong className="text-cyan-accent font-semibold">Clean Architecture</strong>, <strong className="text-cyan-accent font-semibold">BLoC</strong>, and AI-driven workflows. Proven track record shipping live apps to the <strong className="text-[var(--text-primary)]">Apple App Store</strong> & <strong className="text-[var(--text-primary)]">Google Play</strong>.
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
                href="/cv/MOHAMED_FAWZY_FLUTTER_CV.pdf"
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

          {/* Right Column: Architectural Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-default)] p-3.5 transition-all duration-300 hover:border-[var(--border-hover)]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-[var(--text-muted)]">mohamed_fawzy.dart</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  <FlutterIcon size={11} />
                  <span>Flutter Native</span>
                </div>
              </div>

              {/* Portrait Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/4.8] bg-black border border-[var(--border-subtle)] mb-3">
                <img
                  src={myAvatar}
                  alt="Mohamed Fawzy - Flutter Developer"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />

                {/* Subtle gradient overlay at bottom with live tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3.5 pt-10 flex flex-col justify-end text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-white tracking-tight">
                        Mohamed Fawzy
                      </div>
                      <div className="text-xs text-sky-400 font-medium font-mono">
                        Junior Flutter Developer (+1 Yr Exp)
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer Credentials Strip */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-xs">
                  <span className="text-[var(--text-muted)] font-mono text-[11px]">Commercial Role</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)]">
                    <span>DocMate</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/15 text-sky-400 border border-sky-500/25">Live on Stores</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {["Clean Arch", "BLoC/Cubit", "Supabase", "Mapbox", "REST APIs", "SQLite"].map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
