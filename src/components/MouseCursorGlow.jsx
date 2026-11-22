import { useEffect, useRef, useState } from 'react';

export default function MouseCursorGlow() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    let mouseX = -500;
    let mouseY = -500;
    let ringX = -500;
    let ringY = -500;
    let isHoveringInteractive = false;
    let isVisible = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }

      // Check if hovering over clickable or interactive element
      const target = e.target;
      if (target && target.closest) {
        const isClickable = target.closest(
          'a, button, [role="button"], input, textarea, select, .cursor-pointer, .bento-card'
        );
        isHoveringInteractive = !!isClickable;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (dotRef.current) dotRef.current.style.opacity = '1';
    };

    // Smooth physics loop with lerp (linear interpolation) for zero lag
    const render = () => {
      // Precision ring follows smoothly (lerp factor 0.22)
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        const scale = isHoveringInteractive ? 1.45 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        if (isHoveringInteractive) {
          ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.85)';
          ringRef.current.style.backgroundColor = 'rgba(56, 189, 248, 0.06)';
        } else {
          ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.4)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        dotRef.current.style.opacity = isHoveringInteractive ? '0' : '1';
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none" aria-hidden="true">
      {/* Crisp Minimalist Circular Ring (No Heavy Shadow) */}
      <div
        ref={ringRef}
        style={{
          width: '26px',
          height: '26px',
          marginLeft: '-13px',
          marginTop: '-13px',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '50%',
          opacity: 0,
          transition: 'border-color 0.15s ease, background-color 0.15s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
        className="absolute top-0 left-0"
      />

      {/* Precision Micro-Dot directly at the cursor tip */}
      <div
        ref={dotRef}
        style={{
          width: '4px',
          height: '4px',
          marginLeft: '-2px',
          marginTop: '-2px',
          borderRadius: '50%',
          backgroundColor: '#38BDF8',
          opacity: 0,
          transition: 'opacity 0.15s ease',
          willChange: 'transform',
        }}
        className="absolute top-0 left-0"
      />
    </div>
  );
}
