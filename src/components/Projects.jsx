import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ExternalLink, 
  X, 
  Globe,
  CheckCircle2
} from "lucide-react";
import { 
  GooglePlayIcon, 
  GitHubIcon 
} from "./TechIcons";

const projects = [
  {
    id: "academia-ai",
    title: "Academia AI",
    tagline: "Gemini AI-Powered Educational Platform • 25+ Screens",
    badge: "Flagship Production App",
    rating: "Live on Google Play",
    description: "An advanced production educational platform featuring 25+ screens, automated study plan generation via Google Gemini 1.5, PDF document summarization, dynamic quiz creation, and offline caching.",
    features: [
      "Over 25+ production screens built with Clean Architecture and strict BLoC state management.",
      "Integrated multi-modal Google Gemini AI workflows: automated study plan generation, document understanding, and real-time AI tutor.",
      "In-app PDF document summarization and interactive dynamic quiz generation from study notes.",
      "Dual-language localization (Arabic / English) with full RTL adaptations and dynamic theming.",
      "Offline data caching with automated synchronization and robust network recovery handling.",
    ],
    techStack: ["Flutter", "Dart", "Google Gemini AI", "Supabase", "Clean Architecture", "BLoC", "SQLite Cache"],
    images: ["/academia/1.png", "/academia/2.png", "/academia/3.png", "/academia/4.png"],
    cover: "/covers/academia.png",
    links: [
      { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.mohamed.academiaai", icon: GooglePlayIcon, primary: true }
    ],
  },
  {
    id: "parkmate",
    title: "ParkMate",
    tagline: "Real-Time GPS Parking Navigator & Car Locator",
    badge: "Mapbox GPS & Hardware",
    rating: "Open Source",
    description: "A location-intelligence mobile app that pinpoints your vehicle's parking coordinates with GPS, performs reverse-geocoding, and provides turn-by-turn walking navigation back to your car using Mapbox.",
    features: [
      "Real-time turn-by-turn walking navigation powered by Mapbox Maps & Directions API.",
      "One-tap parking spot capture: GPS coordinate storage with automatic reverse geocoding to street address.",
      "Nearby parking discovery with distance calculation, ETA, and route deviation detection.",
      "Comprehensive parking history with timestamps, notes, and locations.",
      "Supabase Auth with OTP phone and email verification.",
      "Built with GoRouter, GetIt dependency injection, and persistent offline connectivity monitor.",
    ],
    techStack: ["Flutter", "Supabase Auth", "Mapbox SDK", "BLoC/Cubit", "GoRouter", "Clean Architecture"],
    images: ["/park_mate/1.png", "/park_mate/2.png", "/park_mate/3.png"],
    cover: "/covers/parkmate.png",
    links: [
      { label: "View on GitHub", url: "https://github.com/M-Fawzy2004/park_mate", icon: GitHubIcon, primary: true }
    ],
  },
  {
    id: "transportation-system",
    title: "Child Transportation System",
    tagline: "Dual-Interface Architecture: Parent App & Driver Dashboard",
    badge: "Capstone Graduation Project",
    rating: "B.Sc. Distinction",
    description: "A dual-interface real-time child transportation platform connecting parents with school bus drivers. Features live driver tracking, role-based route guards, and bilingual support.",
    features: [
      "Dual-interface architecture: Parent App and School Driver Dashboard in a single clean codebase with role-based routing.",
      "Real-time bus tracking, ETA estimation, and live trip status updates.",
      "Child management module: parents manage multiple children, pickup points, and school bus subscription tiers.",
      "Driver dashboard: assigned families list, student check-in/out, earnings overview, and route optimization.",
      "RESTful API integration via Retrofit & Repository Pattern with secure token management.",
      "Skeletonizer shimmer effects for smooth data-fetching user experience.",
    ],
    techStack: ["Flutter", "Retrofit", "RESTful APIs", "BLoC / Cubit", "Clean Architecture", "RTL Localization", "Skeletonizer"],
    images: ["/covers/graduation.png"],
    cover: "/covers/graduation.png",
    links: [],
  },
  {
    id: "ecommerce-ecosystem",
    title: "Commercial E-Commerce Ecosystem",
    tagline: "High-Performance Mobile App + Real-Time Web Admin CRUD",
    badge: "Commercial Full-Stack",
    rating: "Production Stack",
    description: "A full dual-system commercial ecosystem with a native Flutter mobile app featuring Paymob payment gateway and live package delivery tracking, backed by a web admin management dashboard.",
    features: [
      "Full mobile shopping flow: product search, category filters, persistent cart, and Paymob payment integration.",
      "Embedded Google Maps real-time package delivery tracking for courier dispatch.",
      "Web Admin Dashboard: product CRUD, order status management, inventory control, and customer review moderation.",
      "Powered by Supabase PostgreSQL, Authentication, and Storage.",
    ],
    techStack: ["Flutter", "Paymob", "Google Maps", "Supabase", "Clean Architecture", "Web Dashboard"],
    images: ["/covers/ecommerce.png", "/shop_mobile/1.png", "/shop_mobile/2.png", "/dash_web/w1-front.png"],
    cover: "/covers/ecommerce.png",
    links: [
      { label: "Mobile App Code", url: "https://github.com/M-Fawzy2004/Ecommerce", icon: GitHubIcon },
      { label: "Admin Web Dashboard", url: "https://github.com/M-Fawzy2004/Dashboard_Ecommerce", icon: GitHubIcon }
    ],
  },
  {
    id: "shop-app",
    title: "Shop App - Rapid Catalog",
    tagline: "Paginated Mobile Storefront with Dio Interceptors",
    badge: "Network Architecture",
    description: "A lightweight mobile e-commerce client featuring custom client-side data pagination with Dio to seamlessly handle heavy product catalogs and order workflows.",
    features: [
      "Client-side infinite pagination with Dio and RESTful API caching headers.",
      "Dynamic filtering by multiple categories and price intervals.",
      "Smooth order lifecycle management mapped to Supabase.",
    ],
    techStack: ["Flutter", "Dio", "REST APIs", "Supabase", "BLoC State Management"],
    images: ["/shop/shop_1.png", "/shop/shop_2.png", "/shop/shop_3.png"],
    cover: "/covers/shop.png",
    links: [
      { label: "GitHub Repo", url: "https://github.com/M-Fawzy2004/ShopApp", icon: GitHubIcon }
    ],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0);

  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    setActiveModalImageIdx(0);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Mobile Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Featured Mobile Projects
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Production apps shipped with Clean Architecture, Google Gemini AI, Mapbox GPS, and Supabase.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Spotlight Flagship 1: Academia AI */}
          <div className="bento-card p-5 sm:p-8 border border-[var(--border-default)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      Flagship App
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <GooglePlayIcon size={12} /> Google Play
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      25+ Screens
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-2.5">
                    Academia AI
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    A comprehensive educational platform built with Flutter. Integrates advanced <strong>Google Gemini 1.5</strong> workflows for automatic personalized study plan generation, full PDF document summarization, interactive AI quizzing, and offline caching.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>Gemini AI PDF Summaries & Dynamic Quiz Generator</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>Bilingual Localization (Arabic & English RTL/LTR)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>Clean Architecture with BLoC State Management</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle2 size={15} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>Offline Caching & Supabase Cloud Storage</span>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {projects[0].techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={projects[0].links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-action text-xs"
                  >
                    <GooglePlayIcon size={14} />
                    <span>View on Google Play</span>
                  </a>

                  <button
                    onClick={() => openProjectModal(projects[0])}
                    className="btn-secondary-action text-xs"
                  >
                    <span>Inspect Details & Screens</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview Banner */}
              <div 
                onClick={() => openProjectModal(projects[0])}
                className="lg:col-span-5 relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] bg-black border border-[var(--border-default)]"
              >
                <img
                  src="/covers/academia.png"
                  alt="Academia AI Cover"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>Click to inspect (4 screens)</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Secondary 2-Column Grid: ParkMate & Transportation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Project 2: ParkMate */}
            <div className="bento-card p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Mapbox Navigation
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    GPS Routing
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1.5">
                  ParkMate
                </h3>

                <p className="text-xs text-[var(--text-body)] leading-relaxed mb-4">
                  A location-intelligence mobile app that pinpoints your vehicle's parking coordinates with GPS, performs reverse-geocoding to a physical address, and provides turn-by-turn walking guidance back to your car.
                </p>

                <div 
                  onClick={() => openProjectModal(projects[1])}
                  className="relative rounded-lg overflow-hidden cursor-pointer aspect-[16/9] mb-4 bg-black border border-[var(--border-subtle)]"
                >
                  <img
                    src="/covers/parkmate.png"
                    alt="ParkMate Navigation"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {projects[1].techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                <a
                  href={projects[1].links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action flex-1 text-xs py-1.5"
                >
                  <GitHubIcon size={14} />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => openProjectModal(projects[1])}
                  className="btn-secondary-action text-xs py-1.5 px-3"
                >
                  Details
                </button>
              </div>
            </div>

            {/* Project 3: Transportation System */}
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

                <div 
                  onClick={() => openProjectModal(projects[2])}
                  className="relative rounded-lg overflow-hidden cursor-pointer aspect-[16/9] mb-4 bg-black border border-[var(--border-subtle)]"
                >
                  <img
                    src="/covers/graduation.png"
                    alt="Transportation System"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {projects[2].techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => openProjectModal(projects[2])}
                  className="btn-primary-action flex-1 text-xs py-1.5"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* Tertiary: E-Commerce Ecosystem */}
          <div className="bento-card p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div 
                onClick={() => openProjectModal(projects[3])}
                className="md:col-span-5 relative rounded-lg overflow-hidden cursor-pointer aspect-[16/10] bg-black border border-[var(--border-subtle)]"
              >
                <img
                  src="/covers/ecommerce.png"
                  alt="E-Commerce Ecosystem"
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

      {/* Project Deep-Dive Modal - Clean, sharp 16px borders, 0 blur glow */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] p-5 sm:p-7 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-md flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-body)] hover:text-white transition-colors z-20"
              >
                <X size={15} />
              </button>

              {/* Modal Header */}
              <div className="mb-5 pr-8">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2 inline-block">
                  {selectedProject.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-sky-400 font-medium mt-0.5">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Screenshot Preview Showcase */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-5">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-black border border-[var(--border-subtle)] mb-2.5">
                    <img
                      src={selectedProject.images[activeModalImageIdx]}
                      alt={`${selectedProject.title} screenshot`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Thumbnail Row */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={img}
                          onClick={() => setActiveModalImageIdx(idx)}
                          className={`w-14 h-10 rounded-md overflow-hidden border transition-colors flex-shrink-0 ${
                            activeModalImageIdx === idx 
                              ? 'border-sky-400' 
                              : 'border-[var(--border-default)] opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Features List */}
              <div className="space-y-3 mb-5">
                <h4 className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  Features & Engineering Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-[var(--text-body)]">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-6 pt-3 border-t border-[var(--border-subtle)]">
                <h4 className="text-[11px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-[var(--border-subtle)]">
                  {selectedProject.links.map((link) => {
                    const Icon = link.icon || ExternalLink;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-action text-xs"
                      >
                        <Icon size={14} />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
