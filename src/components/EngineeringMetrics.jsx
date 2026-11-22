import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  HardDrive, 
  Activity, 
  Compass
} from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from './TechIcons';

const metrics = [
  {
    icon: Smartphone,
    value: '3 Apps Shipped',
    title: 'Dual-Store Production',
    description: 'Active commercial applications live on both Apple App Store and Google Play Console.',
    subtext: 'Sakina • DocMate • Academia AI',
    status: 'Verified Live',
    statusColor: 'text-emerald-400',
    highlight: true,
  },
  {
    icon: Activity,
    value: '99.8%',
    title: 'Crash-Free Session Rate',
    description: 'Disciplined error boundaries, null-safety guards, and BLoC deterministic state transitions.',
    subtext: 'Production Telemetry',
    status: 'Industry Top Tier',
    statusColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    value: '60 FPS',
    title: 'Native Fluidity',
    description: 'Impeller & Skia rendering optimization. Heavy JSON and FFmpeg computations offloaded to Dart Isolates.',
    subtext: 'Zero-Jank Guarantee',
    status: 'Impeller Ready',
    statusColor: 'text-sky-400',
  },
  {
    icon: HardDrive,
    value: '67%',
    title: 'Release Size Shrink',
    description: 'Aggressive R8 code shrinking, custom ProGuard keep rules, and WebP asset quantization.',
    subtext: 'Lean Production APKs/IPAs',
    status: 'Fast Downloads',
    statusColor: 'text-amber-400',
  },
  {
    icon: ShieldCheck,
    value: '0 Collisions',
    title: 'Atomic RPC Booking',
    description: 'PostgreSQL transactional stored procedures prevent race conditions in real-time healthcare scheduling.',
    subtext: 'Supabase RLS & DB Functions',
    status: 'ACID Guaranteed',
    statusColor: 'text-emerald-400',
  },
  {
    icon: Compass,
    value: '100% Offline',
    title: 'Mathematical Sky Core',
    description: 'Pure spherical trigonometry prayer & celestial algorithms running locally with zero API dependency.',
    subtext: 'Instant Mathematical Compute',
    status: 'Autonomous Core',
    statusColor: 'text-sky-400',
  },
];

export default function EngineeringMetrics() {
  return (
    <section className="relative py-8 sm:py-10 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
      <div className="max-container">

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <span className="radar-dot">
              <span className="radar-dot-ping" />
              <span className="radar-dot-core" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Commercial Engineering Benchmark & Production SLA
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <AppleIcon size={12} />
              <span>iOS</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[var(--text-secondary)]">
              <GooglePlayIcon size={12} />
              <span>Android</span>
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">100% Production Grade</span>
          </div>
        </div>

        {/* Grid of Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bento-card p-3.5 flex flex-col justify-between group hover:border-sky-500/40 transition-all ${
                  m.highlight ? 'bg-sky-500/[0.04] border-sky-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-sky-400 border border-[var(--border-subtle)] group-hover:scale-105 transition-transform">
                      <Icon size={14} />
                    </div>
                    <span className={`text-[9px] font-mono font-semibold ${m.statusColor}`}>
                      {m.status}
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-[var(--text-primary)] mb-0.5">
                    {m.value}
                  </div>

                  <div className="text-xs font-bold text-[var(--text-secondary)] leading-tight mb-1.5">
                    {m.title}
                  </div>

                  <p className="text-[10px] text-[var(--text-muted)] leading-relaxed hidden sm:block">
                    {m.description}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-[var(--border-subtle)] text-[9px] font-mono text-[var(--text-muted)] truncate">
                  {m.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
