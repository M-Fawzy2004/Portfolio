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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding position-relative">
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
            Career
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Experience</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            My professional journey in mobile development
          </p>
        </motion.div>

        <div className="position-relative mx-auto" style={{ maxWidth: '44rem' }}>
          {/* Vertical connector line */}
          <div className="position-absolute top-0 bottom-0" style={{ left: '1.25rem', width: '2px', background: 'linear-gradient(180deg, rgba(56,189,248,0.4), rgba(129,140,248,0.15), transparent)', borderRadius: '1px' }} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="d-flex flex-column gap-4"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="position-relative"
                style={{ paddingLeft: '3.5rem' }}
              >
                {/* Timeline dot */}
                <div
                  className="position-absolute rounded-circle"
                  style={{ left: '0.95rem', top: 8, width: 14, height: 14, zIndex: 10, backgroundColor: '#38BDF8', boxShadow: '0 0 0 4px rgba(56,189,248,0.12), 0 0 20px rgba(56,189,248,0.15)' }}
                />

                {/* Card */}
                <div
                  className="rounded-2 position-relative overflow-hidden"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    borderLeft: '3px solid #38BDF8',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  <div className="p-4">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="d-inline-flex align-items-center gap-1 px-2 py-0 rounded-2" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', fontWeight: 500, color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)' }}>
                        <CalendarDaysIcon style={{ width: 12, height: 12 }} />
                        {exp.period}
                      </span>
                      <span style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', color: 'var(--text-muted)' }}>{exp.type}</span>
                    </div>

                    <h3 className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <p className="d-flex align-items-center gap-1 mt-1 mb-3" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#38BDF8' }}>
                      <BriefcaseIcon style={{ width: 14, height: 14 }} />
                      {exp.company}
                    </p>

                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="d-flex align-items-start gap-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-body)', lineHeight: 1.7 }}>
                          <span className="flex-shrink-0 rounded-circle d-inline-block mt-2" style={{ width: 4, height: 4, backgroundColor: 'rgba(56,189,248,0.35)' }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}