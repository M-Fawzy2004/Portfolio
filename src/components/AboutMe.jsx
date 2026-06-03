import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-liquid rounded-[32px] p-8 sm:p-10 lg:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
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
    </section>
  )
}
