import { 
  Calendar, 
  Sparkles,
  Activity,
  Layers,
  ShieldCheck,
  Smartphone,
  Cpu,
  Moon,
  GraduationCap
} from 'lucide-react';
import { FlutterIcon, GooglePlayIcon, AppleIcon } from './TechIcons';

const experiences = [
  {
    id: 'sakina',
    role: 'Lead Flutter Mobile Architect',
    company: 'Sakina Platform',
    platform: 'Luxury Islamic Mobile Platform & 4K Reel Studio',
    type: 'Commercial • Production',
    period: '2026 - Present',
    status: 'Current Flagship • Live on App Store & Google Play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sakina.islamic',
    appStoreUrl: 'https://apps.apple.com/us/app/id6831748362',
    isCurrent: true,
    summary: 'Architected and published a production-grade luxury mobile platform from concept to app store release. Strictly engineered with Clean Architecture and BLoC/Cubit state management, featuring client-side 4K video reel generation, mathematical astronomical algorithms, and cross-platform native home screen widgets.',
    impacts: [
      {
        title: '4K Quranic Reel & Video Studio',
        desc: 'Engineered an in-app 4K video reel generator using FFmpeg and custom Canvas graphics, enabling users to render and export synchronized audio-visual reels directly on device for social media without backend rendering costs.',
        tag: 'FFmpeg & Canvas 4K',
        icon: Sparkles,
      },
      {
        title: 'Offline Astronomical Prayer Engine',
        desc: 'Designed an offline-first astronomical calculation engine and dynamic celestial sky header that computes solar/lunar phases mathematically using GPS coordinates with zero external API dependencies.',
        tag: 'Mathematical Astronomy',
        icon: Moon,
      },
      {
        title: 'Private Biometric Gratitude Vault',
        desc: 'Integrated local biometric authentication (Face ID / Fingerprint) paired with AES encryption for a confidential spiritual journal and gratitude vault, ensuring total user privacy.',
        tag: 'AES Encryption & Biometrics',
        icon: ShieldCheck,
      },
      {
        title: 'Native iOS & Android Home Widgets',
        desc: 'Built native home screen widgets using Apple WidgetKit (Swift) and Android AppWidgets (Kotlin) synchronized through the home_widget plugin for glanceable prayer schedules.',
        tag: 'iOS WidgetKit & Android',
        icon: Smartphone,
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'BLoC / Cubit',
      'FFmpeg Mobile',
      'Canvas Graphics',
      'iOS WidgetKit (Swift)',
      'Android AppWidgets (Kotlin)',
      'Dart Isolates',
      'AES Encryption',
      'Google Play Console',
      'App Store Connect'
    ],
  },
  {
    id: 'docmate',
    role: 'Flutter Mobile Developer',
    company: 'DocMate Healthcare',
    platform: 'Commercial Healthcare Platform & Real-Time Clinic Queue Engine',
    type: 'Commercial • Production',
    period: 'Aug 2026 - Present',
    status: 'Active Production • Live on App Store & Google Play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.curacare.app',
    appStoreUrl: 'https://apps.apple.com/us/app/docmate-clinic-appointments/id6819001621',
    isCurrent: true,
    summary: 'Developed and shipped DocMate, a commercial healthcare application connecting patients with clinics and medical specialists, backed by custom Supabase RPC concurrency guards and an administrative React web dashboard.',
    impacts: [
      {
        title: 'Dynamic Booking & Live Queue Engine',
        desc: 'Built an appointment scheduling engine supporting cancellations, reschedulings, and real-time waiting slot calculations. Authored custom Supabase RPCs on PostgreSQL to eliminate double-booking conflicts.',
        tag: 'Supabase RPCs & Queue',
        icon: Activity,
      },
      {
        title: 'Dual-Role Patient & Doctor Architecture',
        desc: 'Implemented role-based authentication separating Patient appointment discovery from Doctor consultation queue dashboards with medical license verification pipelines.',
        tag: 'Role Auth & Security',
        icon: ShieldCheck,
      },
      {
        title: 'Web Operations Portal (React Admin)',
        desc: 'Built an administrative web dashboard for clinic operations to audit transactions, review doctor credentials, and govern permissions using Supabase Row-Level Security (RLS) policies.',
        tag: 'React & Supabase RLS',
        icon: Layers,
      },
      {
        title: 'Clean Architecture & Offline Caching',
        desc: 'Structured the codebase using strict Clean Architecture (Presentation, Domain, Data) and BLoC/Cubit state machines. Implemented offline-first caching and bilingual localization (Arabic/English).',
        tag: 'Clean Arch & Offline',
        icon: Smartphone,
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'BLoC / Cubit',
      'Supabase RPCs',
      'PostgreSQL',
      'React Admin',
      'Clean Architecture',
      'Row-Level Security',
      'Google Play Console',
      'App Store Connect'
    ],
  },
  {
    id: 'academia-ai',
    role: 'Lead Flutter Developer & AI Integrator',
    company: 'Academia AI',
    platform: 'Google Gemini 1.5 Multi-Modal Study Companion • 25+ Screens',
    type: 'Commercial • Production',
    period: '2026',
    status: 'Flagship Production • Live on App Store & Google Play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mohamed.academiaai',
    appStoreUrl: 'https://apps.apple.com/us/app/academia-ai-all-in-one-study/id6815206996',
    isCurrent: false,
    summary: 'Architected and published Academia AI, a comprehensive production educational platform featuring 25+ screens, automated personalized study plan generation via Google Gemini 1.5, PDF document summarization, and dynamic quizzing.',
    impacts: [
      {
        title: 'Google Gemini 1.5 Multi-Modal AI Engine',
        desc: 'Architected end-to-end multi-modal AI workflows: in-app PDF document understanding, automated lecture summarization, and dynamic multiple-choice quiz generation from raw study notes.',
        tag: 'Gemini AI Integration',
        icon: Sparkles,
      },
      {
        title: '25+ Production Screens Clean Architecture',
        desc: 'Engineered an expansive 25+ screen application with strict separation between Presentation, Domain Use Cases, and Data repositories, ensuring zero state leaks and 100% unit-testable business logic.',
        tag: 'Clean Arch & BLoC',
        icon: Layers,
      },
      {
        title: 'Offline Caching & Data Synchronization',
        desc: 'Designed local database caching with SQLite and automated cloud synchronization via Supabase, ensuring uninterrupted student study sessions during network dropouts.',
        tag: 'SQLite & Supabase Sync',
        icon: Cpu,
      },
      {
        title: 'Bilingual RTL/LTR Localization',
        desc: 'Built dynamic runtime language switching (Arabic RTL & English LTR) with tailored typography, responsive layouts, and Cupertino/Material adaptive styling.',
        tag: 'Arabic & English Localization',
        icon: GraduationCap,
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'Google Gemini 1.5 AI',
      'Clean Architecture',
      'BLoC / Cubit',
      'Supabase',
      'SQLite Cache',
      'Dio',
      'Google Play Console',
      'App Store Connect'
    ],
  },
  {
    id: 'tradebox',
    role: 'Flutter Developer',
    company: 'TRADE BOX',
    platform: 'Cryptocurrency Mobile Exchange Platform',
    type: 'Freelance • Remote',
    period: 'Jan 2026 - Apr 2026',
    status: 'Completed Commercial Milestone',
    isCurrent: false,
    summary: 'Spearheaded architectural refactoring and developed commercial features for a cryptocurrency mobile exchange platform.',
    impacts: [
      {
        title: 'Authentication & Onboarding (10+ Screens)',
        desc: 'Engineered full authentication lifecycle including OTP verification, biometric logins, and email recovery using Clean Architecture and Dio.',
        tag: 'Clean Architecture',
        icon: ShieldCheck,
      },
      {
        title: 'BLoC Codebase Modernization',
        desc: 'Refactored tightly coupled legacy modules into loosely coupled Domain Use Cases and BLoC state streams for high testability.',
        tag: 'BLoC Refactoring',
        icon: Layers,
      },
      {
        title: 'Real-Time Price Tickers',
        desc: 'Integrated live WebSocket price feeds with throttled widget rebuilds to maintain fluid 60 FPS performance without frame drops.',
        tag: '60 FPS WebSocket',
        icon: Activity,
      },
      {
        title: 'Cross-Platform UI Alignment',
        desc: 'Ensured pixel-identical rendering and native gesture responses across both Android and iOS devices.',
        tag: 'Cupertino & Material',
        icon: Smartphone,
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
            <span>Commercial Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Professional Experience
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Production mobile systems and scalable architectures delivered in commercial roles and live store releases.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`bento-card p-5 sm:p-8 ${
                exp.isCurrent 
                  ? 'border-sky-500/40' 
                  : 'border-[var(--border-default)]'
              }`}
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.isCurrent ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                  }`}>
                    <FlutterIcon size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 uppercase tracking-wider">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-sky-400">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-[var(--text-secondary)]">{exp.platform}</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                  <div className="flex items-center gap-2 flex-wrap sm:justify-end">
                    {exp.playStoreUrl && (
                      <a
                        href={exp.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all text-decoration-none shadow-2xs"
                        title={`View ${exp.company} on Google Play Store`}
                      >
                        <GooglePlayIcon size={13} />
                        <span>Google Play</span>
                      </a>
                    )}
                    {exp.appStoreUrl && (
                      <a
                        href={exp.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white transition-all text-decoration-none shadow-2xs"
                        title={`View ${exp.company} on Apple App Store`}
                      >
                        <AppleIcon size={13} className="text-white" />
                        <span>App Store</span>
                      </a>
                    )}
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-secondary)] flex items-center gap-1.5">
                      <Calendar size={12} className="text-sky-400" />
                      {exp.period}
                    </span>
                  </div>
                  
                  {exp.isCurrent ? (
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{exp.status}</span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-medium text-slate-400 font-mono">
                      {exp.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Summary / Impact & Scope */}
              <div className="mb-5">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-sky-400" />
                  <span>Project Impact & Engineering Scope</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              {/* Impact Points Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {exp.impacts.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] transition-colors"
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
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Technologies
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
