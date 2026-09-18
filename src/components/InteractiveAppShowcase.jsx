import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  ShoppingBag, 
  ArrowUpRight,
  MousePointer,
  Layers,
  ChevronRight
} from 'lucide-react';
import { FlutterIcon, GooglePlayIcon, GitHubIcon } from './TechIcons';

const showcaseApps = [
  {
    id: 'academia',
    title: 'Academia AI',
    badge: 'Flagship • Google Play',
    tagline: 'Google Gemini 1.5 Workflows • 25+ Screens',
    image: '/academia/1.webp',
    backup: '/covers/academia.webp',
    link: 'https://play.google.com/store/apps/details?id=com.mohamed.academiaai',
    isExternal: true,
    color: '#38BDF8',
    icon: GraduationCap,
  },
  {
    id: 'parkmate',
    title: 'ParkMate',
    badge: 'Mapbox Navigation',
    tagline: 'GPS Parking Navigator & Reverse Geocoding',
    image: '/park_mate/1.webp',
    backup: '/covers/parkmate.webp',
    link: 'https://github.com/M-Fawzy2004/park_mate',
    isExternal: true,
    color: '#10B981',
    icon: MapPin,
  },
  {
    id: 'transport',
    title: 'Transport Hub',
    badge: 'Graduation Project',
    tagline: 'Parent App & Driver Dual Dashboard',
    image: '/covers/graduation.webp',
    backup: '/covers/graduation.webp',
    link: '#projects',
    isExternal: false,
    color: '#818CF8',
    icon: Layers,
  },
  {
    id: 'ecommerce',
    title: 'Shop Ecosystem',
    badge: 'Commercial Full-Stack',
    tagline: 'Live Paymob Gateway & Maps Tracking',
    image: '/shop_mobile/1.webp',
    backup: '/covers/ecommerce.webp',
    link: 'https://github.com/M-Fawzy2004/Ecommerce',
    isExternal: true,
    color: '#F59E0B',
    icon: ShoppingBag,
  },
];

export default function InteractiveAppShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedScreen, setClickedScreen] = useState(null);

  // Desktop fan-out transformation offsets
  const getTransform = (index) => {
    if (!isHovered) {
      // In stacked idle mode: slight layered stack effect
      return {
        x: index === 0 ? 0 : index * 4,
        y: index === 0 ? 0 : index * -2,
        rotate: index === 0 ? 0 : (index % 2 === 0 ? 1 : -1) * index * 1.5,
        scale: 1 - index * 0.03,
        zIndex: 40 - index * 5,
        opacity: index === 0 ? 1 : 0.4,
      };
    }

    // In fanned-out mode: beautiful 4-phone spread arc
    switch (index) {
      case 0:
        return { x: -330, y: 16, rotate: -7, scale: 0.94, zIndex: 20, opacity: 1 };
      case 1:
        return { x: -110, y: 0, rotate: -2, scale: 1.02, zIndex: 35, opacity: 1 };
      case 2:
        return { x: 110, y: 0, rotate: 2, scale: 1.02, zIndex: 35, opacity: 1 };
      case 3:
        return { x: 330, y: 16, rotate: 7, scale: 0.94, zIndex: 20, opacity: 1 };
      default:
        return { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 20, opacity: 1 };
    }
  };

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="pill-badge mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Interactive Mobile Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2">
            Production Mobile Apps in Motion
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-body)]">
            Hover over or tap the phone below to fan out all 4 production applications.
          </p>

          {/* Interactive Status Indicator */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-default)] text-xs font-mono text-[var(--text-secondary)]">
            <MousePointer size={12} className={isHovered ? "text-emerald-400 animate-bounce" : "text-sky-400"} />
            <span>{isHovered ? "4 Apps Expanded • Click any to view details" : "Hover over device to expand 4 screens"}</span>
          </div>
        </div>

        {/* Interactive Fan-Out Stage (Desktop & Tablet) */}
        <div 
          className="hidden md:flex relative items-center justify-center min-h-[580px] select-none cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          {showcaseApps.map((app, index) => {
            const transform = getTransform(index);
            const isFront = isHovered || index === 0;

            return (
              <motion.div
                key={app.id}
                animate={transform}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24,
                }}
                className="absolute w-[260px] sm:w-[280px]"
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Modern Phone Chassis - Clean matte, NO heavy glow */}
                <div 
                  className={`rounded-[28px] p-2 bg-[#12151B] border transition-colors duration-200 ${
                    isHovered 
                      ? 'border-sky-500/30' 
                      : 'border-[var(--border-default)]'
                  }`}
                >
                  {/* Screen Bezel */}
                  <div className="rounded-[22px] overflow-hidden bg-black aspect-[9/18] flex flex-col justify-between relative border border-black/80">
                    
                    {/* Top Status Notch */}
                    <div className="relative z-20 w-full px-3.5 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>9:41</span>
                      <div className="w-16 h-3.5 rounded-full bg-black border border-[#1E232F] flex items-center justify-center">
                        <span className="text-[8px] text-slate-400 truncate px-1">{app.title.split(' ')[0]}</span>
                      </div>
                      <span className="text-[8px] text-emerald-400 font-semibold">5G</span>
                    </div>

                    {/* App Screenshot */}
                    <div className="relative flex-1 w-full overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={app.image}
                        alt={app.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          if (app.backup && e.target.src !== app.backup) {
                            e.target.src = app.backup;
                          }
                        }}
                      />

                      {/* App Bottom Info Capsule */}
                      <div className="absolute inset-x-2 bottom-2 p-2 rounded-xl bg-[#090B0E]/90 border border-[#1E232F] backdrop-blur-md flex items-center justify-between">
                        <div className="min-w-0 pr-1 text-left">
                          <span className="text-[8px] font-bold px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400 uppercase tracking-wider block w-fit mb-0.5">
                            {app.badge}
                          </span>
                          <div className="text-[11px] font-bold text-white truncate">{app.title}</div>
                          <div className="text-[9px] text-slate-400 truncate">{app.tagline}</div>
                        </div>

                        <a
                          href={app.link}
                          target={app.isExternal ? "_blank" : undefined}
                          rel={app.isExternal ? "noopener noreferrer" : undefined}
                          onClick={(e) => e.stopPropagation()}
                          className="w-6 h-6 rounded-md bg-[#0284C7] hover:bg-[#0369A1] flex items-center justify-center text-white flex-shrink-0 transition-colors text-decoration-none"
                          title="Open application"
                        >
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Bottom Home Bar */}
                    <div className="w-full py-1 flex justify-center bg-black">
                      <div className="w-20 h-1 rounded-full bg-white/30" />
                    </div>

                  </div>
                </div>

                {/* Sub-label visible on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-center"
                  >
                    <span className="text-xs font-bold text-[var(--text-primary)] block truncate">
                      {app.title}
                    </span>
                    <span className="text-[10px] text-sky-400 font-mono">
                      {app.badge}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View (Horizontal Scrollable Grid on small phones) */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory">
          {showcaseApps.map((app) => (
            <div 
              key={app.id} 
              className="snap-center flex-shrink-0 w-[240px] rounded-[24px] p-2 bg-[#12151B] border border-[var(--border-default)]"
            >
              <div className="rounded-[18px] overflow-hidden bg-black aspect-[9/18] flex flex-col justify-between relative border border-black/80">
                <div className="w-full px-3 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>9:41</span>
                  <span className="text-[8px] text-emerald-400">5G</span>
                </div>
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src={app.image}
                    alt={app.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      if (app.backup && e.target.src !== app.backup) {
                        e.target.src = app.backup;
                      }
                    }}
                  />
                  <div className="absolute inset-x-2 bottom-2 p-2 rounded-xl bg-[#090B0E]/90 border border-[#1E232F] flex items-center justify-between">
                    <div className="min-w-0 pr-1 text-left">
                      <span className="text-[8px] font-bold text-sky-400 block">{app.badge}</span>
                      <div className="text-[11px] font-bold text-white truncate">{app.title}</div>
                    </div>
                    <a
                      href={app.link}
                      target={app.isExternal ? "_blank" : undefined}
                      rel={app.isExternal ? "noopener noreferrer" : undefined}
                      className="w-6 h-6 rounded-md bg-[#0284C7] flex items-center justify-center text-white text-decoration-none"
                    >
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
                <div className="w-full py-1 flex justify-center bg-black">
                  <div className="w-16 h-1 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
