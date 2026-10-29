import { 
  Code2, 
  CheckCircle, 
  Layers, 
  ShieldCheck,
  Zap,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { FlutterIcon } from './TechIcons';

const metrics = [
  { label: 'Commercial Experience', value: '+1 Year', sub: 'Production Flutter Apps' },
  { label: 'Published Stores', value: '2 Stores', sub: 'Apple App Store & Play Store' },
  { label: 'Largest Codebase', value: '25+ Screens', sub: 'Academia AI Platform' },
  { label: 'UI Frame Rate', value: '60 FPS', sub: 'Zero Jank Optimization' },
];

const engineeringPillars = [
  {
    title: 'Clean Architecture & BLoC',
    desc: 'Strict isolation of concerns across Presentation, Domain (Entities & Use Cases), and Data layers. Modular, testable, and refactor-safe.',
    icon: Layers,
    accent: '#38BDF8',
  },
  {
    title: 'Offline-First & Caching',
    desc: 'Local database caching with SQLite, Dio HTTP interceptors, automatic token refresh pipelines, and instant offline network recovery.',
    icon: ShieldCheck,
    accent: '#10B981',
  },
  {
    title: 'AI & Cloud APIs',
    desc: 'Multi-modal workflows with Google Gemini 1.5, PDF document extraction, Supabase PostgreSQL, and Row-Level Security policies.',
    icon: Sparkles,
    accent: '#38BDF8',
  },
  {
    title: 'Hardware & Native APIs',
    desc: 'Mapbox GPS walking navigation, turn-by-turn routing, device camera permissions, and Paymob payment gateway integration.',
    icon: Zap,
    accent: '#F59E0B',
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Engineering Standards & Technical Philosophy
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Focusing on clean, scalable, and fluid cross-platform mobile systems for iOS and Android.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Main Story Card */}
          <div className="md:col-span-8 bento-card p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0 border border-sky-500/20">
                  <FlutterIcon size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Mohamed Fawzy
                  </h3>
                  <span className="text-xs text-sky-400 font-mono">
                    B.Sc. in Information Systems • Tanta University (GPA 3.3 • Distinction)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                I am a <strong>Junior Flutter Developer with +1 year of commercial experience</strong> engineering and shipping cross-platform mobile systems. My engineering foundation is anchored in <strong className="text-cyan-accent font-semibold">Clean Architecture</strong> and <strong className="text-cyan-accent font-semibold">BLoC / Cubit</strong> state machines, preventing technical debt and making codebases modular and easy to scale.
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                I have hands-on experience shipping production mobile systems, including <strong className="text-[var(--text-primary)]">DocMate</strong> (live healthcare booking platform on the Google Play Store & Apple App Store with Supabase RPC queue engine), <strong className="text-[var(--text-primary)]">Academia AI</strong> (25+ screens, Google Gemini 1.5 multi-modal study workflows), <strong className="text-[var(--text-primary)]">ParkMate</strong> (Mapbox GPS routing), and commercial e-commerce applications.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 mt-5 border-t border-[var(--border-subtle)]">
              {metrics.map((m) => (
                <div key={m.label} className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-sky-400 truncate">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] truncate">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Rules Card */}
          <div className="md:col-span-4 bento-card p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
                  <Code2 size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  Core Engineering Practices
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-[var(--text-body)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture:</strong> Presentation, Domain (pure business logic), and Data layers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Predictable State:</strong> Stream-based BLoC / Cubit event transitions without side effects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Offline Resilience:</strong> SQLite local caching, Dio interceptors, and network recovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Bilingual RTL/LTR:</strong> Full native Arabic and English bidirectional layouts.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-muted)] font-mono">
              <GraduationCap size={13} className="text-sky-400 flex-shrink-0" />
              <span>Expanding actively into React Native & Java.</span>
            </div>
          </div>

          {/* 4 Pillars Cards */}
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="md:col-span-3 bento-card p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-sky-500/10 text-sky-400 border border-sky-500/20"
                  >
                    <Icon size={16} />
                  </div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-body)] leading-relaxed">
                    {pillar.desc}
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
