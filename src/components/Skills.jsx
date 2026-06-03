import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const skillGroups = [
  {
    title: 'Mobile Development',
    icon: CodeBracketIcon,
    color: 'from-cyan-400 to-blue-400',
    skills: ['Flutter', 'Dart', 'Cross-Platform', 'Responsive UI', 'Performance Optimization', 'Localization'],
  },
  {
    title: 'Architecture & State Management',
    icon: CpuChipIcon,
    color: 'from-violet-400 to-purple-400',
    skills: ['Clean Architecture', 'BLoC', 'Cubit', 'Provider', 'MVVM', 'Get It', 'GoRouter'],
  },
  {
    title: 'Backend & Integration',
    icon: ServerStackIcon,
    color: 'from-cyan-400 to-teal-400',
    skills: ['Supabase', 'Firebase', 'RESTful APIs', 'Dio', 'HTTP', 'Paymob', 'Stripe'],
  },
  {
    title: 'AI & Specialized Tech',
    icon: CommandLineIcon,
    color: 'from-amber-400 to-orange-400',
    skills: ['Gemini AI', 'PDF Processing', 'Image Processing'],
  },
  {
    title: 'Core Tools',
    icon: WrenchScrewdriverIcon,
    color: 'from-emerald-400 to-green-400',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Tech Stack</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Technologies and tools I work with daily to build exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className={`group relative p-5 sm:p-6 glass glass-hover rounded-[24px] ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-2.5 rounded-[16px] bg-gradient-to-br ${group.color} bg-opacity-10`}>
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mt-1">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-[12px] bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-200 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
