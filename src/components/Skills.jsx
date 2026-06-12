import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: CodeBracketIcon,
    color: '#22D3EE',
    skills: ['Flutter', 'Dart', 'Cross-Platform', 'Responsive UI', 'Performance Optimization', 'Localization'],
  },
  {
    title: 'Architecture & State Management',
    icon: CpuChipIcon,
    color: '#8B5CF6',
    skills: ['Clean Architecture', 'BLoC', 'Cubit', 'Provider', 'MVVM', 'Get It', 'GoRouter'],
  },
  {
    title: 'Backend & Integration',
    icon: ServerStackIcon,
    color: '#14B8A6',
    skills: ['Supabase', 'Firebase', 'RESTful APIs', 'Dio', 'HTTP', 'Paymob', 'Stripe'],
  },
  {
    title: 'AI & Specialized Tech',
    icon: CommandLineIcon,
    color: '#F59E0B',
    skills: ['Gemini AI', 'PDF Processing', 'Image Processing'],
  },
  {
    title: 'Core Tools',
    icon: WrenchScrewdriverIcon,
    color: '#34D399',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding position-relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.2)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#22D3EE', animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
            Expertise
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Tech Stack</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            Technologies and tools I work with daily to build exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="row g-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className={`col-12 col-md-6 skill-card-full`}
            >
              <div className="card p-4 border-0 h-100" style={{ borderRadius: 24 }}>
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${group.color}33, ${group.color}11)` }}
                  >
                    <group.icon style={{ width: 20, height: 20, color: group.color }} />
                  </div>
                    <h3 className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', marginTop: 2, color: 'var(--text-primary)' }}>{group.title}</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge"
                      style={{
                        backgroundColor: 'var(--badge-bg)',
                        color: 'var(--badge-text)',
                        border: '1px solid var(--badge-border)',
                        padding: '0.375rem 0.75rem',
                        fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)',
                        fontWeight: 500,
                        borderRadius: 12,
                        transition: 'all 0.3s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'rgba(34,211,238,0.3)';
                        e.target.style.backgroundColor = 'rgba(34,211,238,0.05)';
                        e.target.style.color = '#67E8F9';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--badge-border)';
                        e.target.style.backgroundColor = 'var(--badge-bg)';
                        e.target.style.color = 'var(--badge-text)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
