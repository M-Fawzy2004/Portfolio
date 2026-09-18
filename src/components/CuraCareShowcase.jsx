import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Play, 
  Pause, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  ShieldCheck,
  Calendar,
  Layers,
  Activity
} from "lucide-react";
import { FlutterIcon, GooglePlayIcon } from "./TechIcons";

export const docMateScreens = [
  {
    id: 1,
    title: "Brand & Identity",
    subtitle: "DocMate Medical Launch Experience",
    image: "/doc_mate/1.webp",
    tag: "Splash Screen",
    accent: "#38BDF8",
    icon: Sparkles,
    highlight: "Smooth animated splash sequence with heartbeat pulse feedback.",
    desc: "Mobile application launch experience featuring DocMate healthcare brand identity, stethoscope clock symbol, and background Supabase initialization.",
    tech: ["Flutter Splash API", "Animated Vector", "Supabase Init"],
  },
  {
    id: 2,
    title: "Patient Home & Discovery",
    subtitle: "Personalized Clinic Dashboard",
    image: "/doc_mate/2.webp",
    tag: "Patient UI",
    accent: "#0284C7",
    icon: Smartphone,
    highlight: "Real-time doctor search, specialty categorization & quick booking CTA.",
    desc: "Patient home screen featuring one-tap appointment booking banners, verified doctor cards (Dr. Mohamed Fawzy - Neurology), and specialty filter grid.",
    tech: ["BLoC State Machine", "Search Engine", "Skeletonizer Shimmer"],
  },
  {
    id: 3,
    title: "Medical Specialties Directory",
    subtitle: "Complete Specialty Classification",
    image: "/doc_mate/3.webp",
    tag: "Specialties Explorer",
    accent: "#818CF8",
    icon: Layers,
    highlight: "Comprehensive medical categories: Cardiology, Dermatology, Neurology, Orthopedics.",
    desc: "Complete directory of medical departments enabling patients to quickly locate top available physicians by discipline with instant category filtering.",
    tech: ["Clean Architecture", "RESTful Repositories", "Dynamic Grid"],
  },
  {
    id: 4,
    title: "Doctor Profile & Clinic Rates",
    subtitle: "Verified Doctor Information",
    image: "/doc_mate/4.webp",
    tag: "Doctor Directory",
    accent: "#10B981",
    icon: ShieldCheck,
    highlight: "Verified doctor badge, clinic address, and consultation fee (300 EGP).",
    desc: "Detailed doctor card displaying medical license verification, clinic physical address, specialty, consultation fee, and direct booking triggers.",
    tech: ["Verification Badges", "Dynamic Pricing", "Location Metadata"],
  },
  {
    id: 5,
    title: "Real-Time Booking & Queue Requests",
    subtitle: "Supabase Live Queue Management",
    image: "/doc_mate/5.webp",
    tag: "Live Queue Engine",
    accent: "#F59E0B",
    icon: Activity,
    highlight: "Dynamic pending requests queue with instant Confirm / Reject controls.",
    desc: "Clinic and doctor queue panel handling patient ticket requests (#1 Mohamed, #2 Ahmed) with instant confirmation and real-time backend updates.",
    tech: ["Supabase RPCs", "Real-Time Subscriptions", "Concurrency Control"],
  },
  {
    id: 6,
    title: "Doctor Schedule & Consultation Slips",
    subtitle: "Appointment Calendar & Time Slots",
    image: "/doc_mate/6.webp",
    tag: "Scheduling Engine",
    accent: "#38BDF8",
    icon: Calendar,
    highlight: "Calendar date picker with Advance Booking consultation tickets.",
    desc: "Integrated calendar schedule for doctors and clinics to track upcoming, completed, and cancelled consultations without scheduling conflicts.",
    tech: ["Custom Calendar Picker", "Slot Calculation", "Offline Sync"],
  },
  {
    id: 7,
    title: "Live Alerts & Verification Pipeline",
    subtitle: "Instant Notifications & Account Approvals",
    image: "/doc_mate/7.webp",
    tag: "Real-Time Alerts",
    accent: "#EC4899",
    icon: Sparkles,
    highlight: "Push notifications for new queue bookings & official doctor verification status.",
    desc: "Real-time notification hub showing incoming patient queue alerts (#1, #2) and account verification approvals governed by the React admin dashboard.",
    tech: ["Supabase Realtime", "In-App Alerts", "Security Policies (RLS)"],
  },
];

export const curaCareScreens = docMateScreens;

export default function DocMateShowcase() {
  const [activeIdx, setActiveIdx] = useState(1); // Default to Patient Home (Screen 2)
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef(null);

  const activeScreen = docMateScreens[activeIdx];

  // Pause slideshow when scrolled out of view to save CPU/GPU cycles
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setActiveIdx((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = docMateScreens.length - 1;
      if (next >= docMateScreens.length) next = 0;
      return next;
    });
  }, []);

  const selectScreen = (idx) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };

  // Auto-play interval with pause on hover or off-screen
  useEffect(() => {
    if (!isAutoPlay || isHovered || lightboxOpen || !isInView) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, lightboxOpen, isInView, paginate]);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, paginate]);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    })
  };

  return (
    <div 
      ref={containerRef}
      className="mt-6 pt-6 border-t border-[var(--border-subtle)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Showcase Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-1">
            <Smartphone size={14} />
            <span>DocMate Mobile Showcase (7 Production Screens)</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
            Live Application Flow & Screen Walkthrough
          </h4>
        </div>

        {/* Play / Pause & Auto Indicator & Google Play Link */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.curacare.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors text-decoration-none shadow-sm"
            title="View DocMate on Google Play"
          >
            <GooglePlayIcon size={12} />
            <span>Google Play</span>
          </a>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-sky-500/40 text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1.5 transition-colors"
            title={isAutoPlay ? "Pause slideshow" : "Start slideshow"}
          >
            {isAutoPlay && !isHovered && isInView ? (
              <>
                <Pause size={12} className="text-sky-400" />
                <span>Auto-playing</span>
              </>
            ) : (
              <>
                <Play size={12} className="text-emerald-400" />
                <span>{isHovered ? "Paused (Hovered)" : !isInView ? "Paused (Off-screen)" : "Slideshow"}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setLightboxOpen(true)}
            className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Inspect fullscreen"
          >
            <Maximize2 size={12} />
            <span>Expand High-Res</span>
          </button>
        </div>
      </div>

      {/* Screen Selector Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none snap-x">
        {docMateScreens.map((s, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={s.id}
              onClick={() => selectScreen(idx)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-sky-500/15 border-sky-500/40 text-sky-300 font-bold shadow-sm"
                  : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-default)]"
              }`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isActive ? "bg-sky-400 text-black" : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
              }`}>
                {s.id}
              </span>
              <span className="truncate max-w-[140px] sm:max-w-none">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Phone Device Chassis */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group w-full max-w-[280px] sm:max-w-[290px]">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent blur-xl pointer-events-none -z-10" />

            {/* Phone Container */}
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-[36px] p-2.5 bg-[#090B0E] border-2 border-[var(--border-strong)] shadow-2xl cursor-pointer hover:border-sky-500/40 transition-colors duration-300"
              title="Click to expand high-resolution view"
            >
              {/* Screen Bezel & Dynamic Island Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/18.5] flex flex-col justify-between">
                
                {/* Dynamic Screen Image with Framer Motion */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.img
                      key={activeScreen.id}
                      src={activeScreen.image}
                      alt={activeScreen.title}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full object-contain select-none"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  </AnimatePresence>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5">
                      <Maximize2 size={13} className="text-sky-400" />
                      <span>Click to Zoom</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#12151B]/90 border border-[var(--border-default)] hover:border-sky-400 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all z-20"
                title="Previous Screen"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#12151B]/90 border border-[var(--border-default)] hover:border-sky-400 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all z-20"
                title="Next Screen"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3.5">
              {docMateScreens.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => selectScreen(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? "w-6 bg-sky-400" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  title={`Go to screen ${s.id}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Screen Details & Architectural Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-5 sm:p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] flex flex-col justify-between"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {activeScreen.tag}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Screen {activeScreen.id} of {docMateScreens.length}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>Production Screen</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-1">
                  {activeScreen.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-sky-400 mb-3.5">
                  {activeScreen.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {activeScreen.desc}
                </p>

                {/* Key Technical Highlight Box */}
                <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] mb-4">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-sky-400" />
                    <span>Implementation Highlight</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--text-primary)] leading-relaxed">
                    {activeScreen.highlight}
                  </p>
                </div>

                {/* Tech Components Used */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mr-2">
                    Stack:
                  </span>
                  {activeScreen.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Jump Ribbon */}
              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button
                  onClick={() => paginate(-1)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
                >
                  <ChevronLeft size={14} />
                  <span>Previous Screen</span>
                </button>

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="btn-secondary-action py-1 px-3 text-xs"
                >
                  <Maximize2 size={13} />
                  <span>Inspect Fullscreen</span>
                </button>

                <button
                  onClick={() => paginate(1)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] hover:text-sky-400 transition-colors"
                >
                  <span>Next Screen</span>
                  <ChevronRight size={14} />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Thumbnail Ribbon */}
          <div className="grid grid-cols-7 gap-2 mt-4">
            {docMateScreens.map((s, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={s.id}
                  onClick={() => selectScreen(idx)}
                  className={`relative rounded-lg overflow-hidden border transition-all duration-200 aspect-[9/16] bg-black group ${
                    isActive
                      ? "border-sky-400 ring-2 ring-sky-400/30 scale-105"
                      : "border-[var(--border-subtle)] opacity-60 hover:opacity-100 hover:border-[var(--border-default)]"
                  }`}
                  title={s.title}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/80 py-0.5 text-[9px] font-mono font-bold text-center text-white">
                    #{s.id}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal rendered via Portal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setLightboxOpen(false)}
            >
              <div 
                className="relative w-full max-w-4xl max-h-[95vh] rounded-2xl bg-[#090B0E] border border-[var(--border-default)] p-4 sm:p-6 flex flex-col justify-between overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                      <FlutterIcon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        DocMate Mobile App — {activeScreen.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        Screen {activeScreen.id} of {docMateScreens.length} • {activeScreen.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.curacare.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors text-decoration-none shadow-sm"
                      title="View DocMate on Google Play"
                    >
                      <GooglePlayIcon size={12} />
                      <span>Google Play</span>
                    </a>

                    <button
                      onClick={() => setLightboxOpen(false)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      title="Close (Esc)"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Modal Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Large Screen Image */}
                  <div className="md:col-span-6 flex items-center justify-center max-h-[65vh]">
                    <div className="relative max-h-[62vh] rounded-[24px] overflow-hidden border border-slate-800 bg-black shadow-2xl">
                      <img
                        src={activeScreen.image}
                        alt={activeScreen.title}
                        decoding="async"
                        className="max-h-[62vh] w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Technical Overview & Controls */}
                  <div className="md:col-span-6 flex flex-col justify-between space-y-4 text-left">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30 uppercase tracking-wider inline-block mb-2">
                        {activeScreen.tag}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {activeScreen.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {activeScreen.desc}
                      </p>

                      <div className="p-3.5 rounded-xl bg-[#12151B] border border-slate-800 mb-4">
                        <div className="text-xs font-bold text-sky-400 mb-1">
                          Architecture & Implementation:
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {activeScreen.highlight}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Supabase PostgreSQL backend with RPC stored procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Clean Architecture with strict BLoC / Cubit state isolation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Offline caching and bilingual Arabic/English RTL support</span>
                        </div>
                      </div>
                    </div>

                    {/* Nav Controls */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => paginate(-1)}
                        className="btn-secondary-action py-1.5 px-3 text-xs"
                      >
                        <ChevronLeft size={14} />
                        <span>Previous</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {docMateScreens.map((s, idx) => (
                          <button
                            key={s.id}
                            onClick={() => selectScreen(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === activeIdx ? "w-6 bg-sky-400" : "bg-slate-700"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => paginate(1)}
                        className="btn-secondary-action py-1.5 px-3 text-xs"
                      >
                        <span>Next</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
