import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: CodeBracketIcon,
    color: '#38BDF8',
    skills: [
      'Flutter', 'React Native', 'Dart', 'JavaScript', 'HTML', 'CSS',
      'Material Design', 'Cupertino', 'Mobile App Development',
      'Responsive UI Design', 'Performance Optimization',
      'Push Notifications', 'Offline Mode',
    ],
  },
  {
    title: 'Architecture & State',
    icon: CpuChipIcon,
    color: '#818CF8',
    skills: [
      'Clean Architecture', 'MVVM', 'SOLID Principles', 'Dependency Injection',
      'BLoC', 'Cubit', 'Provider', 'GetX',
      'GoRouter', 'Deep Linking',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: ServerStackIcon,
    color: '#34D399',
    skills: [
      'REST APIs', 'Dio', 'HTTP', 'SQL',
      'Firebase', 'Supabase',
      'Authentication Systems', 'Payment Integration', 'Google Maps API',
      'API Caching', 'Image Caching',
    ],
  },
  {
    title: 'AI & Processing',
    icon: CommandLineIcon,
    color: '#F59E0B',
    skills: [
      'Gemini AI Integration', 'PDF Processing', 'Image Analysis',
      'Memory Leak Detection',
    ],
  },
  {
    title: 'Tools & Testing',
    icon: WrenchScrewdriverIcon,
    color: '#F472B6',
    skills: [
      'Git', 'GitHub', 'Postman', 'Figma',
      'Android Studio', 'Visual Studio Code', 'Flutter DevTools',
      'Unit Testing', 'Widget Testing', 'Integration Testing', 'Manual Testing',
    ],
  },
  {
    title: 'Professional Skills',
    icon: UserGroupIcon,
    color: '#A78BFA',
    skills: [
      'Problem Solving', 'Communication', 'Teamwork', 'Time Management',
      'Adaptability', 'Fast Learning', 'Attention to Detail',
      'Debugging', 'Analytical Thinking',
    ],
  },
]

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
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.15)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#38BDF8' }} />
            Expertise
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Skills & Expertise</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            Technologies, tools, and practices I use to build production-grade applications
          </p>
        </motion.div>

        <div className="d-flex flex-column gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 36, height: 36, backgroundColor: `${group.color}15` }}>
                  <group.icon style={{ width: 18, height: 18, color: group.color }} />
                </div>
                <h3 className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'var(--text-primary)' }}>{group.title}</h3>
                <div className="flex-grow-1" style={{ height: 1, background: `linear-gradient(90deg, ${group.color}30, transparent)` }} />
              </div>
              <div className="d-flex flex-wrap gap-2 ps-1">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.03 }}
                    className="d-inline-flex align-items-center gap-2 rounded-2"
                    style={{
                      padding: '0.35rem 0.85rem',
                      fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                      fontWeight: 450,
                      color: 'var(--text-body)',
                      backgroundColor: `${group.color}08`,
                      border: `1px solid ${group.color}18`,
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                      letterSpacing: '0.005em',
                    }}
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: `${group.color}15`,
                      borderColor: `${group.color}40`,
                      color: group.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}