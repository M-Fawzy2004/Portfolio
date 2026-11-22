import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Droplets, Eye, ShieldCheck } from 'lucide-react';
import myAvatar from '../assets/my_photo.jpg';
import { FlutterIcon } from './TechIcons';

const glassModes = [
  { id: 'visionos', label: 'VisionOS Glass', accent: '#38BDF8' },
  { id: 'liquid', label: 'Liquid Mercury', accent: '#A855F7' },
  { id: 'prismatic', label: 'Prismatic Aurora', accent: '#34D399' },
];

export default function AppleLiquidGlassCard() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 150, y: 150, opacity: 0 });
  const [activeMode, setActiveMode] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState(null);

  const currentMode = glassModes[activeMode];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth subtle 3D tilt (clamp to max 8 degrees)
    const rotX = -((y - centerY) / centerY) * 9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotate({ x: rotX, y: rotY });
    setGlare({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardClick = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: Date.now() });

    // Cycle through Apple liquid glass modes
    setActiveMode((prev) => (prev + 1) % glassModes.length);
  };

  // Clear ripple after animation
  useEffect(() => {
    if (ripple) {
      const timer = setTimeout(() => setRipple(null), 800);
      return () => clearTimeout(timer);
    }
  }, [ripple]);

  // Dynamic chromatic border gradient that follows the specular light position
  const getBorderGradient = () => {
    if (!isHovered) {
      return 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)';
    }

    if (currentMode.id === 'liquid') {
      return `radial-gradient(circle 240px at ${glare.x}px ${glare.y}px, rgba(216, 180, 254, 0.8) 0%, rgba(168, 85, 247, 0.4) 30%, rgba(255, 255, 255, 0.1) 70%)`;
    }
    if (currentMode.id === 'prismatic') {
      return `radial-gradient(circle 240px at ${glare.x}px ${glare.y}px, rgba(52, 211, 153, 0.8) 0%, rgba(56, 189, 248, 0.5) 35%, rgba(244, 114, 182, 0.3) 60%, rgba(255, 255, 255, 0.1) 80%)`;
    }
    // Default VisionOS
    return `radial-gradient(circle 240px at ${glare.x}px ${glare.y}px, rgba(255, 255, 255, 0.85) 0%, rgba(56, 189, 248, 0.5) 30%, rgba(255, 255, 255, 0.1) 75%)`;
  };

  return (
    <div className="w-full max-w-[340px] sm:max-w-[360px] perspective-[1200px]">
      
      {/* 3D Tilted Card Chassis */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleCardClick}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        style={{
          transformStyle: 'preserve-3d',
          background: getBorderGradient(),
        }}
        className="relative rounded-[28px] p-[1.5px] cursor-pointer select-none"
      >
        {/* Apple Frosted Glass Inner Body */}
        <div 
          className="relative rounded-[26.5px] p-4 overflow-hidden backdrop-blur-3xl bg-[#080B10]/90 border border-white/[0.04] flex flex-col justify-between"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Specular Liquid Caustic Light Flare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle 200px at ${glare.x}px ${glare.y}px, rgba(255, 255, 255, 0.22) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 80%)`,
            }}
          />

          {/* Liquid Click Ripple Expansion */}
          <AnimatePresence>
            {ripple && (
              <motion.span
                key={ripple.key}
                initial={{ scale: 0, opacity: 0.7 }}
                animate={{ scale: 4.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  marginLeft: -40,
                  marginTop: -40,
                  width: 80,
                  height: 80,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(56,189,248,0.3) 40%, transparent 70%)',
                }}
                className="absolute rounded-full pointer-events-none z-40"
              />
            )}
          </AnimatePresence>

          {/* Top Liquid Glass Control Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] relative z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
              <div className="flex items-center gap-1 ml-2 text-[10px] font-mono text-slate-300">
                <FlutterIcon size={11} className="text-sky-400" />
                <span>apple_liquid_glass.dart</span>
              </div>
            </div>

            {/* Mode Switcher Pill */}
            <div 
              className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-sky-300 hover:bg-white/10 transition-colors"
              title="Click to switch Apple liquid glass mode"
            >
              <Droplets size={10} className="text-sky-400 animate-pulse" />
              <span className="truncate">{currentMode.label}</span>
            </div>
          </div>

          {/* Portrait Image Frame with Prismatic Glass Reflection */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/4.7] bg-black border border-white/10 mb-3 group">
            <img
              src={myAvatar}
              alt="Mohamed Fawzy - Senior Flutter Mobile Engineer"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 transition-all duration-300"
            />

            {/* Diagonal Refractive Glass Sheen Line */}
            <div 
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-80"
              style={{
                transform: `translateX(${(glare.x - 170) * 0.15}px) translateY(${(glare.y - 170) * 0.15}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            />

            {/* Bottom Glass Tag Strip */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3.5 pt-10 flex flex-col justify-end text-left">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                    <span>Mohamed Fawzy</span>
                    <Sparkles size={12} className="text-sky-400" />
                  </div>
                  <div className="text-xs text-sky-400 font-medium font-mono">
                    Senior Flutter Mobile Engineer
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                  <ShieldCheck size={11} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Liquid Glass Credentials Strip */}
          <div className="space-y-2 relative z-20">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs">
              <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-[11px]">
                <Eye size={12} className="text-sky-400" />
                <span>Interactive Refraction</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                <span>3D Glass Active</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              {['Clean Arch', 'BLoC/Cubit', 'App Store Live', 'Google Play Live', 'Impeller 60 FPS'].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="text-center text-[9px] font-mono text-slate-400 mt-2.5 pt-2 border-t border-white/[0.05]">
            Move mouse to refract light • Click to morph liquid state
          </div>

        </div>
      </motion.div>

    </div>
  );
}
