import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    period: 'Jan 2026 - Apr 2026',
    role: 'Flutter Developer',
    company: 'TRADE BOX',
    type: 'Freelance · Remote',
    highlights: [
      'Developed a comprehensive authentication system with over 10 screens, including login, OTP verification, and onboarding flows, leveraging Clean Architecture and Dio.',
      'Refactored legacy codebase sections to implement Clean Architecture, enhancing code maintainability and streamlining the development workflow.',
      'Developed a responsive trading dashboard featuring real-time cryptocurrency price updates and optimized for smooth cross-platform performance.',
      'Optimized UI rendering and widget structure to ensure consistent performance across Android and iOS devices.',
      'Enhanced onboarding experience with improved animations and user interaction flows.',
    ],
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding position-relative">
      <div className="max-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-5"
        >
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.15)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#38BDF8' }} />
            Career
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Experience</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            My professional journey in mobile development
          </p>
          <div className="section-accent" />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto"
          style={{ maxWidth: '44rem' }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-3 position-relative"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
                overflow: 'hidden',
              }}
            >
              <div className="d-flex flex-column flex-md-row">
                <div className="p-4 d-flex flex-column" style={{ flex: '1 1 60%' }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 36, height: 36, backgroundColor: 'rgba(56,189,248,0.1)' }}>
                      <BriefcaseIcon style={{ width: 16, height: 16, color: '#38BDF8' }} />
                    </div>
                    <div>
                      <h3 className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <p className="mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#38BDF8' }}>{exp.company}</p>
                    </div>
                  </div>

                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="d-flex align-items-start gap-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-body)', lineHeight: 1.7 }}>
                        <span className="flex-shrink-0 d-inline-block mt-2" style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: 'rgba(56,189,248,0.4)' }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex flex-row flex-md-column align-items-center align-items-md-end justify-content-between px-4 pb-4 pb-md-4 pt-0 pt-md-4" style={{ flex: '0 0 auto' }}>
                  <span className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-2" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', fontWeight: 500, color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)', whiteSpace: 'nowrap' }}>
                    <CalendarDaysIcon style={{ width: 12, height: 12 }} />
                    {exp.period}
                  </span>
                  <span style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.65rem)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{exp.type}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}