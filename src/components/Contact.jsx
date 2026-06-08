import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, MapPin, Send, Heart } from 'lucide-react'

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

const contactMethods = [
  {
    label: 'Email',
    value: 'mofawzy.com7@gmail.com',
    href: 'mailto:mofawzy.com7@gmail.com',
    icon: Mail,
    gradient: 'from-cyan-400 to-violet-400/80',
    hoverColor: 'hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]',
    cols: 'sm:col-span-2',
    variant: 'row',
  },
  {
    label: 'Phone',
    value: '+20 106 880 8559',
    href: 'tel:+201068808559',
    icon: Phone,
    gradient: 'from-cyan-400 to-teal-400/80',
    hoverColor: 'hover:border-teal-500/30 hover:shadow-[0_0_40px_rgba(45,212,191,0.06)]',
    cols: '',
    variant: 'row',
  },
]

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201068808559',
    icon: MessageCircle,
    gradient: 'from-green-500 to-emerald-500',
    hoverBg: 'hover:bg-green-500/10 hover:border-green-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400 group-hover:text-green-300',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/+201068808559',
    icon: Send,
    gradient: 'from-blue-500 to-cyan-500',
    hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/',
    icon: LinkedInIcon,
    gradient: 'from-blue-500 to-blue-600',
    hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/M-Fawzy2004',
    icon: GitHubIcon,
    gradient: 'from-gray-200 to-white',
    hoverBg: 'hover:bg-white/5 hover:border-white/20',
    glow: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]',
    iconBg: 'bg-white/10',
    iconColor: 'text-gray-300 group-hover:text-white',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@mo7amedfawzy6',
    icon: TikTokIcon,
    gradient: 'from-white to-gray-300',
    hoverBg: 'hover:bg-white/5 hover:border-white/20',
    glow: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]',
    iconBg: 'bg-white/10',
    iconColor: 'text-gray-300 group-hover:text-white',
  },
]

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
    <footer id="contact" className="relative section-padding pb-8 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
            animation: 'float-glow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            animation: 'float-glow 10s ease-in-out infinite 2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, #34D399 0%, transparent 70%)',
            animation: 'float-glow 12s ease-in-out infinite 4s',
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
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            I'm always open to new opportunities, collaborations, and conversations — feel free to reach out!
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
            {contactMethods.map((method) => (
              <motion.div key={method.label} variants={cardVariants} className={method.cols}>
                <a
                  href={method.href}
                  className={`group flex items-center gap-3 glass-liquid rounded-[20px] p-4 h-full transition-all duration-400 ${method.hoverColor}`}
                >
                  <div className={`p-2.5 rounded-[14px] bg-gradient-to-br ${method.gradient} shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-400`}>
                    <method.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500 mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-xs text-gray-200 group-hover:text-cyan-300 transition-colors truncate font-medium">
                      {method.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}

            {socialLinks.map((link) => (
              <motion.div key={link.label} variants={cardVariants}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center justify-center gap-2 glass-liquid rounded-[20px] p-4 h-full transition-all duration-400 ${link.hoverBg} ${link.glow} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className={`p-2.5 rounded-[14px] ${link.iconBg} group-hover:scale-110 transition-all duration-400 ${link.iconColor}`}>
                    <link.icon className="w-4 h-4" />
                  </div>
                  <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500">
                    {link.label}
                  </p>
                </a>
              </motion.div>
            ))}

            <motion.div variants={cardVariants} className="col-span-2 sm:col-span-4">
              <div className="glass-liquid rounded-[20px] p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group transition-all duration-400 hover:border-emerald-500/20 hover:shadow-[0_0_40px_rgba(52,211,153,0.04)]">
                <div className="radar-pulse flex-shrink-0">
                  <div className="p-2.5 rounded-[14px] bg-emerald-500/15 group-hover:scale-110 transition-transform duration-400">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-medium tracking-wider uppercase text-gray-500 mb-0.5">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200">
                    El Mahalla El Kubra, Gharbia Governorate, Egypt —{' '}
                    <span className="text-emerald-400/80 font-semibold">Open to Remote / Relocation</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-14 pt-8"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-xs text-gray-600 bg-[#050507]">
                &copy; {new Date().getFullYear()} Mohamed Fawzy — Built with <Heart className="w-3 h-3 inline-block text-red-500/60 align-middle" /> and precision
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
