import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon,
  MapPin, 
  GraduationCap, 
  ShoppingBag, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Activity,
  CheckCircle2,
  Maximize2,
  X,
  Wifi,
  Battery
} from 'lucide-react';
import { 
  GooglePlayIcon, 
  GitHubIcon, 
  AppleIcon 
} from './TechIcons';

const showcaseApps = [
  {
    id: 'sakina',
    title: 'Sakina',
    badge: 'App Store & Google Play',
    tagline: 'Islamic Sanctuary • 4K Reel Studio • Astronomical Core',
    overview: 'A luxury production Islamic application engineered with Flutter & Dart under Clean Architecture and BLoC. Features an in-app 4K Quranic video/reel studio with FFmpeg, mathematical offline astronomical prayer calculations, local AES gratitude vault, and cross-platform native home screen widgets.',
    screens: [
      '/sakina/1.webp',
      '/sakina/7.webp',
      '/sakina/2.webp',
      '/sakina/3.webp',
      '/sakina/4.webp',
      '/sakina/5.webp',
      '/sakina/6.webp',
      '/sakina/8.webp',
      '/sakina/9.webp',
      '/sakina/10.webp'
    ],
    backup: '/sakina/1.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sakina.islamic',
    appStoreUrl: 'https://apps.apple.com/us/app/id6831748362',
    techStack: ['Flutter', 'Dart', 'Clean Arch', 'BLoC / Cubit', 'FFmpeg Mobile', 'Canvas 4K', 'iOS WidgetKit', 'Android AppWidgets', 'Dart Isolates', 'AES Biometrics'],
    icon: Moon,
    accent: '#F59E0B',
    highlights: [
      '4K Quranic video/reel generator with FFmpeg & Canvas graphics with audio sync',
      'Zero API dependency offline astronomical prayer calculations & celestial sky',
      'Cross-platform home screen widgets using Android AppWidgets & iOS WidgetKit',
      'Optimized release builds by 67% using R8 shrinking, ProGuard & Dart Isolates'
    ],
  },
  {
    id: 'docmate',
    title: 'DocMate Healthcare',
    badge: 'App Store & Google Play',
    tagline: 'Healthcare Platform & Real-Time Clinic Queue Engine',
    overview: 'A production medical booking platform connecting patients with verified clinics, backed by Supabase RPC concurrency guards and an administrative React management dashboard.',
    screens: ['/doc_mate/2.webp', '/doc_mate/4.webp', '/doc_mate/5.webp', '/doc_mate/6.webp', '/doc_mate/7.webp'],
    backup: '/doc_made/2.webp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.curacare.app',
    appStoreUrl: 'https://apps.apple.com/us/app/docmate-clinic-appointments/id6819001621',
    techStack: ['Flutter', 'Dart', 'BLoC / Cubit', 'Supabase RPCs', 'React Admin', 'Offline Cache'],
    icon: Activity,
    accent: '#0284C7',
    highlights: [
      'Live waiting slot calculations & zero conflicting bookings via Supabase RPCs',
      'Dual role interface: Patient appointments & Doctor consultation queue',
      'Full offline caching & Arabic/English RTL/LTR dynamic theming',
    ],
  },
  {
    id: 'academia',
    title: 'Academia AI',
    badge: 'App Store & Google Play',
    tagline: 'Google Gemini 1.5 Multi-Modal Study Companion',
    overview: 'Flagship educational application featuring 25+ production screens, automated personalized study plan generation via Gemini AI, in-app PDF document summarization, and dynamic quizzing.',
    screens: ['/academia/1.webp', '/academia/2.webp', '/academia/3.webp', '/academia/4.webp'],
    backup: '/covers/academia.webp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mohamed.academiaai',
    appStoreUrl: 'https://apps.apple.com/us/app/academia-ai-all-in-one-study/id6815206996',
    techStack: ['Flutter', 'Dart', 'Google Gemini 1.5', 'Clean Architecture', 'Supabase', 'BLoC'],
    icon: GraduationCap,
    accent: '#38BDF8',
    highlights: [
      'Multi-modal PDF document parsing and smart summarization engine',
      'Dynamic quiz generator creating targeted questions from study notes',
      'Strict separation of Presentation, Domain (Use Cases), and Data layers',
    ],
  },
  {
    id: 'parkmate',
    title: 'ParkMate',
    badge: 'Mapbox GPS Navigation',
    tagline: 'GPS Parking Navigator & Reverse Geocoding',
    overview: 'Location-intelligence mobile application that pinpoints your vehicle coordinates with GPS, converts them to physical street addresses, and generates turn-by-turn walking guidance back to your car.',
    screens: ['/park_mate/1.webp', '/park_mate/2.webp', '/park_mate/3.webp'],
    backup: '/covers/parkmate.webp',
    githubUrl: 'https://github.com/M-Fawzy2004/park_mate',
    techStack: ['Flutter', 'Mapbox SDK', 'Supabase Auth', 'BLoC/Cubit', 'GoRouter', 'GPS'],
    icon: MapPin,
    accent: '#10B981',
    highlights: [
      'Turn-by-turn walking directions powered by Mapbox Directions API',
      'Instant coordinate capture with automatic reverse geocoding',
      'Distance calculation, ETA estimation, and route deviation alert',
    ],
  },
  {
    id: 'transport',
    title: 'Child Transit Hub',
    badge: 'Capstone Distinction',
    tagline: 'Parent App & Driver Dual Dashboard in Unified Codebase',
    overview: 'Dual-interface capstone project coordinating safe school transportation. Parents track live bus telemetry and check-ins, while drivers manage student attendance and route stops.',
    screens: ['/covers/graduation.webp'],
    backup: '/covers/graduation.webp',
    techStack: ['Flutter', 'Retrofit', 'RESTful APIs', 'BLoC', 'GoRouter', 'RTL Localization'],
    icon: Layers,
    accent: '#818CF8',
    highlights: [
      'Single clean codebase serving two distinct role-guarded mobile experiences',
      'Live bus tracking updates and automated student pickup status',
      'Graduation project completed with distinction at Tanta University',
    ],
  },
  {
    id: 'ecommerce',
    title: 'Shop Ecosystem',
    badge: 'Commercial Full-Stack',
    tagline: 'Live Paymob Gateway & Embedded Google Maps Tracking',
    overview: 'Full-stack commercial commerce ecosystem combining a mobile shopping client with live Paymob card/wallet payments and real-time package delivery tracking, managed by a web admin portal.',
    screens: ['/shop_mobile/1.webp', '/shop_mobile/2.webp', '/shop_mobile/3.webp'],
    backup: '/covers/ecommerce.webp',
    githubUrl: 'https://github.com/M-Fawzy2004/Ecommerce',
    techStack: ['Flutter', 'Paymob', 'Google Maps', 'Supabase', 'Clean Arch', 'Web Admin'],
    icon: ShoppingBag,
    accent: '#F59E0B',
    highlights: [
      'Secure payment processing with Paymob card & digital wallet support',
      'Embedded Google Maps package delivery tracking for dispatch operations',
      'Synchronized with React Web Admin CRUD for inventory management',
    ],
  },
];

export default function InteractiveAppShowcase() {
  const [activeAppIdx, setActiveAppIdx] = useState(0);
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [islandExpanded, setIslandExpanded] = useState(false);

  const currentApp = showcaseApps[activeAppIdx];

  // Listen for select-app events from Command Palette or other components
  useEffect(() => {
    const handleSelectEvent = (e) => {
      if (e.detail && e.detail.id) {
        const idx = showcaseApps.findIndex((a) => a.id === e.detail.id);
        if (idx !== -1) {
          setActiveAppIdx(idx);
          setActiveScreenIdx(0);
        }
      }
    };
    window.addEventListener('select-app', handleSelectEvent);
    return () => window.removeEventListener('select-app', handleSelectEvent);
  }, []);

  const handleSelectApp = (idx) => {
    setActiveAppIdx(idx);
    setActiveScreenIdx(0);
  };

  const handleNextScreen = () => {
    setActiveScreenIdx((prev) => (prev + 1) % currentApp.screens.length);
  };

  const handlePrevScreen = () => {
    setActiveScreenIdx((prev) => (prev - 1 + currentApp.screens.length) % currentApp.screens.length);
  };

  return (
    <section id="apps" className="section-padding relative overflow-hidden">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Interactive Mobile Stage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Production Mobile Apps in Action
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Explore 6 mobile applications engineered with Clean Architecture, Google Gemini AI, Mapbox GPS, and Supabase.
          </p>
        </div>

        {/* App Selector Tabs */}
        <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-2 w-fit mx-auto px-4">
            {showcaseApps.map((app, idx) => {
              const isActive = idx === activeAppIdx;
              const Icon = app.icon;
              return (
                <button
                  key={app.id}
                  onClick={() => handleSelectApp(idx)}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-default)] text-[var(--text-body)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-sky-400'} />
                  <span>{app.title}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
                  }`}>
                    {app.screens.length} {app.screens.length === 1 ? 'Screen' : 'Screens'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Device Stage + Architectural Insights Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bento-card p-5 sm:p-8">
          
          {/* Left Column: Ultra-Realistic iPhone 16 Pro Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[310px]">
              
              {/* iPhone 16 Pro Natural Titanium Outer Frame */}
              <div className="relative rounded-[46px] p-[10px] bg-gradient-to-b from-[#3A3F4A] via-[#242831] to-[#1A1D24] border-2 border-[#4A505E]/40 shadow-2xl">
                
                {/* Physical Buttons on Outer Frame */}
                <div className="absolute -left-[5px] top-24 w-[3px] h-7 bg-[#2E333D] rounded-l-sm" title="Action Button" />
                <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-[#2E333D] rounded-l-sm" title="Volume Up" />
                <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-[#2E333D] rounded-l-sm" title="Volume Down" />
                <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-[#2E333D] rounded-r-sm" title="Power Button" />

                {/* Inner Screen Bezel with Precision Curved Corners */}
                <div className="relative rounded-[36px] overflow-hidden bg-black aspect-[9/19] flex flex-col justify-between border border-black shadow-inner">
                  
                  {/* Subtle Screen Glare Glass Gradient */}
                  <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] rounded-[36px]" />

                  {/* Top Status Bar & Interactive Dynamic Island */}
                  <div className="relative z-40 w-full px-5 pt-3 pb-1 flex items-center justify-between text-[10px] text-white/90 font-mono select-none">
                    <span className="font-semibold tracking-tight">9:41</span>

                    {/* Dynamic Island Pill */}
                    <motion.div
                      layout
                      onClick={() => setIslandExpanded(!islandExpanded)}
                      className={`cursor-pointer rounded-full bg-black border border-white/10 flex items-center justify-center transition-all px-2.5 py-1 ${
                        islandExpanded ? 'w-40 h-6' : 'w-24 h-4'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {islandExpanded ? (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1.5 text-[8px] text-sky-400 font-mono"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Impeller • 60 FPS</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="compact"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1.5 text-[7px] text-slate-300 font-mono truncate"
                          >
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                            <span className="truncate">{currentApp.title}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Wireless & Battery Icons */}
                    <div className="flex items-center gap-1.5 text-white/80">
                      <Wifi size={10} />
                      <span className="text-[8px] font-bold text-emerald-400">5G</span>
                      <div className="flex items-center">
                        <Battery size={12} className="text-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* App Screen Viewer with Touch/Drag Swipe Support */}
                  <div className="relative flex-1 w-full overflow-hidden bg-black flex items-center justify-center touch-pan-y">
                    <motion.div
                      key={`${currentApp.id}-${activeScreenIdx}`}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.25}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -80 || offset.x < -50) {
                          handleNextScreen();
                        } else if (swipe > 80 || offset.x > 50) {
                          handlePrevScreen();
                        }
                      }}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
                    >
                      <img
                        src={currentApp.screens[activeScreenIdx]}
                        alt={`${currentApp.title} Screen ${activeScreenIdx + 1}`}
                        className="w-full h-full object-cover object-top select-none pointer-events-none"
                        onError={(e) => {
                          if (currentApp.backup && e.target.src !== currentApp.backup) {
                            e.target.src = currentApp.backup;
                          }
                        }}
                      />
                    </motion.div>

                    {/* Floating Zoom / Lightbox Trigger Button */}
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer z-30 opacity-70 hover:opacity-100"
                      title="Inspect High-Res Screen"
                    >
                      <Maximize2 size={12} />
                    </button>

                    {/* Left/Right Floating Navigation Chevrons inside device */}
                    {currentApp.screens.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevScreen}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer z-30"
                          aria-label="Previous screen"
                        >
                          <ChevronLeft size={14} />
                        </button>

                        <button
                          onClick={handleNextScreen}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer z-30"
                          aria-label="Next screen"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-full py-2 flex justify-center bg-black">
                    <div className="w-24 h-1 rounded-full bg-white/40" />
                  </div>

                </div>
              </div>

              {/* Interactive Screen Thumbnail Bar */}
              {currentApp.screens.length > 1 && (
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
                    {currentApp.screens.map((screen, idx) => {
                      const isCurrent = idx === activeScreenIdx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveScreenIdx(idx)}
                          className={`relative w-7 h-12 rounded-md overflow-hidden border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                            isCurrent
                              ? 'border-sky-400 scale-105 shadow-md ring-1 ring-sky-400'
                              : 'border-white/10 opacity-50 hover:opacity-90'
                          }`}
                          title={`Jump to screen ${idx + 1}`}
                        >
                          <img
                            src={screen}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      );
                    })}
                  </div>
                  <div className="text-center text-[10px] font-mono text-[var(--text-muted)] mt-1.5">
                    Screen {activeScreenIdx + 1} of {currentApp.screens.length} • Swipe or click to inspect
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Architectural Insights & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {currentApp.badge}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {currentApp.screens.length} Production Screens
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                {currentApp.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-sky-400 mb-4 font-mono">
                {currentApp.tagline}
              </p>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {currentApp.overview}
              </p>

              {/* Engineering Highlights */}
              <div className="space-y-2 mb-6 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Key Engineering Milestones
                </span>
                {currentApp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 size={14} className="text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-7">
                {currentApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Verification Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
              {currentApp.playStoreUrl && (
                <a
                  href={currentApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action text-xs"
                >
                  <GooglePlayIcon size={14} />
                  <span>Google Play</span>
                </a>
              )}

              {currentApp.appStoreUrl && (
                <a
                  href={currentApp.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-action text-xs"
                >
                  <AppleIcon size={14} />
                  <span>Apple App Store</span>
                </a>
              )}

              {currentApp.githubUrl && (
                <a
                  href={currentApp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action text-xs"
                >
                  <GitHubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}

              <a
                href="#projects"
                className="btn-secondary-action text-xs ml-auto"
              >
                <span>All Projects</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* High-Resolution Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-md w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close high-res preview"
              >
                <X size={20} />
              </button>

              <img
                src={currentApp.screens[activeScreenIdx]}
                alt={`${currentApp.title} High-Res Preview`}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl border border-white/20 object-contain"
              />

              <div className="mt-3 flex items-center gap-3 text-white text-xs font-mono">
                <span>{currentApp.title}</span>
                <span>•</span>
                <span>Screen {activeScreenIdx + 1} of {currentApp.screens.length}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
