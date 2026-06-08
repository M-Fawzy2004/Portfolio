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
    <section id="experience" className="section-padding relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Experience</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            My professional journey in mobile development
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-2.5 sm:left-3 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 shadow-lg shadow-cyan-500/25 z-10" />

                <div className="glass glass-hover rounded-[24px] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-gray-500">{exp.type}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-2">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-cyan-300 mb-3 flex items-center gap-1.5">
                    <BriefcaseIcon className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
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
