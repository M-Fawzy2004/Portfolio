import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  ArrowRight,
  Copy,
  Check,
  FileText,
  MessageCircle,
  Sun,
  Moon,
  Sparkles,
  Smartphone,
  Layers,
  GraduationCap,
  Briefcase,
  Mail,
  X
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { 
  AppleIcon, 
  GooglePlayIcon, 
  GitHubIcon, 
  LinkedInIcon 
} from './TechIcons';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedKey, setCopiedKey] = useState(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Listen for global Cmd+K, Ctrl+K, or / shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery('');
            setSelectedIndex(0);
          }
          return !prev;
        });
        return;
      }

      // Open on '/' if not in an input
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        setQuery('');
        setSelectedIndex(0);
        setIsOpen(true);
        return;
      }

      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setQuery('');
      setSelectedIndex(0);
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input on open & hide top bar
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('modal-open');
      };
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const selectAppAndScroll = (appId) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('select-app', { detail: { id: appId } }));
    const el = document.getElementById('apps');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commandItems = [
    // Production Applications
    {
      id: 'app-sakina',
      title: 'Sakina (Islamic Sanctuary & 4K Reel Studio)',
      category: 'Production Mobile Apps',
      badge: 'App Store & Google Play',
      icon: Smartphone,
      keywords: 'sakina quran reel video ffmpeg prayer astronomical islam',
      action: () => selectAppAndScroll('sakina')
    },
    {
      id: 'app-docmate',
      title: 'DocMate Healthcare Platform',
      category: 'Production Mobile Apps',
      badge: 'App Store & Google Play',
      icon: Smartphone,
      keywords: 'docmate curacare doctor clinic medical appointment queue supabase',
      action: () => selectAppAndScroll('docmate')
    },
    {
      id: 'app-academia',
      title: 'Academia AI (Gemini 1.5 Study Companion)',
      category: 'Production Mobile Apps',
      badge: 'App Store & Google Play',
      icon: Smartphone,
      keywords: 'academia gemini ai pdf quiz education study notes',
      action: () => selectAppAndScroll('academia')
    },
    {
      id: 'app-parkmate',
      title: 'ParkMate (Mapbox GPS Navigator)',
      category: 'Production Mobile Apps',
      badge: 'Mapbox GPS',
      icon: Smartphone,
      keywords: 'parkmate car parking gps mapbox geocoding walking route',
      action: () => selectAppAndScroll('parkmate')
    },
    {
      id: 'app-transit',
      title: 'Child Transit Hub (Parent & Driver Fleet)',
      category: 'Production Mobile Apps',
      badge: 'Capstone Distinction',
      icon: Smartphone,
      keywords: 'transportation school bus parent driver live telemetry graduation',
      action: () => selectAppAndScroll('transport')
    },
    {
      id: 'app-shop',
      title: 'Shop Ecosystem (Paymob & Google Maps)',
      category: 'Production Mobile Apps',
      badge: 'Paymob Commercial',
      icon: Smartphone,
      keywords: 'shop ecommerce paymob store payment maps dispatch delivery',
      action: () => selectAppAndScroll('ecommerce')
    },

    // Quick Executive Actions
    {
      id: 'act-resume',
      title: 'Download Resume / CV (PDF)',
      category: 'Quick Actions',
      badge: 'PDF',
      icon: FileText,
      keywords: 'resume cv curriculum vitae pdf download mohamed fawzy flutter',
      action: () => {
        setIsOpen(false);
        window.open('/cv/Mohamed_Fawzy_Flutter_CV.pdf', '_blank');
      }
    },
    {
      id: 'act-whatsapp',
      title: 'Direct WhatsApp Chat (+20 106 880 5663)',
      category: 'Quick Actions',
      badge: 'Instant',
      icon: MessageCircle,
      keywords: 'whatsapp chat phone contact message talk call',
      action: () => {
        setIsOpen(false);
        window.open('https://wa.me/201068805663', '_blank');
      }
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email (mo7amedfawzy663@gmail.com)',
      category: 'Quick Actions',
      badge: copiedKey === 'email' ? 'Copied!' : 'Clipboard',
      icon: copiedKey === 'email' ? Check : Copy,
      keywords: 'email mail address copy mo7amedfawzy663',
      action: () => copyToClipboard('mo7amedfawzy663@gmail.com', 'email')
    },
    {
      id: 'act-copy-phone',
      title: 'Copy Phone (+20 106 880 5663)',
      category: 'Quick Actions',
      badge: copiedKey === 'phone' ? 'Copied!' : 'Clipboard',
      icon: copiedKey === 'phone' ? Check : Copy,
      keywords: 'phone call mobile number copy +201068805663',
      action: () => copyToClipboard('+201068805663', 'phone')
    },
    {
      id: 'act-toggle-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Quick Actions',
      badge: 'Theme',
      icon: theme === 'dark' ? Sun : Moon,
      keywords: 'theme dark light mode color toggle',
      action: () => {
        toggleTheme();
      }
    },

    // Section Navigation
    {
      id: 'nav-apps',
      title: 'Interactive Mobile Stage (6 Apps)',
      category: 'Navigation',
      badge: '#apps',
      icon: Smartphone,
      keywords: 'apps mobile stage screens showcase demo',
      action: () => scrollToSection('apps')
    },
    {
      id: 'nav-experience',
      title: 'Commercial Production Experience',
      category: 'Navigation',
      badge: '#experience',
      icon: Briefcase,
      keywords: 'experience work history freelance companies published apps',
      action: () => scrollToSection('experience')
    },
    {
      id: 'nav-projects',
      title: 'Featured Projects & Architectural Audits',
      category: 'Navigation',
      badge: '#projects',
      icon: Layers,
      keywords: 'projects portfolio apps sakina docmate academia',
      action: () => scrollToSection('projects')
    },
    {
      id: 'nav-skills',
      title: 'Clean Architecture & Technical Stack',
      category: 'Navigation',
      badge: '#skills',
      icon: Sparkles,
      keywords: 'skills clean architecture bloc cubit dart flutter supabase dio solid',
      action: () => scrollToSection('skills')
    },
    {
      id: 'nav-about',
      title: 'Engineering Philosophy & About Mohamed',
      category: 'Navigation',
      badge: '#about',
      icon: Briefcase,
      keywords: 'about bio engineer background philosophy story',
      action: () => scrollToSection('about')
    },
    {
      id: 'nav-education',
      title: 'Academic Foundations & Capstone Distinction',
      category: 'Navigation',
      badge: '#education',
      icon: GraduationCap,
      keywords: 'education university degree computer science information systems gpa',
      action: () => scrollToSection('education')
    },
    {
      id: 'nav-contact',
      title: 'Contact & Hiring Inquiries',
      category: 'Navigation',
      badge: '#contact',
      icon: Mail,
      keywords: 'contact hire message touch inquiry contract role',
      action: () => scrollToSection('contact')
    },

    // Verified Store & Profile Links
    {
      id: 'store-sakina-apple',
      title: 'Sakina on Apple App Store',
      category: 'Store & Profiles',
      badge: 'Live Store',
      icon: AppleIcon,
      keywords: 'sakina apple app store ios download',
      action: () => {
        setIsOpen(false);
        window.open('https://apps.apple.com/us/app/id6831748362', '_blank');
      }
    },
    {
      id: 'store-sakina-play',
      title: 'Sakina on Google Play Store',
      category: 'Store & Profiles',
      badge: 'Live Store',
      icon: GooglePlayIcon,
      keywords: 'sakina google play android download',
      action: () => {
        setIsOpen(false);
        window.open('https://play.google.com/store/apps/details?id=com.sakina.islamic', '_blank');
      }
    },
    {
      id: 'store-docmate-apple',
      title: 'DocMate on Apple App Store',
      category: 'Store & Profiles',
      badge: 'Live Store',
      icon: AppleIcon,
      keywords: 'docmate apple app store clinic appointment',
      action: () => {
        setIsOpen(false);
        window.open('https://apps.apple.com/us/app/docmate-clinic-appointments/id6819001621', '_blank');
      }
    },
    {
      id: 'store-academia-apple',
      title: 'Academia AI on Apple App Store',
      category: 'Store & Profiles',
      badge: 'Live Store',
      icon: AppleIcon,
      keywords: 'academia apple app store gemini study',
      action: () => {
        setIsOpen(false);
        window.open('https://apps.apple.com/us/app/academia-ai-all-in-one-study/id6815206996', '_blank');
      }
    },
    {
      id: 'profile-github',
      title: 'Mohamed Fawzy on GitHub (@M-Fawzy2004)',
      category: 'Store & Profiles',
      badge: 'GitHub',
      icon: GitHubIcon,
      keywords: 'github code repo source repositories',
      action: () => {
        setIsOpen(false);
        window.open('https://github.com/M-Fawzy2004', '_blank');
      }
    },
    {
      id: 'profile-linkedin',
      title: 'Mohamed Fawzy on LinkedIn',
      category: 'Store & Profiles',
      badge: 'LinkedIn',
      icon: LinkedInIcon,
      keywords: 'linkedin profile network connect professional',
      action: () => {
        setIsOpen(false);
        window.open('https://www.linkedin.com/in/mohamed-fawzy-02388729b/', '_blank');
      }
    }
  ];

  // Filter items based on query
  const filteredItems = commandItems.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  // Handle arrow navigation and enter key
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Palette Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 400 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#0D1117] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[70vh] z-10"
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#131822]">
              <Search size={18} className="text-sky-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, search apps, jump to section..."
                className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder:text-slate-400 font-sans"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.04] scrollbar-thin scrollbar-thumb-white/10"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs font-mono">
                  No commands matching "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      data-active={isSelected}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500/15 border border-sky-500/30 text-white'
                          : 'bg-transparent border border-transparent text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? 'bg-sky-500 text-white shadow-xs'
                              : 'bg-white/5 text-sky-400 border border-white/5'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-semibold truncate flex items-center gap-2">
                            <span>{item.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isSelected
                              ? 'bg-sky-500/30 text-sky-200 border border-sky-400/30'
                              : 'bg-white/5 text-slate-400 border border-white/5'
                          }`}
                        >
                          {item.badge}
                        </span>
                        {isSelected && (
                          <ArrowRight size={13} className="text-sky-400 hidden sm:block" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Shortcuts Strip */}
            <div className="px-4 py-2.5 bg-[#090C10] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↓</kbd>
                  <span className="text-[10px]">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↵</kbd>
                  <span className="text-[10px]">Select</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sky-400 font-sans text-[11px]">
                <Command size={11} />
                <span>Command Center</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
