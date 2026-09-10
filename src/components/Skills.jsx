import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';
import {
  FlutterIcon,
  DartIcon,
  FirebaseIcon,
  SupabaseIcon,
  GeminiIcon,
  AndroidIcon,
  AppleIcon,
  BlocIcon,
  MapboxIcon,
  PaymobIcon,
  DioIcon,
  CleanArchIcon,
  FigmaIcon,
  GitIcon,
  PostmanIcon,
  GooglePlayIcon,
} from './TechIcons';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'mobile', label: 'Mobile & Core' },
  { id: 'architecture', label: 'Architecture & State' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'ai-tools', label: 'AI, Hardware & Tools' },
];

const skillsList = [
  // Mobile Core
  { name: 'Flutter', category: 'mobile', icon: FlutterIcon, level: '2 Yrs Production', note: 'Cross-platform iOS & Android, 60 FPS UI' },
  { name: 'Dart', category: 'mobile', icon: DartIcon, level: 'Advanced', note: 'Async programming, streams, null-safety' },
  { name: 'Android', category: 'mobile', icon: AndroidIcon, level: 'Native Integration', note: 'Manifest, permissions, Android Studio' },
  { name: 'iOS / Cupertino', category: 'mobile', icon: AppleIcon, level: 'Cross-Target', note: 'Cupertino widgets, iOS HIG styling' },
  { name: 'React Native', category: 'mobile', icon: Code2, level: 'Expanding', note: 'Component lifecycle, cross-framework synergy' },

  // Architecture & State
  { name: 'Clean Architecture', category: 'architecture', icon: CleanArchIcon, level: 'Core Standard', note: 'Presentation, Domain, Data separation' },
  { name: 'BLoC / Cubit', category: 'architecture', icon: BlocIcon, level: 'Expert', note: 'Predictable stream-based state machine' },
  { name: 'Provider / GetX', category: 'architecture', icon: Layers, level: 'Proficient', note: 'Scoped dependency injection & reactive binds' },
  { name: 'GoRouter & Deep Links', category: 'architecture', icon: Cpu, level: 'Advanced', note: 'Declarative routing, redirect guards' },
  { name: 'SOLID Principles', category: 'architecture', icon: CheckCircle2, level: 'Practiced', note: 'Dependency inversion, interface segregation' },

  // Backend & APIs
  { name: 'Supabase', category: 'backend', icon: SupabaseIcon, level: 'Production', note: 'PostgreSQL, Row-Level Security, Auth, Storage' },
  { name: 'Firebase', category: 'backend', icon: FirebaseIcon, level: 'Production', note: 'Firestore real-time DB, Auth, Cloud Storage' },
  { name: 'Dio & RESTful APIs', category: 'backend', icon: DioIcon, level: 'Advanced', note: 'Interceptors, caching headers, error mapping' },
  { name: 'SQLite / Cache', category: 'backend', icon: Database, level: 'Production', note: 'Local offline persistence & encrypted storage' },

  // AI, Hardware & Tools
  { name: 'Google Gemini AI', category: 'ai-tools', icon: GeminiIcon, level: 'Production', note: 'PDF summarization, automated quiz generation' },
  { name: 'Mapbox Navigation', category: 'ai-tools', icon: MapboxIcon, level: 'Production', note: 'Turn-by-turn routing, reverse geocoding' },
  { name: 'Paymob Integration', category: 'ai-tools', icon: PaymobIcon, level: 'Commercial', note: 'Payment cards, mobile wallets, callbacks' },
  { name: 'Git & GitHub', category: 'ai-tools', icon: GitIcon, level: 'Daily Workflow', note: 'Branching, PRs, version control' },
  { name: 'Postman', category: 'ai-tools', icon: PostmanIcon, level: 'Advanced', note: 'API contract testing & authentication' },
  { name: 'Figma', category: 'ai-tools', icon: FigmaIcon, level: 'Design-to-Code', note: 'Pixel-perfect mobile UI translation' },
  { name: 'Google Play Console', category: 'ai-tools', icon: GooglePlayIcon, level: 'Published Apps', note: 'App bundle signing, release tracks' },
];

const archLayers = [
  {
    layer: '1. Presentation Layer (UI & State)',
    tech: 'Flutter Widgets • BLoC / Cubit • Responsive Layouts',
    desc: 'Pure UI components that listen to immutable state streams emitted by BLoC. No business logic or direct API calls ever reside here.',
  },
  {
    layer: '2. Domain Layer (Pure Business Rules)',
    tech: 'UseCases • Entities • Repository Interfaces (Contracts)',
    desc: 'The heart of the application. 100% independent of any external packages or Flutter framework. Completely unit-testable.',
  },
  {
    layer: '3. Data Layer (Data Sources & Models)',
    tech: 'Dio HTTP • Supabase • SQLite Cache • DTO Mappers',
    desc: 'Implements repository interfaces. Orchestrates network requests, parses JSON into models, and handles offline database synchronization.',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArchLayer, setSelectedArchLayer] = useState(0);

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Skills, Architecture, & Tools
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            A focused cross-platform mobile engineering stack refined over 2 years of practical development.
          </p>
        </div>

        {/* Clean Architecture Visualizer - Clean, flat borders, NO shadow */}
        <div className="mb-12 bento-card p-5 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-1">
                <CleanArchIcon size={15} />
                <span>Architecture Blueprint</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Clean Architecture Implementation
              </h3>
            </div>
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Click layers to inspect responsibilities
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Layer Buttons */}
            <div className="lg:col-span-6 flex flex-col gap-2.5">
              {archLayers.map((layer, idx) => {
                const isSelected = selectedArchLayer === idx;
                return (
                  <button
                    key={layer.layer}
                    onClick={() => setSelectedArchLayer(idx)}
                    className={`text-left p-3.5 rounded-lg border transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[var(--bg-elevated)] border-sky-500'
                        : 'bg-[var(--bg-secondary)] border-[var(--border-default)] hover:border-[var(--border-hover)]'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-bold font-mono mb-0.5 ${isSelected ? 'text-sky-400' : 'text-[var(--text-primary)]'}`}>
                        {layer.layer}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        {layer.tech}
                      </div>
                    </div>
                    <ChevronRight 
                      size={16} 
                      className={isSelected ? 'text-sky-400' : 'text-slate-600'} 
                    />
                  </button>
                );
              })}
            </div>

            {/* Layer Detail */}
            <div className="lg:col-span-6 p-5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] min-h-[160px] flex flex-col justify-center">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 mb-1.5">
                LAYER RESPONSIBILITY
              </div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                {archLayers[selectedArchLayer].layer}
              </div>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                {archLayers[selectedArchLayer].desc}
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>Applied in Academia AI, ParkMate & Graduation Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills - Clean flat pills, NO glowing shadow */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#0284C7] text-white border border-[#0369A1]'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-body)] hover:text-white border border-[var(--border-default)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Flat, crisp borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bento-card p-3.5 sm:p-4 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-sky-500/10 text-sky-400">
                  <Icon size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)] flex-shrink-0">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-[11px] text-[var(--text-body)] line-clamp-2 leading-relaxed">
                    {skill.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}