import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Star,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Cpu,
  BookOpen
} from 'lucide-react';

const academicDisciplines = [
  {
    title: 'Data Structures & Algorithms',
    desc: 'Big-O complexity, optimized collections, graph traversal, and memory-efficient data representations.',
    icon: Cpu,
    tag: 'Core CS'
  },
  {
    title: 'Software Architecture & Design Patterns',
    desc: 'Clean Architecture, SOLID design principles, BLoC event-state machines, and testable domain boundaries.',
    icon: Layers,
    tag: 'Engineering'
  },
  {
    title: 'Database Systems & Relational Modeling',
    desc: 'PostgreSQL relational schemas, SQLite offline caches, SQL normalization, transactions, and indexing.',
    icon: Database,
    tag: 'Data Tier'
  },
  {
    title: 'System Analysis & Protocols',
    desc: 'RESTful API contracts, WebSocket live telemetry, Dio interceptors, and secure token lifecycle guards.',
    icon: Code2,
    tag: 'Networking'
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Academic Foundations & Honors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Education & Academic Degree
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Information systems engineering, algorithmic problem solving, and rigorous software architecture standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-6">
          
          {/* Main Degree Card (8 cols) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle ambient accent glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Four-Year University Degree
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award size={13} />
                  <span>Graduated with Distinction</span>
                </span>
              </div>

              {/* University & Degree Title */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] leading-tight">
                    Bachelor of Science in Information Systems
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-400 mt-1 flex items-center gap-1.5">
                    <BookOpen size={13} />
                    <span>Faculty of Computers and Information • Tanta University</span>
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[var(--text-muted)] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-sky-400" />
                      2022 – 2026
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-emerald-400" />
                      Tanta, Egypt
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">Class of 2026</span>
                  </div>
                </div>
              </div>

              {/* Academic Performance Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 pt-4 border-t border-[var(--border-subtle)]">
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">
                    3.3 / 4.0
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)] mt-0.5">
                    Cumulative GPA
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">
                    Distinction
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)] mt-0.5">
                    Academic Standing
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-extrabold text-sky-400 font-mono">
                    Grade A+
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)] mt-0.5">
                    Graduation Project
                  </div>
                </div>
              </div>

              {/* Academic Overview Description */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Completed an intensive four-year computer science and information systems curriculum centered on algorithmic problem solving, enterprise software design, database normalization, and distributed client-server systems.
              </p>
            </div>

            {/* Quick Core Skills */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                Key Competencies:
              </span>
              {['Algorithms', 'Data Structures', 'OOP & Design Patterns', 'Relational Databases', 'System Architecture'].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {s}
                </span>
              ))}
            </div>

          </div>

          {/* Capstone Honors Card (5 cols) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between border-amber-500/20 relative overflow-hidden bg-gradient-to-b from-amber-500/[0.03] to-transparent">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                  <Star size={13} className="text-amber-400 fill-amber-400/20" />
                  <span>Capstone Distinction</span>
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1.5">
                Dual-Interface School Transit & Real-Time Tracking Platform
              </h4>

              <p className="text-xs font-mono text-sky-400 mb-4">
                Parent Tracking Client + School Driver Fleet Console
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                Engineered a comprehensive dual-role transportation ecosystem within a unified, modular Flutter codebase governed by Clean Architecture and role-based route guards.
              </p>

              {/* Capstone Highlights Grid */}
              <div className="space-y-2.5 mb-5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                  <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Real-time Mapbox telemetry with live student pickup tracking</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                  <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Single Flutter codebase with strict role-guarded experiences</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                  <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Retrofit REST APIs & bilingual Arabic/English RTL localization</span>
                </div>
              </div>
            </div>

            {/* Link to project in portfolio */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                Completed with Academic Distinction
              </span>
              <a
                href="#projects"
                className="btn-secondary-action py-1.5 px-3 text-xs flex items-center gap-1.5 text-decoration-none"
              >
                <span>View in Projects</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

        </div>

        {/* Core Academic Disciplines (4 Cards Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {academicDisciplines.map((d) => {
            const Icon = d.icon;
            return (
              <div 
                key={d.title}
                className="bento-card p-4 sm:p-5 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)] uppercase">
                      {d.tag}
                    </span>
                  </div>

                  <h5 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                    {d.title}
                  </h5>

                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    {d.desc}
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
