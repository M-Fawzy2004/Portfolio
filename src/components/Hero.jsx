import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Terminal,
  ArrowRight,
  Sparkles
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
  "Junior Flutter Developer with 2 Years of Production Experience",
  "Clean Architecture, BLoC & Cubit state machine architect",
  "Built 25+ screens Academia AI integrated with Google Gemini",
  "Supabase, Firebase, Mapbox GPS, & RESTful APIs specialist",
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/201068808559", icon: WhatsAppIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-fawzy-02388729b/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/M-Fawzy2004", icon: GitHubIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@mo7amedfawzy6", icon: TikTokIcon },
];

export default function Hero() {
  const [highlightIdx, setHighlightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % dynamicHighlights.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 sm:pt-28 pb-10 overflow-hidden">
      <div className="max-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Column: Creator Bio & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-default)] text-emerald-400 text-xs font-semibold mb-5">
              <span className="radar-dot">
                <span className="radar-dot-ping" />
                <span className="radar-dot-core" />
              </span>
              <span>Junior Flutter Developer • 2 Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-[var(--text-primary)]">
              Crafting fluid,{' '}
              <span className="text-cyan-accent">high-performance</span>{' '}
              mobile experiences.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-medium text-[var(--text-secondary)] mb-4 leading-relaxed">
              Hi, I'm <strong className="text-cyan-accent font-bold">Mohamed Fawzy</strong> — a Junior Flutter Developer with 2 years of hands-on experience building production iOS & Android apps with Clean Architecture and AI.
            </p>

            {/* Rotating Highlights Box */}
            <div className="w-full max-w-xl h-11 flex items-center mb-6 px-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
              <Terminal size={15} className="text-cyan-accent mr-2.5 flex-shrink-0" />
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
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a href="#projects" className="btn-primary-action">
                <span>View My Apps</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="/cv/Mohamed_Fawzy_Flutter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-action"
              >
                <FileText size={14} className="text-cyan-accent" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)] w-full max-w-lg">
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
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
                      className="w-8 h-8 rounded-md flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-body)] hover:text-white hover:border-[var(--border-hover)] transition-colors text-decoration-none"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mohamed's Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[330px]">

              {/* Floating Chip Top Left */}
              <div className="absolute -top-3.5 -left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                <FlutterIcon size={14} />
                <span className="text-[11px] font-bold text-[var(--text-primary)] font-mono">Flutter Native</span>
              </div>

              {/* Floating Chip Bottom Right */}
              <div className="absolute -bottom-3.5 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-medium text-emerald-400">Available for Work</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-[var(--bg-secondary)] aspect-[4/4.7]">
                <img
                  src={myAvatar}
                  alt="Mohamed Fawzy"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom Card Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-12 flex flex-col justify-end text-left">
                  <div className="text-sm font-bold text-white">
                    Mohamed Fawzy
                  </div>
                  <div className="text-xs text-sky-400 font-medium">
                    Junior Flutter Developer • 2 Yrs Exp
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}