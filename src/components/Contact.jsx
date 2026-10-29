import { useState, useEffect } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock, 
  MapPin
} from 'lucide-react';
import { 
  WhatsAppIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  TikTokIcon, 
  TelegramIcon 
} from './TechIcons';

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+20 106 880 5663',
    href: 'https://wa.me/201068805663?text=Hi%20Mohamed,%20I%20saw%20your%20Flutter%20portfolio%20and%20would%20like%20to%20connect!',
    icon: WhatsAppIcon,
    badge: 'Fastest Response',
  },
  {
    id: 'email',
    label: 'Direct Email',
    value: 'mohamedfawzydev27@gmail.com',
    href: 'mailto:mohamedfawzydev27@gmail.com',
    icon: Mail,
    badge: 'Direct Inbox',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@M07amedFawzy',
    href: 'https://t.me/M07amedFawzy',
    icon: TelegramIcon,
    badge: 'Direct Message',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Mohamed Fawzy',
    href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/',
    icon: LinkedInIcon,
    badge: 'Professional Network',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'M-Fawzy2004',
    href: 'https://github.com/M-Fawzy2004',
    icon: GitHubIcon,
    badge: 'Source Repositories',
  },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cairoTime, setCairoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCairoTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('mohamedfawzydev27@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-container">

        {/* Contact Bento Box */}
        <div className="bento-card p-6 sm:p-10 mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Call to Action */}
            <div className="lg:col-span-7">
              <div className="pill-badge mb-3">
                <span className="radar-dot">
                  <span className="radar-dot-ping" />
                  <span className="radar-dot-core" />
                </span>
                <span>Open for Opportunities</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 leading-tight">
                Let's discuss your next mobile application.
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
                Available for full-time engineering roles, freelance contracts, and mobile architecture consulting. Whether building an app from scratch or scaling an existing production codebase, let's connect.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/201068805663?text=Hi%20Mohamed,%20I%20saw%20your%20Flutter%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action text-xs"
                >
                  <WhatsAppIcon size={15} />
                  <span>Start WhatsApp Chat</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary-action text-xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Cairo Local Time */}
              <div className="mt-7 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-emerald-400" />
                  <span>Cairo, Egypt (GMT+2)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-sky-400" />
                  <span>Local Time: {cairoTime || 'Loading...'}</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Channels */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <a
                    key={ch.id}
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:border-sky-500/50 hover:bg-[var(--bg-tertiary)] transition-all flex items-center justify-between group text-decoration-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[var(--text-primary)]">
                            {ch.label}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-[var(--text-muted)]">
                            {ch.badge}
                          </span>
                        </div>
                        <span className="text-xs text-[var(--text-secondary)] font-mono">
                          {ch.value}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight 
                      size={14} 
                      className="text-slate-500 group-hover:text-sky-400 transition-colors" 
                    />
                  </a>
                );
              })}
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-lg bg-sky-600 flex items-center justify-center text-white font-mono font-bold text-[10px]">
              MF
            </span>
            <span>&copy; {new Date().getFullYear()} Mohamed Fawzy • Mobile Engineer & Flutter Developer</span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { label: 'WhatsApp', href: 'https://wa.me/201068805663', icon: WhatsAppIcon },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-fawzy-02388729b/', icon: LinkedInIcon },
              { label: 'GitHub', href: 'https://github.com/M-Fawzy2004', icon: GitHubIcon },
              { label: 'TikTok', href: 'https://www.tiktok.com/@mo7amedfawzy6', icon: TikTokIcon },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-muted)] hover:text-white hover:border-[var(--border-hover)] transition-colors text-decoration-none"
                  title={s.label}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </footer>

      </div>
    </section>
  );
}
