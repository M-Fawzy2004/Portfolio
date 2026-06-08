import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Experience', value: '1+ Year', icon: CommandLineIcon },
  { label: 'Platforms', value: 'iOS & Android', icon: DevicePhoneMobileIcon },
  { label: 'Focus', value: 'Clean Code', icon: CodeBracketIcon },
]

export default function AboutMe() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
            animation: 'float-glow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            animation: 'float-glow 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-[16px] p-4 sm:p-5 text-center group hover:border-cyan-500/15 transition-all duration-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.03)]"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400/60 mx-auto mb-2 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-400" />
                <p className="text-base sm:text-lg font-bold text-white mb-0.5">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide uppercase">{stat.label}</p>
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
            <div className="glass-liquid rounded-[32px] p-8 sm:p-10 lg:p-12 relative overflow-hidden group">
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

              {/* Decorative quote mark */}
              <div className="absolute -top-6 -right-4 text-[120px] sm:text-[160px] font-bold leading-none text-white/[0.015] select-none pointer-events-none">
                &rdquo;
              </div>

              {/* Decorative gradient line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <p className="text-base sm:text-lg lg:text-xl text-gray-300/90 leading-relaxed sm:leading-loose font-light tracking-wide relative z-10">
                Passionate <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Flutter Developer</span> with 1+ year of hands-on experience building high-performance cross-platform mobile applications for <span className="text-white font-medium">iOS</span> and <span className="text-white font-medium">Android</span>.
                <br /><br />
                Skilled in <span className="text-white font-medium">Clean Architecture</span>, <span className="text-white font-medium">BLoC/Cubit</span> state management, <span className="text-white font-medium">RESTful APIs</span>, <span className="text-white font-medium">Firebase</span>, and <span className="text-white font-medium">Supabase</span>. Proven track record of developing and deploying real-world solutions, including <span className="text-cyan-200 font-medium">AI-powered platforms</span> and <span className="text-cyan-200 font-medium">e-commerce applications</span> with secure payment gateway integration.
                <br /><br />
                Dedicated to writing clean, scalable code while delivering responsive, user-friendly mobile experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
