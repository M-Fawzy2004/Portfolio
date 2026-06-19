import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon,
  TruckIcon,
  XMarkIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { lockNavigation, unlockNavigation } from "../lib/clickGuard";

const projects = [
  {
    title: "Academia AI",
    subtitle: "Solo Project",
    tags: ["Flutter", "Supabase", "Gemini AI", "Clean Architecture"],
    description:
      "Production-ready educational platform with 25+ screens, advanced Gemini AI workflows, PDF summarization, and offline caching.",
    features: [
      "Production-ready advanced educational platform featuring over 25+ pristine screens",
      "Integrates complex Google Gemini AI workflows including automated personalized study plan generation",
      "Full PDF document summarization directly within the application",
      "Dynamic quiz creation and interactive AI chat assistant",
      "Image-based input processing for versatile AI interactions",
      "Built with dual-language localization (AR/EN), dynamic multi-theme support, and robust offline data caching with advanced error handling",
    ],
    techStack: [
      "Flutter", "Dart", "Supabase", "Gemini AI", "Clean Architecture", "BLoC State Management",
    ],
    images: ["/academia/1.png", "/academia/2.png", "/academia/3.png", "/academia/4.png"],
    icon: AcademicCapIcon,
    color: "from-cyan-500/20 to-violet-500/20",
    links: [],
    confidential: true,
  },
  {
    title: "KidDrive \u2013 Child Transportation App",
    subtitle: "Graduation Project (B.Sc. Information Systems)",
    tags: ["Flutter", "REST APIs", "BLoC/Cubit", "Clean Architecture", "Retrofit", "Role-Based Auth"],
    description:
      "A comprehensive dual-interface graduation project connecting parents and school drivers through a real-time child transportation management system with role-based dashboards, live tracking, and full bilingual support.",
    features: [
      "Designed and built as the capstone graduation project for B.Sc. in Information Systems at Tanta University",
      "Dual-interface architecture delivering two fully separate experiences \u2014 Parent App and Driver Dashboard \u2014 within a single Flutter codebase using role-based route guards and authentication",
      "Implemented complete authentication lifecycle: user registration, login, OTP phone verification, email verification, and forgot password recovery flow",
      "Developed polished onboarding experience with animated splash screen, app initialization sequences, and guided introduction screens",
      "Built comprehensive Parent dashboard featuring real-time driver details view, active trip status, and a floating bottom navigation bar for quick access between sections",
      "Created full child management module allowing parents to add, edit, view, and manage multiple child profiles with personal info and associated metadata",
      "Integrated subscription management system with dedicated data models, API service layer, and UI for browsing and managing child subscriptions",
      "Developed complete Trips module with dedicated list/detail pages, custom widgets, and deep-linked routing across the parent and driver flows",
      "Built real-time Chat module with full UI组件, conversation list, and message routing for parent-driver communication",
      "Implemented Driver profile screens with sub-pages for personal info, vehicle details, earnings overview, and localization-aware formatting",
      "Added Families Management feature to the Driver dashboard enabling drivers to view and manage their assigned families and children",
      "Integrated RESTful APIs via Retrofit with repository pattern for clean data layer abstraction, secure token storage, and error handling",
      "Applied BLoC/Cubit state management pattern consistently across all driver dashboard pages ensuring predictable state and testability",
      "Implemented full Arabic/English localization throughout both interfaces including RTL layout adjustments and localized date/number formatting",
      "Added skeleton loading shimmer effects across all data-fetching screens for smooth perceived performance and polished UX",
    ],
    techStack: [
      "Flutter & Dart", "RESTful APIs (Retrofit)", "BLoC / Cubit", "Clean Architecture", "Repository Pattern", "Secure Storage", "GoRouter", "RTL Localization (AR/EN)", "Skeletonizer",
    ],
    icon: TruckIcon,
    color: "from-blue-500/20 to-indigo-500/20",
    links: [{ label: "View Repository", url: "https://github.com/M-Fawzy2004/KidDrive" }],
  },
  {
    title: "Full-Stack E-Commerce Ecosystem",
    subtitle: "Mobile App + Web Admin Dashboard",
    tags: ["Flutter", "Supabase", "Paymob", "Google Maps", "Clean Architecture"],
    description:
      "High-performance Flutter mobile app with cart, tracking, and payment gateways, backed by a real-time web management CRUD dashboard.",
    features: [
      "Complete dual-system commercial solution including a high-performance Flutter Mobile App",
      "Multi-criteria product search, a persistent shopping cart, and seamless checkout flow",
      "Embedded Google Maps real-time package delivery tracking",
      "Live Paymob payment gateway integration for secure transactions",
      "Comprehensive Web Admin Dashboard implementing full product CRUD capabilities, real-time order management, category management, and review moderation workflows",
    ],
    techStack: [
      "Flutter", "Dart", "Supabase (Auth, PostgreSQL, Storage)", "Paymob", "Google Maps", "GoRouter", "Clean Architecture", "BLoC",
    ],
    imageGroups: [
      { label: "Web Dashboard", fit: "contain", images: ["/dash_web/w1-front.png", "/dash_web/w2-front.png", "/dash_web/w3-front.png", "/dash_web/w4-front.png", "/dash_web/w5-front.png", "/dash_web/w6-front.png", "/dash_web/w7-front.png", "/dash_web/w8-front.png"] },
      { label: "Mobile App", images: ["/shop_mobile/1.png", "/shop_mobile/2.png", "/shop_mobile/3.png", "/shop_mobile/4.png", "/shop_mobile/5.png"] },
    ],
    icon: GlobeAltIcon,
    color: "from-teal-500/20 to-cyan-500/20",
    links: [
      { label: "Mobile Source", url: "https://github.com/M-Fawzy2004/Ecommerce" },
      { label: "Web Dashboard Source", url: "https://github.com/M-Fawzy2004/Dashboard_Ecommerce" },
    ],
  },
  {
    title: "Shop App - E-Commerce",
    subtitle: "Solo Project",
    tags: ["Flutter", "Supabase", "RESTful API", "Dio", "Clean Architecture"],
    description:
      "Lightweight e-commerce mobile app featuring dynamic product listings, advanced category filtering, and efficient data pagination using Dio.",
    features: [
      "Lightweight e-commerce mobile application featuring dynamic product listings and advanced category filtering",
      "Efficient client-side data pagination using Dio and RESTful APIs to flawlessly pull heavy catalogs",
      "Seamless order-to-delivery workflow mapped directly with a solid Supabase backend system",
      "Real-time tracking mechanisms for order lifecycle management",
    ],
    techStack: [
      "Flutter", "Dart", "Supabase", "RESTful API", "Dio", "Clean Architecture", "BLoC State Management",
    ],
    images: ["/shop/shop_1.png", "/shop/shop_2.png", "/shop/shop_3.png"],
    icon: ShoppingBagIcon,
    color: "from-fuchsia-500/20 to-pink-500/20",
    links: [{ label: "View Repository", url: "https://github.com/M-Fawzy2004/ShopApp" }],
  },
  {
    title: "Book App \u2013 Free Book Browser",
    subtitle: "Solo Project",
    tags: ["Flutter & Dart", "RESTful APIs", "BLoC/Provider", "Pagination"],
    description:
      "A mobile application allowing users to browse and discover free books with advanced search, efficient list pagination, and seamless loading.",
    features: [
      "Allows users to browse and discover free books with a built-in custom list pagination system to efficiently load large book catalogs",
      "Includes advanced search functionality supporting dynamic querying by title or author",
      "Smooth loading indicators for optimized UX",
      "Comprehensive detailed book information views",
    ],
    note: "Demo videos demonstrating the full UI flow and application functionality are hosted on TikTok.",
    techStack: [
      "Flutter & Dart", "RESTful APIs", "BLoC / Provider", "Dio (Pagination & Handling)",
    ],
    images: ["/book/1.png", "/book/2.png"],
    icon: BookOpenIcon,
    color: "from-amber-500/20 to-orange-500/20",
    links: [{ label: "View Repository", url: "https://github.com/M-Fawzy2004/Book-App" }],
  },
  {
    title: "Chat App \u2013 Firebase & Flutter",
    subtitle: "Solo Project",
    tags: ["Flutter & Dart", "Firebase Auth", "Firestore", "BLoC/Provider", "Image Picker"],
    description:
      "A real-time 1-on-1 chat app supporting text/media sharing, dynamic theme switching, and secure auth pathways.",
    features: [
      "Real-time 1-on-1 chat infrastructure utilizing Firebase Firestore (real-time database) and Firebase Storage for optimized media handling",
      "Supports secure authentication with Firebase (Google Sign-In, Email & Password)",
      "Seamless one-to-one messaging with full text and media support (sending images directly from camera or gallery via Image Picker)",
      "Features a custom welcome screen and interactive onboarding flows before login",
      "Dynamic Dark / Light mode toggle for personalized user experience",
    ],
    techStack: [
      "Flutter & Dart", "Firebase Authentication", "Firestore", "Firebase Storage", "BLoC / Provider", "Image Picker", "Cached Network Image",
    ],
    images: ["/chat/chat_1.png", "/chat/chat_2.png"],
    icon: ChatBubbleLeftRightIcon,
    color: "from-emerald-500/20 to-green-500/20",
    links: [{ label: "View Repository", url: "https://github.com/M-Fawzy2004/Chat-App" }],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3, ease: "easeInOut" } },
};

function TagBadge({ tag, style: extraStyle = {} }) {
  return (
    <span className="badge" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--text-muted)', border: '1px solid var(--badge-border)', padding: '0.25rem 0.625rem', fontSize: 'clamp(0.55rem, 1.4vw, 0.625rem)', fontWeight: 500, borderRadius: 8, ...extraStyle }}>
      {tag}
    </span>
  );
}

function ImageGallery({ images, fit = 'cover', compact }) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const handleThumbnailClick = (i) => {
    setActive(i);
    scrollRef.current?.children[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const isContain = fit === 'contain';

  return (
    <div>
      <div className="position-relative overflow-hidden rounded-3 d-flex align-items-center justify-content-center" style={{ aspectRatio: compact ? '16 / 9' : isContain ? '4 / 3' : '16 / 10', maxHeight: compact ? '16rem' : isContain ? '28rem' : undefined, backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active]}
            alt={`Screenshot ${active + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={isContain ? 'w-100 h-100' : 'position-absolute w-100 h-100'}
            style={{ objectFit: fit, objectPosition: 'top' }}
          />
        </AnimatePresence>
        <div className="position-absolute bottom-0 end-0 mb-2 me-2 px-2 py-1 rounded-pill" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', fontSize: 'clamp(0.5rem, 1.2vw, 0.6rem)', color: '#fff' }}>
          {active + 1} / {images.length}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="d-flex gap-1 overflow-auto mt-2"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'thin' }}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => handleThumbnailClick(i)}
            className="border-0 p-0 flex-shrink-0 overflow-hidden rounded-2"
            style={{
              width: compact ? 56 : 72,
              height: compact ? 36 : 48,
              cursor: 'pointer',
              scrollSnapAlign: 'start',
              opacity: i === active ? 1 : 0.45,
              border: i === active ? '2px solid var(--accent, #22D3EE)' : '2px solid transparent',
              transition: 'all 0.25s ease',
              outline: 'none',
            }}
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              className="w-100 h-100"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ImageGroupGallery({ groups }) {
  return (
    <div className="d-flex flex-column gap-4 mb-4">
      {groups.map((group) => (
        <div key={group.label}>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="d-inline-block rounded-circle" style={{ width: 6, height: 6, backgroundColor: '#22D3EE' }} />
            <span className="fw-semibold" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-secondary)' }}>{group.label}</span>
          </div>
          <ImageGallery images={group.images} fit={group.fit} compact />
        </div>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const Icon = project.icon;
  const visibleTags = project.tags.slice(0, 3);
  const extraCount = project.tags.length - 3;
  const hasGallery = useMemo(() => project.images?.length > 0, [project.images]);
  const hasGroupGallery = useMemo(() => project.imageGroups?.length > 0, [project.imageGroups]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 100, backgroundColor: 'var(--overlay-bg)', backdropFilter: 'blur(8px)' }}
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={modalVariants}
        className="position-relative border overflow-auto modal-mobile-compact"
        style={{
          width: '100%',
          maxWidth: '42rem',
          maxHeight: '90vh',
          borderRadius: 32,
          backgroundColor: 'var(--bg-elevated)',
          borderColor: 'var(--border-default)',
          padding: '2.5rem 2rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        }}
      >
        <button
          onClick={onClose}
          className="position-absolute border-0 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            top: '1.5rem', right: '1.5rem', width: 36, height: 36,
            backgroundColor: 'var(--btn-outline-bg)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          <XMarkIcon style={{ width: 20, height: 20 }} />
        </button>

        <div className={`d-inline-flex p-3 rounded-3 mb-4`} style={{ background: `linear-gradient(135deg, ${project.color})` }}>
          <Icon style={{ width: 24, height: 24, color: '#fff' }} />
        </div>

        <div className="d-flex flex-wrap gap-1 mb-3">
          {visibleTags.map((tag) => <TagBadge key={tag} tag={tag} />)}
          {extraCount > 0 && (
            <span className="badge" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--text-muted)', border: '1px solid var(--badge-border)', padding: '0.25rem 0.625rem', fontSize: '0.625rem', fontWeight: 500, borderRadius: 8 }}>
              +{extraCount} more
            </span>
          )}
        </div>

        <h3 className="fw-bold mb-1" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', color: 'var(--text-primary)' }}>{project.title}</h3>
        <p className="mb-4" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)' }}>{project.subtitle}</p>

        {hasGroupGallery && <ImageGroupGallery groups={project.imageGroups} />}
        {!hasGroupGallery && hasGallery && <ImageGallery images={project.images} fit={project.imageFit} />}

        <div className="p-4 mb-4 rounded-4 border" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-default)' }}>
          <div className="d-flex align-items-center gap-2 mb-3">
            <SparklesIcon style={{ width: 16, height: 16, color: 'var(--text-muted)' }} />
            <span className="fw-semibold" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-secondary)' }}>Key Features</span>
          </div>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {project.features.map((feature, i) => (
              <li key={i} className="d-flex align-items-start gap-2" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'var(--text-body)', lineHeight: 1.6 }}>
                <span className="flex-shrink-0 rounded-circle d-inline-block mt-1" style={{ width: 4, height: 4, backgroundColor: 'var(--text-muted)' }} />
                {feature}
              </li>
            ))}
          </ul>
          {project.note && (
            <p className="mt-3 mb-0" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'rgba(34,211,238,0.6)', fontStyle: 'italic' }}>{project.note}</p>
          )}
        </div>

        <div className="p-4 mb-4 rounded-4 border" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-default)' }}>
          <div className="d-flex align-items-center gap-2 mb-3">
            <CpuChipIcon style={{ width: 16, height: 16, color: 'var(--text-muted)' }} />
            <span className="fw-semibold" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-secondary)' }}>Tech Stack</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="badge" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--text-body)', border: '1px solid var(--badge-border)', padding: '0.375rem 0.75rem', fontSize: 'clamp(0.6rem, 1.5vw, 0.6875rem)', fontWeight: 500, borderRadius: 8 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.confidential ? (
          <div className="d-flex align-items-start gap-3 p-4 rounded-4 border" style={{ borderColor: 'rgba(251,191,36,0.1)', backgroundColor: 'rgba(251,191,36,0.02)' }}>
            <ShieldCheckIcon className="flex-shrink-0" style={{ width: 20, height: 20, color: 'rgba(251,191,36,0.6)', marginTop: 2 }} />
            <p className="mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'rgba(251,191,36,0.6)' }}>Commercial Confidential Repository</p>
          </div>
        ) : (
          <div className="d-flex flex-wrap gap-3">
            {project.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill text-decoration-none border"
                style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', fontWeight: 500, color: 'var(--btn-outline-text)', backgroundColor: 'var(--btn-outline-bg)', borderColor: 'var(--btn-outline-border)', transition: 'all 0.3s' }}
              >
                {link.label}
                <ArrowTopRightOnSquareIcon style={{ width: 16, height: 16 }} />
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const guardExpiry = useRef(null);

  const handleCardClick = (e, project) => {
    e.stopPropagation();
    e.preventDefault();
    lockNavigation();
    if (guardExpiry.current) clearTimeout(guardExpiry.current);
    guardExpiry.current = setTimeout(() => {
      unlockNavigation();
      guardExpiry.current = null;
    }, 600);
    setSelected(project);
  };

  return (
    <section id="projects" className="section-padding position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none">
        <div className="position-absolute rounded-circle" style={{ top: 80, left: 40, width: 288, height: 288, backgroundColor: 'rgba(34,211,238,0.05)', filter: 'blur(120px)', animation: 'float-glow 8s ease-in-out infinite' }} />
        <div className="position-absolute rounded-circle" style={{ bottom: 160, right: 40, width: 384, height: 384, backgroundColor: 'rgba(139,92,246,0.05)', filter: 'blur(120px)', animation: 'float-glow 12s ease-in-out infinite', animationDelay: '2s' }} />
      </div>

      <div className="max-container position-relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)', backgroundColor: 'var(--badge-bg)', borderColor: 'var(--badge-border)' }}>
            Portfolio
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Featured Projects</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            Premium applications built with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="row g-4"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const visibleTags = project.tags.slice(0, 3);
            const extraCount = project.tags.length - 3;

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="col-12 col-md-6"
              >
                <div
                  onClick={(e) => handleCardClick(e, project)}
                  className="card border-0 h-100"
                  style={{ borderRadius: 32, cursor: 'pointer', transition: 'all 0.5s' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-8px)';
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <div className="overflow-hidden" style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: '10rem', background: `linear-gradient(135deg, ${project.color})` }}>
                      <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '100%', background: 'linear-gradient(0deg, var(--bg-primary), transparent)' }} />
                      <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Icon style={{ width: 32, height: 32, color: '#fff' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex flex-wrap gap-1 mb-2">
                      {visibleTags.map((tag) => <TagBadge key={tag} tag={tag} />)}
                      {extraCount > 0 && (
                        <span className="badge" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--text-muted)', border: '1px solid var(--badge-border)', padding: '0.25rem 0.625rem', fontSize: '0.625rem', fontWeight: 500, borderRadius: 8 }}>
                          +{extraCount} more
                        </span>
                      )}
                    </div>

                    <h3 className="fw-bold mb-1" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', color: 'var(--text-primary)' }}>{project.title}</h3>
                    <p className="mb-2" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)' }}>{project.subtitle}</p>
                    <p className="flex-grow-1 mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-body)', lineHeight: 1.6 }}>{project.description}</p>

                    <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top" style={{ borderTopColor: 'var(--border-default)' }}>
                      <span style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)' }}>Click to explore</span>
                      <ArrowTopRightOnSquareIcon style={{ width: 16, height: 16, color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
