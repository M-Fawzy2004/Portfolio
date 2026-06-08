import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    period: 'Jan 2026 - Apr 2026',
    role: 'Flutter Developer',
    company: 'TRADE BOX',
    type: 'Freelance, Remote',
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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
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
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.2)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#22D3EE', animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
            Career
          </span>
          <h2 className="fw-bold text-white mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Experience</h2>
          <p className="mb-0 mx-auto" style={{ color: '#94A3B8', maxWidth: '36rem', fontSize: '1rem' }}>
            My professional journey in mobile development
          </p>
        </motion.div>

        <div className="position-relative mx-auto" style={{ maxWidth: '48rem' }}>
          <div className="position-absolute top-0 bottom-0" style={{ left: '1.25rem', width: '1px', background: 'linear-gradient(180deg, rgba(34,211,238,0.4), rgba(139,92,246,0.2), transparent)' }} />

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
                <div className="position-absolute rounded-circle" style={{ left: '0.75rem', top: 4, width: 14, height: 14, background: 'linear-gradient(135deg, #22D3EE, #8B5CF6)', boxShadow: '0 0 16px rgba(34,211,238,0.25)', zIndex: 10 }} />

                <div className="card p-4 border-0" style={{ borderRadius: 24 }}>
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                    <span className="badge" style={{ fontSize: '0.6875rem', fontWeight: 500, color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', padding: '0.25rem 0.5rem' }}>
                      {exp.period}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{exp.type}</span>
                  </div>

                  <h3 className="text-white fw-semibold mt-1 mb-0" style={{ fontSize: '1.125rem' }}>{exp.role}</h3>
                  <p className="d-flex align-items-center gap-1 mb-2" style={{ fontSize: '0.875rem', color: '#22D3EE' }}>
                    <BriefcaseIcon style={{ width: 14, height: 14 }} />
                    {exp.company}
                  </p>

                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="d-flex align-items-start gap-2" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                        <span className="flex-shrink-0 rounded-circle d-inline-block mt-1" style={{ width: 6, height: 6, backgroundColor: 'rgba(34,211,238,0.5)' }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
