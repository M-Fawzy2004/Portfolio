import { 
  Sparkles,
  Globe,
  CheckCircle2
} from "lucide-react";
import { 
  GooglePlayIcon, 
  GitHubIcon,
  AppleIcon
} from "./TechIcons";

const projects = [
  {
    id: "sakina",
    title: "Sakina",
    tagline: "Luxury Islamic Mobile Platform • 4K Quranic Reel Studio • Astronomical Engine",
    badge: "Luxury Production App",
    rating: "Live on App Store & Google Play",
    overview:
      "A flagship luxury Islamic mobile application engineered with Flutter & Dart under Clean Architecture and BLoC. Features an offline astronomical prayer engine, in-app 4K Quranic video/reel studio with FFmpeg, and native iOS WidgetKit and Android AppWidgets.",
    highlights: [
      "4K video & audio reel engine rendering high-resolution reels on-device with zero cloud compute cost.",
      "Pure mathematical astronomical algorithms computing prayer times and celestial sky phases offline.",
      "Local biometric gratitude vault secured with local AES encryption and hardware biometrics.",
      "Optimized release builds by 67% using R8 shrinking, ProGuard keep rules, and WebP asset quantization.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC / Cubit",
      "FFmpeg Mobile",
      "Canvas 4K",
      "iOS WidgetKit",
      "Android AppWidgets",
      "Dart Isolates",
      "AES Encryption",
      "Google Play Console",
      "App Store Connect"
    ],
    cover: "/sakina/1.webp",
    backupCover: "/sakina/1.png",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sakina.islamic",
        icon: GooglePlayIcon,
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/id6831748362",
        icon: AppleIcon,
      },
    ],
  },
  {
    id: "docmate",
    title: "DocMate Healthcare",
    tagline: "Commercial Healthcare Platform & Real-Time Clinic Queue Engine",
    badge: "Production Healthcare System",
    rating: "Live on App Store & Google Play",
    overview:
      "A production medical consultation platform connecting patients with specialized healthcare providers, featuring live waiting queue calculations, instant scheduling, and an administrative React portal.",
    highlights: [
      "Real-time appointment booking engine with live waiting slot computation, eliminating double-booking conflicts via Supabase RPCs.",
      "Dual-interface architecture cleanly separating Patient bookings from Doctor queue management.",
      "Full offline caching, localized Arabic/English RTL dynamic layouts, and medical report storage.",
      "Web operations portal in React allowing clinic administrators to verify credentials and manage clinics.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Clean Architecture",
      "Supabase PostgreSQL",
      "React Admin Dashboard",
      "Offline Cache",
      "Dio & RESTful APIs",
      "Google Play Console",
      "App Store Connect"
    ],
    cover: "/doc_mate/2.webp",
    backupCover: "/doc_made/2.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.curacare.app",
        icon: GooglePlayIcon,
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/docmate-clinic-appointments/id6819001621",
        icon: AppleIcon,
      },
    ],
  },
  {
    id: "academia-ai",
    title: "Academia AI",
    tagline: "Google Gemini 1.5 Multi-Modal Study Companion",
    badge: "AI-Powered Education App",
    rating: "25+ Screens • App Store & Google Play",
    overview:
      "A flagship educational companion engineered with Flutter & Supabase, featuring 25+ screens, automated personalized study plans via Google Gemini 1.5, in-app PDF document summarization, and dynamic interactive quizzes.",
    highlights: [
      "Integrated multi-modal Google Gemini AI workflows: automated study plan generation and document understanding.",
      "Multi-modal PDF parsing engine extracting structured chapter notes directly inside the mobile app.",
      "Automated quiz generator creating tailored exam questions from user notes with performance tracking.",
      "Strict Clean Architecture separating Presentation, Domain UseCases, and Data Sources with BLoC.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Google Gemini 1.5",
      "Clean Architecture",
      "Supabase",
      "BLoC / Cubit",
      "Syncfusion PDF",
      "GoRouter",
      "Google Play Console",
      "App Store Connect"
    ],
    cover: "/academia/1.webp",
    backupCover: "/covers/academia.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.mohamed.academiaai",
        icon: GooglePlayIcon,
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/academia-ai-all-in-one-study/id6815206996",
        icon: AppleIcon,
      },
    ],
  },
  {
    id: "parkmate",
    title: "ParkMate",
    tagline: "GPS Parking Navigator & Reverse Geocoding",
    badge: "Mapbox GPS Navigation",
    rating: "Open Source Engineering",
    overview:
      "A location-intelligence mobile application that pinpoints vehicle coordinates via GPS, performs reverse-geocoding to a physical address, and generates turn-by-turn walking guidance back to the vehicle.",
    highlights: [
      "Turn-by-turn walking routing powered by Mapbox Directions API and custom Mapbox vector tiles.",
      "Instant coordinate capture with automatic reverse-geocoding via Mapbox Geocoding SDK.",
      "Accurate distance calculation, live ETA estimation, and route deviation alerts.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Mapbox SDK",
      "Supabase Auth",
      "BLoC / Cubit",
      "GoRouter",
      "GPS Telemetry"
    ],
    cover: "/covers/parkmate.webp",
    backupCover: "/covers/parkmate.webp",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/M-Fawzy2004/ParkMade",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "transportation-system",
    title: "Child Transit Hub",
    tagline: "Parent App & Driver Dual Dashboard in Unified Codebase",
    badge: "Capstone Distinction",
    rating: "B.Sc. Graduation Project (Distinct)",
    overview:
      "A dual-interface child transit platform coordinating safe school transportation. Parents track live bus telemetry and student check-ins, while drivers manage attendance and route navigation in a unified codebase.",
    highlights: [
      "Single modular codebase serving two distinct role-guarded mobile experiences.",
      "Live bus tracking updates and automated student pickup status via Retrofit REST APIs.",
      "B.Sc. graduation project completed with distinction at Tanta University.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Retrofit",
      "RESTful APIs",
      "BLoC / Cubit",
      "GoRouter",
      "RTL Localization"
    ],
    cover: "/covers/graduation.webp",
    backupCover: "/covers/graduation.webp",
    links: [],
  },
  {
    id: "ecommerce-ecosystem",
    title: "Shop Ecosystem",
    tagline: "Live Paymob Gateway & Embedded Google Maps Tracking",
    badge: "Commercial Full-Stack",
    rating: "Production Architecture",
    overview:
      "A full-stack commercial commerce ecosystem combining a mobile shopping client with live Paymob card/wallet payments and real-time package delivery tracking, managed by a web admin portal.",
    highlights: [
      "Integrated Paymob payment gateway supporting credit cards and mobile wallets with transaction verification.",
      "Embedded Google Maps package delivery tracking for dispatch operations.",
      "Synchronized with React Web Admin CRUD for real-time inventory governance.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Paymob Gateway",
      "Google Maps SDK",
      "Supabase",
      "Clean Architecture",
      "React Web Admin"
    ],
    cover: "/covers/ecommerce.webp",
    backupCover: "/covers/ecommerce.webp",
    links: [
      {
        label: "Mobile Repository",
        url: "https://github.com/M-Fawzy2004/Ecommerce",
        icon: GitHubIcon,
      },
    ],
  }
];

export default function Projects() {
  const sakinaProject = projects.find((p) => p.id === "sakina");
  const docmateProject = projects.find((p) => p.id === "docmate");
  const academiaProject = projects.find((p) => p.id === "academia-ai");
  const parkmateProject = projects.find((p) => p.id === "parkmate");
  const transportProject = projects.find((p) => p.id === "transportation-system");
  const ecommerceProject = projects.find((p) => p.id === "ecommerce-ecosystem");

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Selected Production Projects
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Production apps shipped with Clean Architecture, Google Gemini AI, Mapbox GPS, and Supabase.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-10">

          {/* Spotlight 0: Sakina */}
          <div className="bento-card p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {sakinaProject.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {sakinaProject.links[0].label}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {sakinaProject.links[1].label}
                    </span>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      ★ 4K Reel Studio
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      10 Production Screens
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                    {sakinaProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {sakinaProject.overview}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1.5">
                      Key Technical Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
                      {sakinaProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sakinaProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={sakinaProject.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-action text-xs"
                  >
                    <GooglePlayIcon size={14} />
                    <span>Google Play</span>
                  </a>

                  <a
                    href={sakinaProject.links[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action text-xs"
                  >
                    <AppleIcon size={14} />
                    <span>App Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview Banner */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-black border border-amber-500/25 flex items-center justify-center p-2">
                <img
                  src={sakinaProject.cover}
                  alt="Sakina Mobile App Cover"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    if (sakinaProject.backupCover && e.target.src !== sakinaProject.backupCover) {
                      e.target.src = sakinaProject.backupCover;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>Sakina • 10 Production Screens</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Spotlight 1: DocMate */}
          <div className="bento-card p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {docmateProject.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {docmateProject.links[0].label}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {docmateProject.links[1].label}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      5 Production Screens
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                    {docmateProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {docmateProject.overview}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1.5">
                      Key Technical Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
                      {docmateProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {docmateProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={docmateProject.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-action text-xs"
                  >
                    <GooglePlayIcon size={14} />
                    <span>Google Play</span>
                  </a>

                  <a
                    href={docmateProject.links[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action text-xs"
                  >
                    <AppleIcon size={14} />
                    <span>App Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview Banner */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-black border border-[var(--border-default)] flex items-center justify-center p-2">
                <img
                  src={docmateProject.cover}
                  alt="DocMate Cover"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    if (docmateProject.backupCover && e.target.src !== docmateProject.backupCover) {
                      e.target.src = docmateProject.backupCover;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>DocMate • 5 Production Screens</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Spotlight 2: Academia AI */}
          <div className="bento-card p-5 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {academiaProject.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {academiaProject.links[0].label}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {academiaProject.links[1].label}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      25+ Screens Shipped
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2">
                    {academiaProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {academiaProject.overview}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1.5">
                      Key Technical Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
                      {academiaProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {academiaProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={academiaProject.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-action text-xs"
                  >
                    <GooglePlayIcon size={14} />
                    <span>Google Play</span>
                  </a>

                  <a
                    href={academiaProject.links[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action text-xs"
                  >
                    <AppleIcon size={14} />
                    <span>App Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview Banner */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3] bg-black border border-[var(--border-default)] flex items-center justify-center p-2">
                <img
                  src={academiaProject.cover}
                  alt="Academia AI Cover"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>Academia AI • Gemini 1.5 Study Engine</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Secondary 2-Column Grid: ParkMate & Transportation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Project 3: ParkMate */}
            <div className="bento-card p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Mapbox Navigation
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    GPS Coordinates
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1.5">
                  ParkMate
                </h3>

                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  A location-intelligence mobile app that pinpoints your vehicle's parking coordinates with GPS, performs reverse-geocoding to a physical address, and provides turn-by-turn walking guidance back to your car.
                </p>

                <div className="relative rounded-lg overflow-hidden aspect-[16/9] mb-4 bg-black border border-[var(--border-subtle)]">
                  <img
                    src={parkmateProject.cover}
                    alt="ParkMate Navigation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {parkmateProject.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                <a
                  href={parkmateProject.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action flex-1 text-xs py-1.5"
                >
                  <GitHubIcon size={14} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            {/* Project 4: Transportation System */}
            <div className="bento-card p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    Dual Architecture
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Graduation Project
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1.5">
                  Child Transportation System
                </h3>

                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  Dual-interface child transit platform connecting parents and school bus drivers. Delivers two completely independent experiences (Parent App and Driver Dashboard) in a unified Flutter codebase with Retrofit REST APIs.
                </p>

                <div className="relative rounded-lg overflow-hidden aspect-[16/9] mb-4 bg-black border border-[var(--border-subtle)]">
                  <img
                    src={transportProject.cover}
                    alt="Transportation System"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {transportProject.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                <a
                  href="#education"
                  className="btn-secondary-action flex-1 text-xs py-1.5 text-center justify-center"
                >
                  <span>Tanta University Capstone Distinction</span>
                </a>
              </div>
            </div>

          </div>

          {/* Tertiary: E-Commerce Ecosystem */}
          <div className="bento-card p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative rounded-lg overflow-hidden aspect-[16/10] bg-black border border-[var(--border-subtle)]">
                <img
                  src={ecommerceProject.cover}
                  alt="E-Commerce Ecosystem"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      Commercial Stack
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      Paymob + Google Maps
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1.5">
                    Full-Stack E-Commerce Ecosystem
                  </h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                    High-performance mobile store integrated with live Paymob payment gateway and embedded Google Maps delivery tracking, synchronized with a real-time web management CRUD dashboard on Supabase.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href="https://github.com/M-Fawzy2004/Ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action text-xs py-1.5"
                  >
                    <GitHubIcon size={14} />
                    <span>Mobile Repo</span>
                  </a>
                  <a
                    href="https://github.com/M-Fawzy2004/Dashboard_Ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-action text-xs py-1.5"
                  >
                    <Globe size={14} />
                    <span>Web Dashboard Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
