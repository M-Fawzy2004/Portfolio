import { 
  Code2, 
  CheckCircle, 
  Layers, 
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';
import { FlutterIcon } from './TechIcons';

const metrics = [
  { label: 'Experience', value: '+1 Year', sub: 'Production Flutter' },
  { label: 'Shipped Screens', value: '25+', sub: 'Academia AI' },
  { label: 'Architecture', value: 'Clean Arch', sub: 'BLoC / Cubit' },
  { label: 'Performance', value: '60 FPS', sub: 'Low & High Tier Devices' },
];

const engineeringPillars = [
  {
    title: 'Clean Architecture & BLoC',
    desc: 'Separation of concerns across Presentation, Domain (Use Cases), and Data layers. Modular, maintainable, and predictable.',
    icon: Layers,
    color: '#38BDF8',
  },
  {
    title: 'Offline-First & Caching',
    desc: 'Local database caching with SQLite, Dio HTTP interceptors, token refresh flows, and real-time connectivity monitors.',
    icon: ShieldCheck,
    color: '#10B981',
  },
  {
    title: 'AI & Cloud APIs',
    desc: 'Multi-modal workflows with Google Gemini 1.5, document summarization, Supabase PostgreSQL, and Firebase cloud storage.',
    icon: Sparkles,
    color: '#38BDF8',
  },
  {
    title: 'Hardware & Native APIs',
    desc: 'Mapbox GPS turn-by-turn routing, device camera processing, reverse geocoding, and Paymob payment gateway integration.',
    icon: Zap,
    color: '#F59E0B',
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
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Junior Flutter Developer (+1 Year Experience)
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Focused on building clean, testable, and fluid native mobile applications for iOS & Android.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Main Story Card */}
          <div className="md:col-span-8 bento-card p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <FlutterIcon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    Mohamed Fawzy
                  </h3>
                  <span className="text-xs text-sky-400 font-mono">
                    B.Sc. in Information Systems • Tanta University
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                I am a <strong>Junior Flutter Developer with +1 year of practical experience</strong> engineering and shipping cross-platform mobile applications for iOS and Android. My development foundation is built on <strong className="text-cyan-accent">Clean Architecture</strong> and <strong className="text-cyan-accent">BLoC / Cubit</strong> state management, ensuring applications are modular, scalable, and easy to test.
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                I have hands-on experience engineering complex production applications including <strong className="text-[var(--text-primary)]">DocMate</strong> (healthcare platform & live queue management, published on Google Play & App Store), <strong className="text-[var(--text-primary)]">Academia AI</strong> (25+ screens, Google Gemini multi-modal workflows, published on Google Play), <strong className="text-[var(--text-primary)]">ParkMate</strong> (Mapbox GPS routing), and commercial e-commerce platforms.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 mt-5 border-t border-[var(--border-subtle)]">
              {metrics.map((m) => (
                <div key={m.label} className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-semibold text-sky-400">
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
                <div className="w-7 h-7 rounded bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <Code2 size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  Core Engineering Practices
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-[var(--text-body)]">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture:</strong> Separation of Data, Domain, and UI layers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Predictable State:</strong> BLoC/Cubit event-state streams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Offline Resilience:</strong> Dio caching interceptors and SQLite.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Bilingual RTL/LTR:</strong> Full Arabic & English support.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono">
              Currently expanding into React Native & Java foundations.
            </div>
          </div>

          {/* 4 Pillars Cards */}
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="md:col-span-3 bento-card p-4 sm:p-5"
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 bg-sky-500/10 text-sky-400"
                >
                  <Icon size={16} />
                </div>
                <h4 className="text-xs font-bold text-[var(--text-primary)] mb-1">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-[var(--text-body)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}