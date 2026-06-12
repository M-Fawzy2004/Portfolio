import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

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
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.2)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#22D3EE', animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
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
          <div className="card border-0 d-flex flex-row align-items-start gap-3 p-4" style={{ borderRadius: 24 }}>
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3" style={{ width: 48, height: 48, background: 'linear-gradient(135deg, #22D3EE, #8B5CF6)' }}>
              <AcademicCapIcon style={{ width: 24, height: 24, color: '#fff' }} />
            </div>
            <div>
              <h3 className="fw-semibold mb-1" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', color: 'var(--text-primary)' }}>
                B.Sc. in Information Systems
              </h3>
              <p className="mb-1" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#22D3EE' }}>
                Faculty of Computers and Information, Tanta University
              </p>
              <p className="mb-0" style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', color: 'var(--text-muted)' }}>2022 - 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
