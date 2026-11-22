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
  Moon,
  BookOpen,
  Radio,
  HeartHandshake,
  Library,
  Video,
  Clock,
} from "lucide-react";
import { GooglePlayIcon, AppleIcon } from "./TechIcons";
const sakinaScreens = [
  {
    id: 1,
    title: "ملاذ الروح & القبة الفلكية",
    subtitle: "Dynamic Celestial Sky & Offline Astronomical Prayer Engine",
    image: "/sakina/1.webp",
    backupImage: "/sakina/1.png",
    tag: "Astronomical Core",
    accent: "#F59E0B",
    icon: Moon,
    highlight: "Mathematical sun & moon phase rendering without network API dependencies, real-time prayer countdown, and offline GPS coordinates.",
    desc: "A luxury sanctuary home screen featuring dynamic mathematical celestial sky rendering, high-precision GPS prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha, Sunrise, Midnight, Last Third), and instant portals to core Islamic modules.",
    tech: ["Mathematical Astronomy", "GPS Geolocation", "BLoC State Machine", "Canvas Sky Render"],
  },
  {
    id: 2,
    title: "المصحف الشريف الرقمي",
    subtitle: "Uthmani Typography & Reading Progress Engine",
    image: "/sakina/2.webp",
    backupImage: "/sakina/2.png",
    tag: "Quranic Engine",
    accent: "#10B981",
    icon: BookOpen,
    highlight: "Smart resume-reading indicator with exact percentage progress (29%), Surah/Juz/Hizb/Page multi-tab categorization.",
    desc: "Full digital Holy Quran reader rendered with authentic Medina Uthmani typography, instant surah index cards, bookmark persistence, and reading journey progress tracker.",
    tech: ["Uthmani Typography", "Indexed Cache", "Reading Persistence", "Clean Arch"],
  },
  {
    id: 3,
    title: "البث المباشر والتلاوات",
    subtitle: "Makkah & Madinah Live Feeds & Studio Recitations",
    image: "/sakina/3.webp",
    backupImage: "/sakina/3.png",
    tag: "Live Audio & Video",
    accent: "#38BDF8",
    icon: Radio,
    highlight: "Direct HLS live satellite video streams from Al-Masjid Al-Haram & Al-Masjid An-Nabawi alongside background audio playback.",
    desc: "Seamless broadcasting experience streaming live satellite feeds from Makkah and Madinah, paired with high-fidelity studio recitations from Al-Minshawi (الترتيل الخاشع), Abdul-Basit (صوت مكة), Al-Muaiqly, and Al-Afasy.",
    tech: ["HLS Live Streams", "Background Audio Service", "JustAudio Engine", "Network Recovery"],
  },
  {
    id: 4,
    title: "الإنابة ومسار التعافي",
    subtitle: "Spiritual Recovery Vault & Habit Rebuilding",
    image: "/sakina/4.webp",
    backupImage: "/sakina/4.png",
    tag: "Spiritual Vault",
    accent: "#EC4899",
    icon: HeartHandshake,
    highlight: "Instant spiritual SOS panic button ('أشعر بضعف الآن'), streak counter, and 7-day habit rebuilding curriculum.",
    desc: "A private spiritual rehabilitation space offering emergency divine refuge triggers during temptation, streak tracking, daily spiritual tasks (قيام الليل ومناجاة السحر), and habit restructuring.",
    tech: ["Habit Machine", "Streak Persistence", "AES Gratitude Vault", "Biometrics"],
  },
  {
    id: 5,
    title: "المسبحة التفاعلية ثلاثية الأبعاد",
    subtitle: "Tactile Bead Physics & Multi-Preset Dhikr",
    image: "/sakina/5.webp",
    backupImage: "/sakina/5.png",
    tag: "Interactive Tasbih",
    accent: "#F59E0B",
    icon: Sparkles,
    highlight: "Realistic canvas bead physics, custom vibration feedback on every click, and multi-tier lap counters.",
    desc: "Smooth tactile electronic rosary featuring bead sliding animation, lap counting, customizable target presets (33, 100, 1000, Free), and distinct dhikr modes (الاستغفار، التسبيح، التحميد، التهليل).",
    tech: ["Custom Canvas Graphics", "Haptic Feedback API", "State Engine", "Touch Physics"],
  },
  {
    id: 6,
    title: "موسوعة السنة النبوية",
    subtitle: "9 Canonical Hadith Compendiums & 40,943 Hadiths",
    image: "/sakina/6.webp",
    backupImage: "/sakina/6.png",
    tag: "Hadith Engine",
    accent: "#818CF8",
    icon: Library,
    highlight: "40,943 authentic hadiths across 429 thematic chapters indexed offline with high-speed query indexing.",
    desc: "Comprehensive hadith compendium including Sahih Al-Bukhari, Sunan Abi Dawud, Musnad Ahmad, Sunan Al-Darimi, and Sunan Ibn Majah with verification badges and chapter search.",
    tech: ["SQLite Offline Search", "Dart Isolates", "Full-Text Indexing", "Clean Repositories"],
  },
  {
    id: 7,
    title: "صانع بطاقات ومقاطع الآيات 4K",
    subtitle: "FFmpeg 4K Video Reel Generator & Audio Sync",
    image: "/sakina/7.webp",
    backupImage: "/sakina/7.png",
    tag: "4K Reel Studio",
    accent: "#EAB308",
    icon: Video,
    highlight: "High-resolution 4K video reel and card generator with dynamic nature backgrounds, reciter audio synchronization, and social export.",
    desc: "An in-app creative studio powered by FFmpeg and custom Canvas graphics to render custom verse typography over dynamic nature backdrops with synchronized reciter audio ready for Instagram Reels and TikTok.",
    tech: ["FFmpeg Mobile", "Custom Canvas 4K", "Audio-Visual Sync", "Social Share API"],
  },
  {
    id: 8,
    title: "الأذكار المحصنة والعداد الذكي",
    subtitle: "Morning & Evening Adhkar with Dynamic Steps",
    image: "/sakina/8.webp",
    backupImage: "/sakina/8.png",
    tag: "Daily Adhkar",
    accent: "#06B6D4",
    icon: Clock,
    highlight: "Step-by-step counter cards with remaining repetitions ('المتبقي: 1') and Uthmani diacritics.",
    desc: "Categorized morning and evening adhkar with tap-to-count interaction, haptic pulse upon completion, and merit reference citations.",
    tech: ["Progress State Machine", "Haptic Feedback", "Typography Engine", "Local Storage"],
  },
  {
    id: 9,
    title: "حصن المسلم الرقمي",
    subtitle: "132 Fortress Chapters for Every Daily Occasion",
    image: "/sakina/9.webp",
    backupImage: "/sakina/9.png",
    tag: "Hisn Al-Muslim",
    accent: "#10B981",
    icon: ShieldCheck,
    highlight: "132 structured chapters covering day, night, family, travel, illness, and protection with instant search.",
    desc: "Comprehensive Islamic supplication guide indexed across categories (Day & Night, Family & Community, Prayers & Mosques) with rapid search.",
    tech: ["Categorical Filtering", "Fuzzy Search Engine", "Clean Architecture", "DTO Mappers"],
  },
  {
    id: 10,
    title: "ودجات الشاشة الرئيسية iOS & Android",
    subtitle: "Live Home Screen Prayer Telemetry",
    image: "/sakina/10.webp",
    backupImage: "/sakina/10.png",
    tag: "Native Widgets",
    accent: "#6366F1",
    icon: Smartphone,
    highlight: "Native iOS WidgetKit and Android AppWidgets powered by `home_widget` plugin with live prayer countdown.",
    desc: "Cross-platform home screen widgets offering glanceable prayer schedules, current active prayer highlight, and live countdown timer directly on the mobile home screen.",
    tech: ["iOS WidgetKit (Swift)", "Android AppWidget (Kotlin)", "home_widget Plugin", "Background WorkManager"],
  },
];

export default function SakinaShowcase() {
  const [activeIdx, setActiveIdx] = useState(0); // Default to Screen 1 (Sanctuary)
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef(null);

  const activeScreen = sakinaScreens[activeIdx];

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
      if (next < 0) next = sakinaScreens.length - 1;
      if (next >= sakinaScreens.length) next = 0;
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
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Sparkles size={14} className="text-amber-400" />
            <span>Sakina Mobile Showcase • 10 Production Screens</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
            Luxury Islamic Platform & 4K Reel Studio Walkthrough
          </h4>
        </div>

        {/* Play / Pause & Auto Indicator */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.sakina.islamic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors text-decoration-none shadow-sm"
            title="View Sakina on Google Play"
          >
            <GooglePlayIcon size={12} />
            <span>Google Play</span>
          </a>

          <a
            href="https://apps.apple.com/us/app/سكينة-قرآن-وأذكار/id6831748362"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors text-decoration-none shadow-sm"
            title="View Sakina on Apple App Store"
          >
            <AppleIcon size={12} className="text-white" />
            <span>App Store</span>
          </a>

          <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold flex items-center gap-1.5">
            <Moon size={12} />
            <span>Clean Arch & BLoC</span>
          </span>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-amber-500/40 text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1.5 transition-colors cursor-pointer"
            title={isAutoPlay ? "Pause slideshow" : "Start slideshow"}
          >
            {isAutoPlay && !isHovered && isInView ? (
              <>
                <Pause size={12} className="text-amber-400" />
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
            className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Inspect fullscreen"
          >
            <Maximize2 size={12} />
            <span>Expand High-Res</span>
          </button>
        </div>
      </div>

      {/* Screen Selector Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none snap-x">
        {sakinaScreens.map((s, idx) => {
          const isActive = idx === activeIdx;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => selectScreen(idx)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? "bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold shadow-sm"
                  : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--border-default)]"
              }`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isActive ? "bg-amber-400 text-black" : "bg-[var(--bg-elevated)] text-[var(--text-muted)]"
              }`}>
                {s.id}
              </span>
              <Icon size={12} className={isActive ? "text-amber-300" : "text-[var(--text-muted)]"} />
              <span className="truncate max-w-[130px] sm:max-w-none">{s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}</span>
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
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent blur-xl pointer-events-none -z-10" />

            {/* Phone Container */}
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-[36px] p-2.5 bg-[#090B0E] border-2 border-[var(--border-strong)] shadow-2xl cursor-pointer hover:border-amber-500/40 transition-colors duration-300"
              title="Click to expand high-resolution view"
            >
              {/* Screen Bezel Frame */}
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
                      onError={(e) => {
                        if (activeScreen.backupImage && e.target.src !== activeScreen.backupImage) {
                          e.target.src = activeScreen.backupImage;
                        }
                      }}
                    />
                  </AnimatePresence>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5">
                      <Maximize2 size={13} className="text-amber-400" />
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
                className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#12151B]/90 border border-[var(--border-default)] hover:border-amber-400 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all z-20 cursor-pointer"
                title="Previous Screen"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#12151B]/90 border border-[var(--border-default)] hover:border-amber-400 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all z-20 cursor-pointer"
                title="Next Screen"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3.5">
              {sakinaScreens.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => selectScreen(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx ? "w-6 bg-amber-400" : "w-1.5 bg-slate-700 hover:bg-slate-500"
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
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                      {activeScreen.tag}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Screen {activeScreen.id} of {sakinaScreens.length}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    67% Optimized Release Build
                  </span>
                </div>

                {/* Screen Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mb-1">
                  {activeScreen.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-400 mb-4 font-mono">
                  {activeScreen.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {activeScreen.desc}
                </p>

                {/* Key Technical Highlight Box */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] mb-5">
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 size={13} className="text-amber-400" />
                    <span>Core Technical Implementation:</span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">
                    {activeScreen.highlight}
                  </p>
                </div>

                {/* Production Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Clean Architecture & BLoC/Cubit state isolation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>FFmpeg 4K Canvas video reel engine with audio sync</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Offline mathematical prayer engine (zero API dependencies)</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Cross-platform iOS WidgetKit & Android AppWidgets</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeScreen.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation & Zoom Trigger */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => paginate(-1)}
                    className="btn-secondary-action py-1.5 px-3 text-xs"
                  >
                    <ChevronLeft size={14} />
                    <span>Prev Screen</span>
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="btn-secondary-action py-1.5 px-3 text-xs"
                  >
                    <span>Next Screen</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="btn-primary-action py-1.5 px-3 text-xs ml-auto"
                >
                  <Maximize2 size={13} />
                  <span>Inspect Full 4K</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen High-Res Lightbox Modal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
              onClick={() => setLightboxOpen(false)}
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0B0E14] border border-amber-500/30 p-5 sm:p-8 shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div>
                    <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Sakina (سَكِينَة) • Screen {activeScreen.id} of {sakinaScreens.length}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {activeScreen.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.sakina.islamic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex px-2.5 py-1 rounded-md bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold items-center gap-1.5 transition-colors text-decoration-none"
                      title="View Sakina on Google Play"
                    >
                      <GooglePlayIcon size={12} />
                      <span>Google Play</span>
                    </a>

                    <a
                      href="https://apps.apple.com/us/app/سكينة-قرآن-وأذكار/id6831748362"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold items-center gap-1.5 transition-colors text-decoration-none"
                      title="View Sakina on Apple App Store"
                    >
                      <AppleIcon size={12} className="text-white" />
                      <span>App Store</span>
                    </a>

                    <button
                      onClick={() => setLightboxOpen(false)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                        onError={(e) => {
                          if (activeScreen.backupImage && e.target.src !== activeScreen.backupImage) {
                            e.target.src = activeScreen.backupImage;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Technical Overview & Controls */}
                  <div className="md:col-span-6 flex flex-col justify-between space-y-4 text-left">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider inline-block mb-2">
                        {activeScreen.tag}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {activeScreen.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {activeScreen.desc}
                      </p>

                      <div className="p-3.5 rounded-xl bg-[#12151B] border border-slate-800 mb-4">
                        <div className="text-xs font-bold text-amber-400 mb-1 font-mono">
                          Architecture & Implementation:
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {activeScreen.highlight}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Strict Clean Architecture & BLoC/Cubit event-state streams</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>FFmpeg 4K Canvas export with synchronized audio waveforms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Zero API dependency offline astronomical celestial algorithms</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Native iOS WidgetKit and Android AppWidgets synchronization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          <span>Release build size reduced by 67% using R8 & Dart Isolates</span>
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
                        {sakinaScreens.map((s, idx) => (
                          <button
                            key={s.id}
                            onClick={() => selectScreen(idx)}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                              idx === activeIdx ? "w-6 bg-amber-400" : "bg-slate-700"
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
