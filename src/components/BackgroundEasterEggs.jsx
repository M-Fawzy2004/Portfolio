import React from 'react';

export default function BackgroundEasterEggs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Very faint single-color ambient top tint via pure radial-gradient (GPU lightweight, 0 blur cost) */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(2, 132, 199, 0.14) 0%, rgba(2, 132, 199, 0) 70%)',
        }}
      />

      {/* Clean, subtle micro-dot grid with soft mask */}
      <div 
        className="absolute inset-0 bg-subtle-noise opacity-60"
        style={{
          maskImage: 'linear-gradient(to bottom, black 15%, rgba(0,0,0,0.3) 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 15%, rgba(0,0,0,0.3) 70%, transparent 100%)',
        }}
      />
    </div>
  );
}
