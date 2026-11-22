export default function BackgroundEasterEggs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Atmospheric Ambient Orbs (GPU-accelerated pure radial gradients) */}
      
      {/* Top Hero Cyan Aurora */}
      <div
        className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.12) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 75%)',
        }}
      />

      {/* Mid Left Indigo Glow (Behind Apps & Experience) */}
      <div
        className="absolute top-[28%] -left-[180px] w-[650px] h-[650px] rounded-full pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.07) 0%, rgba(30, 58, 138, 0.02) 50%, transparent 70%)',
        }}
      />

      {/* Mid Right Emerald-Cyan Accent (Behind Projects & Skills) */}
      <div
        className="absolute top-[58%] -right-[200px] w-[750px] h-[750px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(56, 189, 248, 0.03) 45%, transparent 70%)',
        }}
      />

      {/* Bottom Center Blue Accent (Behind Contact & Footer) */}
      <div
        className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* 2. Precision Architectural Engineering Grid */}
      <div 
        className="absolute inset-0 engineering-grid opacity-75"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 30%, black 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 30%, black 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
        }}
      />

      {/* 3. Subtle Cyan Micro-Dots at Grid Intersections */}
      <div 
        className="absolute inset-0 engineering-dots opacity-45"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 40%, black 40%, rgba(0,0,0,0.2) 80%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 40%, black 40%, rgba(0,0,0,0.2) 80%, transparent 100%)',
        }}
      />
    </div>
  );
}
