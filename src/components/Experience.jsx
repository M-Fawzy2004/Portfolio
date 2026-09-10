import { 
  Calendar, 
} from 'lucide-react';
import { FlutterIcon } from './TechIcons';

const experiences = [
  {
    role: 'Flutter Developer',
    company: 'TRADE BOX',
    type: 'Freelance • Remote',
    period: 'Jan 2026 - Apr 2026',
    status: 'Completed Milestone',
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
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Commercial Experience
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Professional development shipping production mobile features.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bento-card p-5 sm:p-7 border border-[var(--border-default)]"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <FlutterIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-bold text-sky-400">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-[var(--text-muted)]">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)] flex items-center gap-1">
                    <Calendar size={12} className="text-sky-400" />
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-medium text-emerald-400">
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                {exp.summary}
              </p>

              {/* Impact Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {exp.impacts.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-[var(--text-primary)]">
                        {item.title}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 flex-shrink-0">
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
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}