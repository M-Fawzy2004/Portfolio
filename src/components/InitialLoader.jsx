import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { FlutterIcon } from './TechIcons';

const bootSteps = [
  'Initializing Flutter Engine & Dart Isolates...',
  'Mounting Clean Architecture & BLoC Machines...',
  'Synchronizing App Store & Google Play Telemetry...',
  'Impeller 60 FPS Pipeline Ready.',
];

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Directly derive current boot step from progress (Pure React, zero extra state)
  const currentStepIdx = progress < 30 ? 0 : progress < 65 ? 1 : progress < 95 ? 2 : 3;

  useEffect(() => {
    // Progress counter animation from 0% to 100% over ~1.3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const increment = Math.max(2, Math.floor((100 - prev) * 0.18));
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Trigger completion once 100% is reached
  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }, 250);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.99 }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[99999] bg-[#08090C] flex flex-col items-center justify-center p-6 select-none cursor-pointer"
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 engineering-grid opacity-30 pointer-events-none" />

          {/* Central Monogram Logo with Dual Radar Rings */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Pulsing Wave */}
            <motion.div
              animate={{ scale: [1, 1.45, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-24 h-24 rounded-2xl bg-sky-500/20 border border-sky-400/30"
            />
            {/* Inner Ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute w-20 h-20 rounded-xl bg-sky-500/30 border border-sky-400/40"
            />

            {/* Core Emblem Badge */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white font-mono font-bold text-xl tracking-tight shadow-[0_0_25px_rgba(56,189,248,0.35)] border border-white/20">
              MF
            </div>
          </div>

          {/* Title & Role */}
          <div className="text-center mb-6">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
              Mohamed Fawzy
            </h1>
            <div className="flex items-center justify-center gap-1.5 text-xs text-sky-400 font-mono">
              <FlutterIcon size={13} />
              <span>Senior Flutter Mobile Engineer</span>
            </div>
          </div>

          {/* Monospace Terminal Boot Line */}
          <div className="w-full max-w-sm h-8 flex items-center justify-center px-3 rounded-lg bg-white/[0.04] border border-white/10 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 truncate">
              {progress >= 100 ? (
                <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
              ) : (
                <Terminal size={13} className="text-sky-400 flex-shrink-0 animate-pulse" />
              )}
              <span className="truncate">{bootSteps[currentStepIdx]}</span>
            </div>
          </div>

          {/* Minimalist Hairline Progress Bar */}
          <div className="w-full max-w-sm flex items-center gap-3">
            <div className="flex-1 h-[3px] rounded-full bg-white/10 overflow-hidden relative">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-sky-500 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 w-9 text-right">
              {progress}%
            </span>
          </div>

          {/* Bottom Hint */}
          <div className="absolute bottom-6 text-[10px] font-mono text-slate-400">
            Click anywhere to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
