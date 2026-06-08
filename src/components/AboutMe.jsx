import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Experience', value: '1+ Year', icon: CommandLineIcon },
  { label: 'Platforms', value: 'iOS & Android', icon: DevicePhoneMobileIcon },
  { label: 'Focus', value: 'Clean Code', icon: CodeBracketIcon },
]

export default function AboutMe() {
  return (
    <section id="about" className="section-padding position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none">
        <div
          className="position-absolute rounded-circle"
          style={{
            top: -128, left: -128, width: 400, height: 400,
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
            opacity: 0.03,
            animation: 'float-glow 8s ease-in-out infinite',
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            bottom: -128, right: -128, width: 400, height: 400,
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            opacity: 0.02,
            animation: 'float-glow 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="max-container position-relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.2)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#22D3EE', animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite' }} />
            Profile
          </span>
          <h2 className="fw-bold text-white mb-0" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="mx-auto" style={{ maxWidth: '56rem' }}>
          <div className="d-flex flex-column gap-4">
            {/* Stats row */}
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
                    className="card text-center p-3 h-100 border-0"
                    style={{ borderRadius: 16, cursor: 'default' }}
                  >
                    <stat.icon className="mx-auto mb-2" style={{ width: 20, height: 20, color: 'rgba(34,211,238,0.6)' }} />
                    <p className="fw-bold text-white mb-0" style={{ fontSize: '1.125rem' }}>{stat.value}</p>
                    <p className="mb-0" style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#6B7280' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="card position-relative overflow-hidden border-0" style={{ borderRadius: 32, padding: '3rem 2.5rem' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.03), transparent, rgba(139,92,246,0.03))', opacity: 0, transition: 'opacity 0.7s' }} className="group-hover-opacity" />
                <div className="position-absolute" style={{ top: -24, right: -16, fontSize: '160px', fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,0.015)', userSelect: 'none', pointerEvents: 'none' }}>
                  &rdquo;
                </div>
                <p className="mb-0 position-relative" style={{ zIndex: 10, fontSize: '1.125rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', fontWeight: 300, letterSpacing: '0.02em' }}>
                  Passionate <span className="fw-semibold" style={{ background: 'linear-gradient(135deg, #22D3EE, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flutter Developer</span> with 1+ year of hands-on experience building high-performance cross-platform mobile applications for <span className="fw-medium text-white">iOS</span> and <span className="fw-medium text-white">Android</span>.
                  <br /><br />
                  Skilled in <span className="fw-medium text-white">Clean Architecture</span>, <span className="fw-medium text-white">BLoC/Cubit</span> state management, <span className="fw-medium text-white">RESTful APIs</span>, <span className="fw-medium text-white">Firebase</span>, and <span className="fw-medium text-white">Supabase</span>. Proven track record of developing and deploying real-world solutions, including <span className="fw-medium" style={{ color: '#67E8F9' }}>AI-powered platforms</span> and <span className="fw-medium" style={{ color: '#67E8F9' }}>e-commerce applications</span> with secure payment gateway integration.
                  <br /><br />
                  Dedicated to writing clean, scalable code while delivering responsive, user-friendly mobile experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
