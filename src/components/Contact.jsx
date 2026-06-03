import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react'

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Contact() {
  return (
    <footer id="contact" className="relative section-padding pb-8">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Let's Connect</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Open to opportunities, collaborations, and conversations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl mx-auto space-y-3"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <motion.div variants={cardVariants} className="sm:col-span-2">
              <a
                href="mailto:mofawzy.com7@gmail.com"
                className="group flex items-center gap-3 glass-liquid glass-hover rounded-[20px] p-4 h-full"
              >
                <div className="p-2 rounded-[12px] bg-gradient-to-br from-cyan-400 to-violet-400/80 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500 mb-0.5">Email</p>
                  <p className="text-xs text-gray-200 group-hover:text-cyan-300 transition-colors truncate">
                    mofawzy.com7@gmail.com
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="tel:+201068808559"
                className="group flex items-center gap-3 glass-liquid glass-hover rounded-[20px] p-4 h-full"
              >
                <div className="p-2 rounded-[12px] bg-gradient-to-br from-cyan-400 to-teal-400/80 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500 mb-0.5">Phone</p>
                  <p className="text-xs text-gray-200 group-hover:text-cyan-300 transition-colors truncate">
                    +20 106 880 8559
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="https://wa.me/201068808559"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 glass-liquid rounded-[20px] p-4 h-full transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/30 hover:shadow-[0_0_24px_rgba(34,197,94,0.06)]"
              >
                <div className="p-2 rounded-[12px] bg-green-500/15 group-hover:bg-green-500/25 transition-colors duration-300">
                  <MessageCircle className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">WhatsApp</p>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="https://t.me/+201068808559"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 glass-liquid rounded-[20px] p-4 h-full transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 hover:shadow-[0_0_24px_rgba(59,130,246,0.06)]"
              >
                <div className="p-2 rounded-[12px] bg-blue-500/15 group-hover:bg-blue-500/25 transition-colors duration-300">
                  <Send className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">Telegram</p>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="https://www.linkedin.com/in/mohamed-fawzy-02388729b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 glass-liquid rounded-[20px] p-4 h-full transition-all duration-500 hover:bg-blue-500/10 hover:border-blue-500/30"
              >
                <div className="p-2 rounded-[12px] bg-blue-500/15 group-hover:bg-blue-500/25 transition-all duration-500">
                  <LinkedInIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-all duration-500" />
                </div>
                <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">LinkedIn</p>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="https://github.com/M-Fawzy2004"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 glass-liquid rounded-[20px] p-4 h-full transition-all duration-300 hover:bg-white/5 hover:border-white/20"
              >
                <div className="p-2 rounded-[12px] bg-white/10 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-110">
                  <GitHubIcon className="w-4 h-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                </div>
                <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">GitHub</p>
              </a>
            </motion.div>

            <motion.div variants={cardVariants}>
              <a
                href="https://www.tiktok.com/@mo7amedfawzy6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-1.5 glass-liquid rounded-[20px] p-4 h-full transition-all duration-300 hover:bg-white/5 hover:border-white/20"
              >
                <div className="p-2 rounded-[12px] bg-white/10 group-hover:bg-white/15 transition-all duration-300">
                  <TikTokIcon className="w-4 h-4 text-gray-300 group-hover:text-white transition-all duration-300" />
                </div>
                <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">TikTok</p>
              </a>
            </motion.div>

            <motion.div variants={cardVariants} className="col-span-2 sm:col-span-4">
              <div className="glass-liquid rounded-[20px] p-4 flex items-center gap-3">
                <div className="radar-pulse flex-shrink-0">
                  <div className="p-2 rounded-[12px] bg-emerald-500/15">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <p className="text-xs text-gray-200">
                  El Mahalla El Kubra, Gharbia Governorate, Egypt —{' '}
                  <span className="text-emerald-400/80 font-medium">Open to Remote / Relocation</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10 pt-6 border-t border-white/5"
        >
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Mohamed Fawzy. Built with precision.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
