import { motion } from 'framer-motion'
import { AcademicCapIcon, MapPinIcon, CalendarDaysIcon, StarIcon } from '@heroicons/react/24/outline'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Education() {
  return (
    <section id="education" className="section-padding position-relative">
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
            Background
          </span>
          <h2 className="fw-bold mb-0" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Education</h2>
          <div className="section-accent" />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto"
          style={{ maxWidth: '36rem' }}
        >
          <div
            className="rounded-3"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
              overflow: 'hidden',
            }}
          >
            <div className="p-4">
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 40, height: 40, backgroundColor: 'rgba(56,189,248,0.1)' }}>
                  <AcademicCapIcon style={{ width: 20, height: 20, color: '#38BDF8' }} />
                </div>
                <div className="flex-grow-1 min-w-0">
                  <h3 className="fw-semibold mb-1" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--text-primary)' }}>
                    B.Sc. in Information Systems
                  </h3>
                  <p className="mb-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#38BDF8' }}>
                    Faculty of Computers and Information, Tanta University
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="d-inline-flex align-items-center gap-1 px-2 py-0 rounded-2" style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.65rem)', fontWeight: 500, color: '#34D399', backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>
                      Recent Graduate
                    </span>
                    <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.65rem)', color: 'var(--text-muted)' }}>
                      <CalendarDaysIcon style={{ width: 12, height: 12 }} />
                      Sep 2022 - May 2026
                    </span>
                    <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.65rem)', color: 'var(--text-muted)' }}>
                      <MapPinIcon style={{ width: 12, height: 12 }} />
                      Tanta, Egypt
                    </span>
                    <span className="d-inline-flex align-items-center gap-1 px-2 py-0 rounded-2" style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.65rem)', fontWeight: 500, color: '#FBBF24', backgroundColor: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>
                      GPA: 3.3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-default)' }}>
              <div className="p-4 d-flex align-items-start gap-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 40, height: 40, backgroundColor: 'rgba(251,191,36,0.1)' }}>
                  <StarIcon style={{ width: 20, height: 20, color: '#FBBF24' }} />
                </div>
                <div className="flex-grow-1 min-w-0">
                  <p className="mb-1 fw-semibold" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: 'var(--text-primary)' }}>
                    Graduation Project
                  </p>
                  <p className="mb-0" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    Dual-interface child transportation management system connecting parents and school drivers with real-time tracking, role-based dashboards, and bilingual support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}