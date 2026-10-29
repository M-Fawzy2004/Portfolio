import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Star,
  Award
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Education & Academic Degree
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Information systems engineering, algorithmic problem solving, and software architecture.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bento-card p-5 sm:p-8">
            
            {/* Degree Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 mb-5 border-b border-[var(--border-subtle)]">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 flex-shrink-0 border border-sky-500/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">
                    B.Sc. in Information Systems
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-sky-400 mt-0.5">
                    Faculty of Computers and Information, Tanta University
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
                  </div>
                </div>
              </div>

              {/* GPA & Honors Badge */}
              <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                <div className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-bold text-xs">
                  GPA: 3.3
                </div>
                <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                  <Award size={12} />
                  <span>Graduate with Distinction</span>
                </span>
              </div>
            </div>

            {/* Capstone Project Distinction */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Star size={15} className="text-amber-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  Capstone Graduation Project Distinction
                </span>
              </div>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                Dual-Interface School Transit & Real-Time Tracking Platform
              </h4>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">
                Engineered two independent, role-guarded Flutter experiences (Parent Tracking App & School Bus Driver Dashboard) in a single modular codebase featuring live GPS telemetry, Retrofit REST APIs, and bilingual RTL support.
              </p>
            </div>

            {/* Core Academic Disciplines */}
            <div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2.5">
                Core Engineering Disciplines
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (OOP)',
                  'Database Systems & Relational SQL',
                  'Software Architecture & Design Patterns',
                  'Computer Networks & Protocols',
                  'System Analysis & Design',
                ].map((course) => (
                  <span 
                    key={course} 
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
