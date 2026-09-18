import { 
  Calendar, 
  Sparkles,
  Activity,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { FlutterIcon } from './TechIcons';
import CuraCareShowcase from './CuraCareShowcase';

const experiences = [
  {
    id: 'curacare',
    role: 'Junior Flutter Developer',
    company: 'CuraCare',
    platform: 'Mobile Healthcare Platform & Clinic Dashboard',
    type: 'Commercial • Remote',
    period: 'Aug 2026 - Present',
    status: 'Current Role • Active Production',
    isCurrent: true,
    summary: 'Developed a production-ready healthcare application connecting patients with clinics, along with a dedicated React web dashboard to govern medical verifications and billing operations.',
    impacts: [
      {
        title: 'Dynamic Booking & Live Queue System',
        desc: 'Built an appointment scheduling engine supporting cancellations, reschedulings, and real-time waiting slot calculations. Used Supabase RPCs on the backend to prevent conflicting bookings and enforce doctor clinic hours.',
        tag: 'Supabase RPCs & Queue',
        icon: Activity,
      },
      {
        title: 'Doctor Onboarding & Security',
        desc: 'Implemented role-based authentication separating Patient and Doctor interfaces with document verification uploads and subscription tier controls.',
        tag: 'Role Auth & Verification',
        icon: ShieldCheck,
      },
      {
        title: 'Web Operations Dashboard (React)',
        desc: 'Built an administrative web portal to review doctor license requests, verify manual payments, and toggle account activation securely with Supabase Row-Level Security (RLS) policies.',
        tag: 'React & Supabase RLS',
        icon: Layers,
      },
      {
        title: 'Production-Grade Architecture',
        desc: 'Structured the mobile codebase using Clean Architecture and BLoC for scalable state management. Added full offline-first data caching and Arabic/English localization without relying on mock data.',
        tag: 'Clean Arch & Offline',
        icon: Smartphone,
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'BLoC / Cubit',
      'Supabase',
      'PostgreSQL',
      'React',
      'RESTful APIs',
      'Row-Level Security (RLS)',
      'Clean Architecture',
      'Offline Caching'
    ],
    hasShowcase: true,
  },
  {
    id: 'tradebox',
    role: 'Flutter Developer',
    company: 'TRADE BOX',
    platform: 'Cryptocurrency Mobile Exchange Platform',
    type: 'Freelance • Remote',
    period: 'Jan 2026 - Apr 2026',
    status: 'Completed Milestone',
    isCurrent: false,
    summary: 'Spearheaded architectural refactoring and developed commercial features for a cryptocurrency mobile platform.',
    impacts: [
      {
        title: 'Authentication & Onboarding (10+ Screens)',
        desc: 'Engineered full authentication lifecycle including OTP verification, email recovery, and onboarding with Clean Architecture and Dio.',
        tag: 'Clean Architecture',
      },
      {
        title: 'BLoC Codebase Modernization',
        desc: 'Refactored tightly coupled legacy modules into loosely coupled Domain Use Cases and BLoC state streams for high testability.',
        tag: 'BLoC Refactoring',
      },
      {
        title: 'Real-Time Price Tickers',
        desc: 'Integrated live websocket price feeds with throttled widget rebuilds to maintain fluid 60 FPS performance without frame drops.',
        tag: '60 FPS Optimization',
      },
      {
        title: 'Cross-Platform UI Alignment',
        desc: 'Ensured pixel-identical rendering and native gesture responses across both Android and iOS devices.',
        tag: 'Cross-Platform',
      },
    ],
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'Dio', 'BLoC / Cubit', 'WebSockets', 'Secure Storage'],
    hasShowcase: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Commercial Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Professional Experience
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Production mobile systems and scalable architectures delivered in commercial roles.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`bento-card p-5 sm:p-7 border transition-all duration-300 ${
                exp.isCurrent 
                  ? 'border-sky-500/30 ring-1 ring-sky-500/20 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]' 
                  : 'border-[var(--border-default)]'
              }`}
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.isCurrent ? 'bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30' : 'bg-sky-500/10 text-sky-400'
                  }`}>
                    <FlutterIcon size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-sky-400">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-[var(--text-secondary)]">{exp.platform}</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="text-xs text-[var(--text-muted)]">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)] flex items-center gap-1.5">
                    <Calendar size={12} className="text-sky-400" />
                    {exp.period}
                  </span>
                  
                  {exp.isCurrent ? (
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{exp.status}</span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-medium text-slate-400">
                      {exp.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Summary / Impact & Scope */}
              <div className="mb-5">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles size={11} className="text-sky-400" />
                  <span>Project Impact & Scope</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Impact Points Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {exp.impacts.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-[var(--text-primary)]">
                        {item.title}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-body)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-3.5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Mobile Showcase Component for CuraCare */}
              {exp.hasShowcase && <CuraCareShowcase />}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}