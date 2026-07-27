import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Experience', value: '1+ Year', icon: CommandLineIcon },
  { label: 'Platforms', value: 'iOS & Android', icon: DevicePhoneMobileIcon },
  { label: 'Focus', value: 'Clean Code', icon: CodeBracketIcon },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function AboutMe() {
  return (
    <section id="about" className="section-padding position-relative">
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
            Profile
          </span>
          <h2 className="fw-bold mb-0" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>
            About <span style={{ color: '#38BDF8' }}>Me</span>
          </h2>
          <div className="section-accent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto"
          style={{ maxWidth: '48rem' }}
        >
          <motion.div variants={itemVariants} className="d-flex flex-column gap-4">
            <div
              className="rounded-3 p-4 position-relative"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 40, height: 40, backgroundColor: 'rgba(56,189,248,0.1)' }}>
                  <span style={{ fontSize: '1.25rem', lineHeight: 1, color: '#38BDF8', fontWeight: 700 }}>"</span>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-body)' }}>
                    <span className="fw-semibold" style={{ color: '#38BDF8' }}>Junior Flutter Developer</span> with hands-on experience building and shipping production-ready iOS and Android applications.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-3" style={{ borderTop: '1px solid var(--border-default)', paddingTop: '1rem' }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="d-flex align-items-center gap-2" style={{ flex: '1 1 auto', minWidth: 0 }}>
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 32, height: 32, backgroundColor: 'rgba(56,189,248,0.08)' }}>
                      <stat.icon style={{ width: 14, height: 14, color: '#38BDF8' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}>{stat.value}</p>
                      <p className="mb-0" style={{ fontSize: 'clamp(0.5rem, 1.3vw, 0.6rem)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <div
                className="rounded-3 p-4"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <p style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-body)' }}>
                  Proficient in Clean Architecture, BLoC/Cubit state management, and integrating AI-powered features using Gemini. Focused on writing clean, maintainable code and delivering smooth 60fps performance on real devices.
                </p>
                <p className="mb-0" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-body)' }}>
                  Currently expanding into React Native and building foundational skills in Java, eager to join a product team where strong engineering standards and continuous growth are valued.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}