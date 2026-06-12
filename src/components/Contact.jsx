import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react'
import myAvatar from '../assets/my_photo.jpg'

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const contacts = [
  { label: 'Email', value: 'mofawzy.com7@gmail.com', href: 'mailto:mofawzy.com7@gmail.com', icon: Mail, color: '#22D3EE' },
  { label: 'Phone', value: '+20 106 880 8559', href: 'tel:+201068808559', icon: Phone, color: '#14B8A6' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mfawzy', href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/', icon: LinkedInIcon, color: '#60A5FA' },
  { label: 'GitHub', value: 'github.com/Mofawzyy', href: 'https://github.com/M-Fawzy2004', icon: GitHubIcon, color: '#D1D5DB' },
  { label: 'WhatsApp', value: 'Chat with me', href: 'https://wa.me/201068808559', icon: MessageCircle, color: '#34D399' },
  { label: 'TikTok', value: '@mo7amedfawzy6', href: 'https://www.tiktok.com/@mo7amedfawzy6', icon: TikTokIcon, color: '#ffffff' },
  { label: 'Telegram', value: '@Mofawzyy', href: 'https://t.me/Mofawzyy', icon: Send, color: '#60A5FA' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="contact" className="section-padding position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Subtle ambient glow */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          className="position-absolute rounded-circle"
          style={{ top: '15%', right: '10%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)', filter: 'blur(80px)' }}
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="position-absolute rounded-circle"
          style={{ bottom: '15%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)', filter: 'blur(80px)' }}
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <motion.div
        className="position-relative mx-auto w-100 max-container"
        style={{ zIndex: 1, padding: '0 1.5rem' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Column: Heading, Description & Profile Card */}
          <div className="col-12 col-lg-5 mb-5 mb-lg-0">
            <div className="d-flex flex-column align-items-start text-start mb-4">
              <motion.span
                variants={itemVariants}
                className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3"
                style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.7rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22D3EE', backgroundColor: 'rgba(34,211,238,0.08)', borderColor: 'rgba(34,211,238,0.15)' }}
              >
                <span className="rounded-circle d-inline-block" style={{ width: 5, height: 5, backgroundColor: '#22D3EE' }} />
                Communication
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="fw-bold mb-2 lh-1"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}
              >
                Let's <br />
                <span className="text-gradient">Connect</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mb-4"
                style={{ fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)', color: 'var(--text-body)', maxWidth: '28rem', lineHeight: 1.6 }}
              >
                Feel free to reach out to me through any of the channels below. I'll get back to you as soon as possible!
              </motion.p>
            </div>

            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="position-relative overflow-hidden contact-card-mobile"
              style={{
                borderRadius: 28,
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                backdropFilter: 'blur(40px) saturate(1.6)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-card)',
                padding: '2rem',
              }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Profile layout inside card */}
              <div className="d-flex align-items-center gap-4 mb-4">
                {/* Circular Avatar */}
                <div className="position-relative flex-shrink-0">
                  <div 
                    className="rounded-circle overflow-hidden border border-2 border-primary-subtle"
                    style={{
                      width: 80,
                      height: 80,
                      boxShadow: '0 0 20px rgba(34,211,238,0.15)',
                    }}
                  >
                    <img 
                      src={myAvatar} 
                      alt="Mohamed Fawzy" 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  {/* Availability Dot */}
                  <span 
                    className="position-absolute rounded-circle"
                    style={{
                      bottom: 2,
                      right: 2,
                      width: 14,
                      height: 14,
                      backgroundColor: '#0EA5E9',
                      border: '2px solid var(--bg-primary)',
                      boxShadow: '0 0 10px #0EA5E9',
                    }}
                  >
                    <span 
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                      style={{
                        backgroundColor: '#0EA5E9',
                        opacity: 0.6,
                        animation: 'radar-ping 2s cubic-bezier(0,0,0.2,1) infinite',
                      }}
                    />
                  </span>
                </div>

                {/* Name & Title */}
                <div className="text-start">
                  <h3 className="fw-bold mb-1" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', color: 'var(--text-primary)' }}>Mohamed Fawzy</h3>
                  <p className="mb-0 text-gradient fw-semibold" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>Flutter Developer</p>
                </div>
              </div>

              {/* Tagline / short professional description */}
              <p className="mb-4 text-start" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: 1.6, color: 'var(--text-body)' }}>
                Building beautiful, functional and high-performance mobile apps with Flutter.
              </p>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: 'var(--border-default)', margin: '1.5rem 0' }} />

              {/* Social Links Row */}
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <span style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.75rem)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Let's connect
                </span>
                <div className="d-flex gap-2">
                  {/* GitHub Button */}
                  <a
                    href="https://github.com/M-Fawzy2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle border text-decoration-none"
                    style={{
                      width: 38,
                      height: 38,
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--btn-outline-bg)',
                      borderColor: 'var(--border-default)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-hover-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-hover)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-default)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <GitHubIcon size={16} />
                  </a>
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/mohamed-fawzy-02388729b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle border text-decoration-none"
                    style={{
                      width: 38,
                      height: 38,
                      color: '#60A5FA',
                      backgroundColor: 'var(--btn-outline-bg)',
                      borderColor: 'var(--border-default)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(96,165,250,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(96,165,250,0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-default)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <LinkedInIcon size={16} />
                  </a>
                  {/* Twitter Button */}
                  <a
                    href="https://x.com/Mofawzyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle border text-decoration-none"
                    style={{
                      width: 38,
                      height: 38,
                      color: '#38BDF8',
                      backgroundColor: 'var(--btn-outline-bg)',
                      borderColor: 'var(--border-default)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(56,189,248,0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-default)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <TwitterIcon size={16} />
                  </a>
                  {/* TikTok Button */}
                  <a
                    href="https://www.tiktok.com/@mo7amedfawzy6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle border text-decoration-none"
                    style={{
                      width: 38,
                      height: 38,
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--btn-outline-bg)',
                      borderColor: 'var(--border-default)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-hover-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-hover)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--btn-outline-bg)'
                      e.currentTarget.style.borderColor = 'var(--border-default)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <TikTokIcon size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 2-Column Grid of Contact Cards */}
          <div className="col-12 col-lg-7">
            <div className="row row-cols-1 row-cols-sm-2 g-3 g-lg-4">
              {contacts.map((contact, index) => {
                const isHovered = hoveredIndex === index
                return (
                  <div key={contact.label} className="col">
                    <motion.a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="d-flex align-items-center gap-3 p-4 contact-card-mobile text-decoration-none w-100 animate-transition"
                      style={{
                        borderRadius: 24,
                        background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                        backdropFilter: 'blur(30px) saturate(1.4)',
                        border: '1px solid',
                        borderColor: isHovered ? `${contact.color}35` : 'var(--border-default)',
                        boxShadow: isHovered 
                          ? `0 12px 32px -8px ${contact.color}25, 0 0 24px -4px ${contact.color}15`
                          : 'var(--shadow-card)',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -5, scale: 1.02 }}
                      variants={itemVariants}
                    >
                      {/* Left circular icon wrapper */}
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                        style={{
                          width: 52,
                          height: 52,
                          backgroundColor: isHovered ? `${contact.color}20` : `${contact.color}10`,
                          border: `1px solid ${contact.color}25`,
                          color: contact.color,
                          transition: 'all 0.3s ease',
                          boxShadow: isHovered ? `0 0 16px ${contact.color}15` : 'none',
                        }}
                      >
                        <contact.icon size={22} />
                      </div>

                      {/* Info labels */}
                      <div className="min-w-0 flex-grow-1 text-start">
                        <span 
                          className="d-block mb-1" 
                          style={{ 
                            fontSize: 'clamp(0.55rem, 1.5vw, 0.65rem)', 
                            fontWeight: 600, 
                            letterSpacing: '0.08em', 
                            textTransform: 'uppercase', 
                            color: 'var(--text-muted)' 
                          }}
                        >
                          {contact.label}
                        </span>
                        <span 
                          className="d-block text-truncate" 
                          style={{ 
                            fontSize: 'clamp(0.75rem, 2.2vw, 0.9rem)', 
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            opacity: 0.9
                          }}
                        >
                          {contact.value}
                        </span>
                      </div>

                      {/* Right click indicator arrow */}
                      <div 
                        style={{ 
                          color: isHovered ? contact.color : 'var(--text-muted)', 
                          flexShrink: 0,
                          transform: isHovered ? 'translateX(3px)' : 'none',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <ArrowRight size={18} />
                      </div>
                    </motion.a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-5 pt-4"
        >
          <p className="mb-0" style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.7rem)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            &copy; {new Date().getFullYear()} Mohamed Fawzy. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
