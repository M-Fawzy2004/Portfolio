import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass glass-hover rounded-[24px] p-6 sm:p-8 flex items-start gap-5">
            <div className="p-3 rounded-[16px] bg-gradient-to-br from-cyan-400 to-violet-400 flex-shrink-0">
              <AcademicCapIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                B.Sc. in Information Systems
              </h3>
              <p className="text-sm text-cyan-300 mb-2">
                Faculty of Computers and Information, Tanta University
              </p>
              <p className="text-xs text-gray-500">2022 - 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
