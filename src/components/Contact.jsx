import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, ArrowUpRight } from 'lucide-react'

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

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const channels = [
  { label: 'Email', value: 'mofawzy.com7@gmail.com', href: 'mailto:mofawzy.com7@gmail.com', icon: Mail },
  { label: 'Phone', value: '+20 106 880 8559', href: 'tel:+201068808559', icon: Phone },
  { label: 'WhatsApp', value: '+20 106 880 8559', href: 'https://wa.me/201068808559', icon: MessageCircle },
  { label: 'Telegram', value: '@Mofawzyy', href: 'https://t.me/Mofawzyy', icon: Send },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/', icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/M-Fawzy2004', icon: GitHubIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@mo7amedfawzy6', icon: TikTokIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding position-relative">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill border mb-3" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.15)' }}>
            <span className="rounded-circle d-inline-block" style={{ width: 6, height: 6, backgroundColor: '#38BDF8' }} />
            Contact
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>Get in Touch</h2>
          <p className="mb-0 mx-auto" style={{ color: 'var(--text-body)', maxWidth: '36rem', fontSize: '1rem' }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="row g-4 g-lg-5 justify-content-center">
          <div className="col-12 col-lg-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="d-flex flex-column gap-4"
            >
              <div
                className="rounded-3 p-4"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <p className="mb-3" style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: 1.7, color: 'var(--text-body)' }}>
                  I'm currently open to freelance opportunities and collaboration. Whether you need a mobile app built, a prototype developed, or technical consultation — let's talk.
                </p>
                <a
                  href="mailto:mofawzy.com7@gmail.com"
                  className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill text-decoration-none fw-medium"
                  style={{
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(56,189,248,0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3 px-1">
                <span style={{ fontSize: 'clamp(0.65rem, 1.6vw, 0.75rem)', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                  Find me on
                </span>
                <div className="d-flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-2 text-decoration-none"
                      style={{
                        width: 36,
                        height: 36,
                        color: 'var(--text-muted)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-default)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#38BDF8'
                        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'
                        e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.08)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-muted)'
                        e.currentTarget.style.borderColor = 'var(--border-default)'
                        e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
                        e.currentTarget.style.transform = ''
                      }}
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="d-flex flex-column gap-3"
            >
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                  className="d-flex align-items-center gap-3 p-3 rounded-2 text-decoration-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.25)'
                    e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.04)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2"
                    style={{ width: 42, height: 42, color: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.1)' }}
                  >
                    <ch.icon size={20} />
                  </div>
                  <div className="flex-grow-1 min-w-0">
                    <div style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {ch.label}
                    </div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {ch.value}
                    </div>
                  </div>
                  <ArrowUpRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-5 pt-4"
        >
          <p className="mb-0" style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.7rem)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            &copy; {new Date().getFullYear()} Mohamed Fawzy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}