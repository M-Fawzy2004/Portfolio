import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon,
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
      "Flutter",
      "Dart",
      "Supabase",
      "Gemini AI",
      "Clean Architecture",
      "BLoC State Management",
    ],
    icon: AcademicCapIcon,
    color: "from-cyan-500/20 to-violet-500/20",
    links: [],
    confidential: true,
  },
  {
    title: "Full-Stack E-Commerce Ecosystem",
    subtitle: "Mobile App + Web Admin Dashboard",
    tags: [
      "Flutter",
      "Supabase",
      "Paymob",
      "Google Maps",
      "Clean Architecture",
    ],
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
      "Flutter",
      "Dart",
      "Supabase (Auth, PostgreSQL, Storage)",
      "Paymob",
      "Google Maps",
      "GoRouter",
      "Clean Architecture",
      "BLoC",
    ],
    icon: GlobeAltIcon,
    color: "from-teal-500/20 to-cyan-500/20",
    links: [
      {
        label: "Mobile Source",
        url: "https://github.com/M-Fawzy2004/Ecommerce",
      },
      {
        label: "Web Dashboard Source",
        url: "https://github.com/M-Fawzy2004/Dashboard_Ecommerce",
      },
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
      "Flutter",
      "Dart",
      "Supabase",
      "RESTful API",
      "Dio",
      "Clean Architecture",
      "BLoC State Management",
    ],
    icon: ShoppingBagIcon,
    color: "from-fuchsia-500/20 to-pink-500/20",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/M-Fawzy2004/ShopApp",
      },
    ],
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
      "Flutter & Dart",
      "RESTful APIs",
      "BLoC / Provider",
      "Dio (Pagination & Handling)",
    ],
    icon: BookOpenIcon,
    color: "from-amber-500/20 to-orange-500/20",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/M-Fawzy2004/Book-App",
      },
    ],
  },
  {
    title: "Chat App \u2013 Firebase & Flutter",
    subtitle: "Solo Project",
    tags: [
      "Flutter & Dart",
      "Firebase Auth",
      "Firestore",
      "BLoC/Provider",
      "Image Picker",
    ],
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
      "Flutter & Dart",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "BLoC / Provider",
      "Image Picker",
      "Cached Network Image",
    ],
    icon: ChatBubbleLeftRightIcon,
    color: "from-emerald-500/20 to-green-500/20",
    links: [
      {
        label: "View Repository",
        url: "https://github.com/M-Fawzy2004/Chat-App",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

function TagBadge({ tag }) {
  return (
    <span className="px-3 py-1 text-[10px] font-medium rounded-[8px] bg-white/[0.03] text-gray-500 border border-white/[0.04] whitespace-nowrap">
      {tag}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  const Icon = project.icon;
  const visibleTags = project.tags.slice(0, 3);
  const extraCount = project.tags.length - 3;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={modalVariants}
        className="relative w-full max-w-2xl rounded-[32px] bg-[#0D0E12] border border-white/[0.06] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/[0.04]"
        >
          <XMarkIcon className="w-5 h-5 text-gray-500" />
        </button>

        <div className={`inline-flex p-3 rounded-[16px] ${project.color} mb-5`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {visibleTags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
          {extraCount > 0 && (
            <span className="px-3 py-1 text-[10px] font-medium rounded-[8px] bg-white/[0.03] text-gray-400 border border-white/[0.04] whitespace-nowrap">
              +{extraCount} more
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6] mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-600 mb-5">{project.subtitle}</p>

        <div className="rounded-[20px] p-5 mb-5 bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-white/40" />
            <span className="text-sm font-semibold text-white/70">
              Key Features
            </span>
          </div>
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-[#94A3B8] leading-relaxed"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          {project.note && (
            <p className="mt-3 text-xs text-cyan-400/60 italic">
              {project.note}
            </p>
          )}
        </div>

        <div className="rounded-[20px] p-5 mb-6 bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-2 mb-3">
            <CpuChipIcon className="w-4 h-4 text-white/40" />
            <span className="text-sm font-semibold text-white/70">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[11px] font-medium rounded-[8px] bg-white/[0.03] text-[#94A3B8] border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.confidential ? (
          <div className="flex items-start gap-3 rounded-[20px] p-5 border border-amber-500/10 bg-amber-500/[0.02]">
            <ShieldCheckIcon className="w-5 h-5 text-amber-400/60 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-400/60 leading-relaxed">
              Commercial Confidential Repository
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                {link.label}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
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
    if (guardExpiry.current) clearTimeout(guardExpiry.current)
    guardExpiry.current = setTimeout(() => {
      unlockNavigation();
      guardExpiry.current = null;
    }, 600);
    setSelected(project);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px]"
          style={{ animation: "float-glow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-violet-500/5 blur-[120px]"
          style={{
            animation: "float-glow 12s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/3 blur-[100px]"
          style={{
            animation: "float-glow 10s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-white/40 bg-white/[0.03] rounded-full mb-4 border border-white/[0.04]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F4F6] mb-3">
            Featured Projects
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            Premium applications built with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const visibleTags = project.tags.slice(0, 3);
            const extraCount = project.tags.length - 3;

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                onClick={(e) => handleCardClick(e, project)}
                className="group relative rounded-[32px] bg-[#0D0E15]/60 border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.15] hover:scale-[1.02] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
                </div>

                <div className="overflow-hidden rounded-t-[32px]">
                  <motion.div
                    className="relative h-36 sm:h-40"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-3.5 rounded-[16px] bg-black/30 backdrop-blur-md border border-white/[0.08]">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="relative p-5 sm:p-7 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {visibleTags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                    {extraCount > 0 && (
                      <span className="px-3 py-1 text-[10px] font-medium rounded-[8px] bg-white/[0.03] text-gray-400 border border-white/[0.04] whitespace-nowrap">
                        +{extraCount} more
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F4F4F6] mb-1 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-xs text-gray-600 group-hover:text-white/50 transition-colors duration-300">
                      Click to explore
                    </span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-600 group-hover:text-white/40 transition-colors duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/[0.03] pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
