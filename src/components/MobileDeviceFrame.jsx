import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  MapPin, 
  GraduationCap, 
  ShoppingBag,
} from 'lucide-react';
import { FlutterIcon } from './TechIcons';

const previewApps = [
  {
    id: 'academia',
    name: 'Academia AI',
    tagline: 'Gemini AI Study Assistant • 25+ Screens',
    image: '/academia/1.png',
    backupCover: '/covers/academia.png',
    badge: 'Flagship App',
    badgeColor: '#0284C7',
    icon: GraduationCap,
  },
  {
    id: 'parkmate',
    name: 'ParkMate',
    tagline: 'Real-Time Mapbox GPS Navigation',
    image: '/park_mate/1.png',
    backupCover: '/covers/parkmate.png',
    badge: 'Mapbox GPS',
    badgeColor: '#10B981',
    icon: MapPin,
  },
  {
    id: 'graduation',
    name: 'Transport Hub',
    tagline: 'Dual Dashboard: Parent & Driver',
    image: '/covers/graduation.png',
    badge: 'Capstone Project',
    badgeColor: '#0284C7',
    icon: Layers,
  },
  {
    id: 'ecommerce',
    name: 'Shop Ecosystem',
    tagline: 'Live Paymob & Google Maps Flow',
    image: '/shop_mobile/1.png',
    backupCover: '/covers/ecommerce.png',
    badge: 'Full-Stack Mobile',
    badgeColor: '#0284C7',
    icon: ShoppingBag,
  }
];

export default function MobileDeviceFrame() {
  const [activeAppIdx, setActiveAppIdx] = useState(0);
  const currentApp = previewApps[activeAppIdx];

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] mx-auto select-none">
      
      {/* Floating Telemetry Badge Left - Clean matte border, NO heavy glow */}
      <div className="hidden md:flex absolute -left-12 top-14 z-30 items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)]">
        <div className="w-5 h-5 rounded flex items-center justify-center text-sky-400 bg-sky-500/10">
          <FlutterIcon size={13} />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">Flutter Dev</div>
          <div className="text-[9px] text-sky-400 font-medium">2 Years Experience</div>
        </div>
      </div>

      {/* Floating Telemetry Badge Right - Clean matte border, NO heavy glow */}
      <div className="hidden md:flex absolute -right-10 bottom-24 z-30 items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)]">
        <div className="w-5 h-5 rounded flex items-center justify-center text-sky-400 bg-sky-500/10">
          <Layers size={13} />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">Clean Arch</div>
          <div className="text-[9px] text-sky-400 font-medium">BLoC / Cubit</div>
        </div>
      </div>

      {/* Mobile Chassis - Clean Matte Finish, NO colorful glow */}
      <div 
        className="relative rounded-[32px] p-2 border border-[var(--border-strong)] bg-[#12151B]"
      >
        {/* Inner bezel */}
        <div 
          className="relative rounded-[26px] overflow-hidden border border-black/80 aspect-[9/18.5] flex flex-col justify-between bg-black"
        >
          {/* Status Bar */}
          <div className="relative z-20 w-full px-4 pt-2.5 pb-1.5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>9:41</span>
            
            {/* Minimal Notch */}
            <div className="w-20 h-4 rounded-full bg-black border border-[#1E232F] flex items-center justify-between px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] text-slate-400">{currentApp.name.split(' ')[0]}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[9px] text-emerald-400 font-semibold">5G</span>
              <div className="w-3.5 h-1.5 rounded-2xs border border-slate-400 flex items-center p-0.5">
                <div className="h-full w-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Screen Content Area */}
          <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentApp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <img
                  src={currentApp.image}
                  alt={currentApp.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    if (currentApp.backupCover && e.target.src !== currentApp.backupCover) {
                      e.target.src = currentApp.backupCover;
                    }
                  }}
                />

                {/* Bottom App Overlay Capsule - Clean, flat, matte */}
                <div className="absolute bottom-2 inset-x-2 p-2 rounded-xl bg-[#090B0E]/90 border border-[#1E232F] flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400 uppercase tracking-wider">
                      {currentApp.badge}
                    </span>
                    <div className="text-[11px] font-semibold text-white truncate mt-0.5">{currentApp.name}</div>
                  </div>

                  <a 
                    href="#projects" 
                    className="flex-shrink-0 px-2 py-1 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white text-[10px] font-medium transition-colors text-decoration-none"
                  >
                    View
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Device Home Indicator Bar */}
          <div className="relative z-20 w-full py-1.5 flex justify-center bg-black">
            <div className="w-24 h-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      {/* App Selector Tabs under device */}
      <div className="mt-3 flex items-center justify-center gap-1.5 p-1 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)]">
        {previewApps.map((app, idx) => {
          const Icon = app.icon;
          const isActive = idx === activeAppIdx;
          return (
            <button
              key={app.id}
              onClick={() => setActiveAppIdx(idx)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                isActive 
                  ? 'bg-[#0284C7] text-white' 
                  : 'text-[var(--text-body)] hover:text-white'
              }`}
            >
              <Icon size={12} />
              <span className="hidden sm:inline">{app.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
