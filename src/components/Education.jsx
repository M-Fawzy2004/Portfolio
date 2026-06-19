import { motion } from 'framer-motion'
import { AcademicCapIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export default function Education() {
  return (
    <section id="education" className="section-padding position-relative">
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
            Background
          </span>
          <h2 className="fw-bold mb-0" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto"
          style={{ maxWidth: '36rem' }}
        >
          <div
            className="position-relative overflow-hidden rounded-3"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
              borderLeft: '3px solid #38BDF8',
            }}
          >
            <div className="p-4">
              <div className="d-flex align-items-start gap-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2" style={{ width: 44, height: 44, backgroundColor: 'rgba(56,189,248,0.12)' }}>
                  <AcademicCapIcon style={{ width: 22, height: 22, color: '#38BDF8' }} />
                </div>
                <div className="flex-grow-1 min-w-0">
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                    <h3 className="fw-semibold mb-0" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', color: 'var(--text-primary)' }}>
                      B.Sc. in Information Systems
                    </h3>
                    <span className="d-inline-flex align-items-center px-2 py-0 rounded-2" style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.65rem)', fontWeight: 500, color: '#34D399', backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', whiteSpace: 'nowrap' }}>
                      Recent Graduate
                    </span>
                  </div>
                  <p className="mb-2" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#38BDF8' }}>
                    Faculty of Computers and Information, Tanta University
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', color: 'var(--text-muted)' }}>
                      <MapPinIcon style={{ width: 13, height: 13 }} />
                      Tanta, Egypt
                    </span>
                    <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', color: 'var(--text-muted)' }}>
                      <CalendarDaysIcon style={{ width: 13, height: 13 }} />
                      Sep 2022 - May 2026
                    </span>
                    <span className="d-inline-flex align-items-center gap-1 px-2 py-0 rounded-2" style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', fontWeight: 500, color: '#FBBF24', backgroundColor: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>
                      GPA: 3.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}