import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Experience', value: '1+ Year', icon: CommandLineIcon },
  { label: 'Platforms', value: 'iOS & Android', icon: DevicePhoneMobileIcon },
  { label: 'Focus', value: 'Clean Code', icon: CodeBracketIcon },
]

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
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="mx-auto" style={{ maxWidth: '48rem' }}>
          <div className="d-flex flex-column gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="row g-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="col-4">
                  <div
                    className="d-flex flex-column align-items-center text-center rounded-2 p-3"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-default)',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center rounded-2 mb-2" style={{ width: 36, height: 36, backgroundColor: 'rgba(56,189,248,0.1)' }}>
                      <stat.icon style={{ width: 18, height: 18, color: '#38BDF8' }} />
                    </div>
                    <p className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.125rem)', color: 'var(--text-primary)' }}>{stat.value}</p>
                    <p className="mb-0" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.625rem)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="rounded-2 p-4 position-relative"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                  borderLeft: '3px solid #38BDF8',
                }}
              >
                <div className="position-absolute" style={{ top: -8, right: 12, fontSize: '100px', fontWeight: 700, lineHeight: 1, color: 'var(--border-default)', userSelect: 'none', pointerEvents: 'none' }}>
                  &ldquo;
                </div>
                <p className="mb-0 position-relative" style={{ zIndex: 1, fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', lineHeight: 1.8, color: 'var(--text-body)' }}>
                  <span className="fw-semibold" style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Junior Flutter Developer</span> with hands-on experience building and shipping production-ready iOS and Android applications.
                  <br /><br />
                  Proficient in Clean Architecture, BLoC/Cubit state management, and integrating AI-powered features using Gemini. Focused on writing clean, testable code and delivering smooth 60fps performance on real devices.
                  <br /><br />
                  Currently expanding into React Native, eager to join a product team where strong engineering standards and continuous growth are valued.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}