import { useState } from 'react';
import { 
  Code2, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Database, 
  Cpu,
  FileCode,
  Terminal,
  ArrowRight
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
  { id: 'backend', label: 'Backend & Cloud' },
  { id: 'ai-tools', label: 'AI, Maps & Native' },
];

const skillsList = [
  // Mobile Core
  { name: 'Flutter', category: 'mobile', icon: FlutterIcon, level: '2 Yrs Production', note: 'Cross-platform iOS & Android, 60 FPS fluid Impeller rendering' },
  { name: 'Dart', category: 'mobile', icon: DartIcon, level: 'Advanced', note: 'Async programming, streams, null-safety, and Dart Isolates' },
  { name: 'Android Native', category: 'mobile', icon: AndroidIcon, level: 'Native Integration', note: 'Manifest, permissions, AppWidgets & release signing' },
  { name: 'iOS / Cupertino', category: 'mobile', icon: AppleIcon, level: 'Apple HIG Standard', note: 'Cupertino design, WidgetKit, TestFlight & App Store releases' },
  { name: 'React Native', category: 'mobile', icon: Code2, level: 'Expanding Focus', note: 'Component lifecycle, cross-framework mobile synergy' },

  // Architecture & State
  { name: 'Clean Architecture', category: 'architecture', icon: CleanArchIcon, level: 'Core Standard', note: 'Presentation, Domain (Pure UseCases), Data separation' },
  { name: 'BLoC / Cubit', category: 'architecture', icon: BlocIcon, level: 'Expert', note: 'Predictable event-state stream machines without side effects' },
  { name: 'Provider / GetX', category: 'architecture', icon: Layers, level: 'Proficient', note: 'Scoped dependency injection and reactive bindings' },
  { name: 'GoRouter & Deep Links', category: 'architecture', icon: Cpu, level: 'Advanced', note: 'Declarative routing, redirect authentication guards' },
  { name: 'SOLID Principles', category: 'architecture', icon: CheckCircle2, level: 'Practiced Standard', note: 'Dependency inversion, interface segregation, clean boundaries' },

  // Backend & APIs
  { name: 'Supabase', category: 'backend', icon: SupabaseIcon, level: 'Production', note: 'PostgreSQL, Row-Level Security (RLS), Auth & Storage' },
  { name: 'Firebase', category: 'backend', icon: FirebaseIcon, level: 'Production', note: 'Firestore real-time DB, Cloud Auth, Storage' },
  { name: 'Dio & RESTful APIs', category: 'backend', icon: DioIcon, level: 'Advanced', note: 'Interceptors, caching headers, automatic token refresh' },
  { name: 'SQLite / Offline Cache', category: 'backend', icon: Database, level: 'Production', note: 'Local offline persistence, sync and encrypted storage' },

  // AI, Hardware & Tools
  { name: 'Google Gemini 1.5 AI', category: 'ai-tools', icon: GeminiIcon, level: 'Production', note: 'Multi-modal PDF document parsing & automated study quiz generator' },
  { name: 'Mapbox Navigation', category: 'ai-tools', icon: MapboxIcon, level: 'Production', note: 'Turn-by-turn walking routing, reverse geocoding & telemetry' },
  { name: 'Paymob Gateway', category: 'ai-tools', icon: PaymobIcon, level: 'Commercial', note: 'Payment cards, mobile wallets, and webhook transaction status' },
  { name: 'Git & GitHub', category: 'ai-tools', icon: GitIcon, level: 'Daily Standard', note: 'Branching strategies, PR reviews, version tags' },
  { name: 'Postman', category: 'ai-tools', icon: PostmanIcon, level: 'Advanced', note: 'API contract testing, environment variables, authentication' },
  { name: 'Figma', category: 'ai-tools', icon: FigmaIcon, level: 'Design-to-Code', note: 'Pixel-perfect translation from Figma mobile specs into Flutter' },
  { name: 'Google Play Console', category: 'ai-tools', icon: GooglePlayIcon, level: 'Published Apps', note: 'App bundle signing, release tracks (Sakina, DocMate & Academia AI)' },
];

const archLayers = [
  {
    layer: '1. Presentation Layer (UI & State)',
    tech: 'Flutter Widgets • BLoC / Cubit • Responsive Layouts',
    role: 'Pure UI components that listen to immutable state streams emitted by BLoC. Zero business logic or direct API calls ever reside here.',
    codeFile: 'presentation/cubit/prayer_cubit.dart',
    codeSnippet: `class PrayerCubit extends Cubit<PrayerState> {
  final GetPrayerTimesUseCase getPrayerTimes;
  PrayerCubit(this.getPrayerTimes) : super(PrayerInitial());

  Future<void> fetchTimes(Coordinates coords) async {
    emit(PrayerLoading());
    final result = await getPrayerTimes(coords);
    result.fold(
      (failure) => emit(PrayerError(failure.message)),
      (times) => emit(PrayerLoaded(times)),
    );
  }
}`,
    contract: 'UI triggers Event -> BLoC processes -> Emits immutable State -> UI rebuilds targeted widgets',
  },
  {
    layer: '2. Domain Layer (Pure Business Rules)',
    tech: 'UseCases • Entities • Repository Contracts (Abstract Interfaces)',
    role: 'The heart of the application. 100% independent of any external packages, HTTP clients, or Flutter framework. Completely unit-testable.',
    codeFile: 'domain/usecases/get_prayer_times_usecase.dart',
    codeSnippet: `class GetPrayerTimesUseCase implements UseCase<PrayerTimes, Coordinates> {
  final PrayerRepository repository;
  GetPrayerTimesUseCase(this.repository);

  @override
  Future<Either<Failure, PrayerTimes>> call(Coordinates params) async {
    // Pure business rule: independent of Flutter or remote DB
    return await repository.getAstronomicalPrayerTimes(params);
  }
}`,
    contract: 'UseCase executes business logic -> Calls abstract Repository interface -> Returns Either<Failure, Success>',
  },
  {
    layer: '3. Data Layer (Data Sources & Models)',
    tech: 'Dio HTTP • Supabase • SQLite Cache • DTO Mappers',
    role: 'Implements repository interfaces. Orchestrates network requests, parses JSON into typed models, and handles offline database synchronization.',
    codeFile: 'data/repositories/prayer_repository_impl.dart',
    codeSnippet: `class PrayerRepositoryImpl implements PrayerRepository {
  final PrayerLocalDataSource localDataSource;
  final AstronomicalCalculator celestialCore;
  PrayerRepositoryImpl(this.localDataSource, this.celestialCore);

  @override
  Future<Either<Failure, PrayerTimes>> getAstronomicalPrayerTimes(Coordinates c) async {
    try {
      final times = await celestialCore.calculate(c.lat, c.lng);
      await localDataSource.cacheTimes(times);
      return Right(times);
    } catch (e) {
      return Left(CalculationFailure('Calculation engine error'));
    }
  }
}`,
    contract: 'DataSource fetches JSON/RPC -> Mapper turns into Entity -> Caches to SQLite -> Passes to Domain',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArchLayer, setSelectedArchLayer] = useState(0);
  const [viewMode, setViewMode] = useState('blueprint'); // 'blueprint' | 'code'

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  const activeLayer = archLayers[selectedArchLayer];

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
            Skills, Architecture & Tech Stack
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            A production-proven mobile engineering stack refined over +1 year of commercial software development.
          </p>
        </div>

        {/* Clean Architecture Blueprint Interactive Bento */}
        <div className="mb-12 bento-card p-5 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-1">
                <CleanArchIcon size={14} />
                <span>Architecture Blueprint & Contracts</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Clean Architecture Implementation Standard
              </h3>
            </div>
            
            {/* View Mode Toggle: Blueprint vs Code Contract */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)]">
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  viewMode === 'blueprint'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-white'
                }`}
              >
                Architecture Flow
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'code'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <FileCode size={12} />
                <span>Dart Contracts</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Layer Selection Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {archLayers.map((layer, idx) => {
                const isSelected = selectedArchLayer === idx;
                return (
                  <button
                    key={layer.layer}
                    onClick={() => setSelectedArchLayer(idx)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--bg-elevated)] border-sky-500 shadow-xs'
                        : 'bg-[var(--bg-secondary)] border-[var(--border-default)] hover:border-[var(--border-hover)]'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-bold font-mono mb-1 ${isSelected ? 'text-sky-400' : 'text-[var(--text-primary)]'}`}>
                        {layer.layer}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono">
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

              {/* Data Flow Pipeline Indicator */}
              <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between">
                <span className="text-sky-400 font-semibold">Flow:</span>
                <span className="text-[10px] flex items-center gap-1 text-[var(--text-secondary)]">
                  UI <ArrowRight size={10} /> Cubit <ArrowRight size={10} /> UseCase <ArrowRight size={10} /> Repo <ArrowRight size={10} /> SQLite
                </span>
              </div>
            </div>

            {/* Layer Detail Card / Code Contract Inspector */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] flex flex-col justify-between">
              {viewMode === 'blueprint' ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                      LAYER RESPONSIBILITIES & SEPARATION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Isolated & Testable
                    </span>
                  </div>

                  <div className="text-base font-bold text-[var(--text-primary)] mb-2">
                    {activeLayer.layer}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-4">
                    {activeLayer.role}
                  </p>

                  <div className="p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)]">
                    <span className="text-sky-400 font-bold block mb-1">$ Data Flow Contract:</span>
                    <span>{activeLayer.contract}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono text-sky-400 flex items-center gap-1.5">
                      <Terminal size={12} />
                      <span>{activeLayer.codeFile}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">Dart 3.x</span>
                  </div>

                  <pre className="p-3 rounded-lg bg-[#08090C] border border-white/10 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed flex-1">
                    <code>{activeLayer.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Enforced across Sakina, DocMate & Academia AI</span>
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">SOLID Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white border border-sky-500 shadow-xs'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-body)] hover:text-white border border-[var(--border-default)] hover:border-[var(--border-hover)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bento-card p-4 flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Icon size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)] flex-shrink-0">
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
