import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  ShoppingBag, 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { 
  GooglePlayIcon, 
  GitHubIcon,
  AppleIcon 
} from './TechIcons';

const showcaseApps = [
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
    badge: 'Google Play • 25+ Screens',
    tagline: 'Google Gemini 1.5 Multi-Modal Study Companion',
    overview: 'Flagship educational application featuring 25+ production screens, automated personalized study plan generation via Gemini AI, in-app PDF document summarization, and dynamic quizzing.',
    screens: ['/academia/1.webp', '/academia/2.webp', '/academia/3.webp', '/academia/4.webp'],
    backup: '/covers/academia.webp',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mohamed.academiaai',
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

  const currentApp = showcaseApps[activeAppIdx];

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
    <section className="section-padding relative overflow-hidden">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Interactive Mobile Stage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Production Mobile Apps in Action
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Explore 5 mobile applications engineered with Clean Architecture, Google Gemini AI, Mapbox GPS, and Supabase.
          </p>
        </div>

        {/* App Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none snap-x">
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

        {/* Interactive Device Stage + Architectural Insights Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bento-card p-5 sm:p-8">
          
          {/* Left Column: Interactive Mobile Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[300px]">
              
              {/* Phone Device Chassis */}
              <div className="relative rounded-[36px] p-2 bg-[#0A0D12] border-2 border-[var(--border-strong)] shadow-sm">
                
                {/* Screen Bezel */}
                <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/18.5] flex flex-col justify-between border border-black/80">
                  
                  {/* Status Bar & Minimal Dynamic Island */}
                  <div className="relative z-20 w-full px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>9:41</span>
                    <div className="w-16 h-3 rounded-full bg-black border border-slate-800 flex items-center justify-center">
                      <span className="text-[7px] text-slate-500 font-mono truncate px-1">
                        {currentApp.title.split(' ')[0]}
                      </span>
                    </div>
                    <span className="text-[8px] text-emerald-400 font-bold">5G</span>
                  </div>

                  {/* App Screen Viewer */}
                  <div className="relative flex-1 w-full overflow-hidden bg-black flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${currentApp.id}-${activeScreenIdx}`}
                        src={currentApp.screens[activeScreenIdx]}
                        alt={`${currentApp.title} Screen ${activeScreenIdx + 1}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full object-cover object-top select-none"
                        onError={(e) => {
                          if (currentApp.backup && e.target.src !== currentApp.backup) {
                            e.target.src = currentApp.backup;
                          }
                        }}
                      />
                    </AnimatePresence>

                    {/* Left/Right Floating Navigation Chevrons inside device */}
                    {currentApp.screens.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevScreen}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer z-20"
                          aria-label="Previous screen"
                        >
                          <ChevronLeft size={14} />
                        </button>

                        <button
                          onClick={handleNextScreen}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all cursor-pointer z-20"
                          aria-label="Next screen"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Bottom Home Indicator */}
                  <div className="w-full py-1.5 flex justify-center bg-black">
                    <div className="w-20 h-1 rounded-full bg-white/30" />
                  </div>

                </div>
              </div>

              {/* Screen Dots Indicator */}
              {currentApp.screens.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {currentApp.screens.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenIdx(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeScreenIdx ? 'w-5 bg-sky-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to screen ${idx + 1}`}
                    />
                  ))}
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
                  Screen {activeScreenIdx + 1} of {currentApp.screens.length}
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
                  <span>View on Google Play</span>
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
    </section>
  );
}
