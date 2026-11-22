import { useEffect } from 'react';

export default function CardTiltEffect() {
  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      return;
    }

    let activeCard = null;
    let rafId = null;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const resetCard = (card) => {
      if (!card) return;
      card.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.25s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.boxShadow = 'none';
    };

    const handleMouseMove = (e) => {
      const card = e.target.closest('.bento-card');

      if (!card) {
        if (activeCard) {
          resetCard(activeCard);
          activeCard = null;
        }
        return;
      }

      if (activeCard && activeCard !== card) {
        resetCard(activeCard);
      }

      activeCard = card;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xRatio = (x / rect.width) - 0.5; // -0.5 to 0.5
      const yRatio = (y / rect.height) - 0.5; // -0.5 to 0.5

      // Subtle, refined 3D tilt (max 5 degrees)
      targetTiltX = -yRatio * 5.5;
      targetTiltY = xRatio * 5.5;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTilt);
      }
    };

    const updateTilt = () => {
      if (!activeCard) {
        rafId = null;
        return;
      }

      // Smooth interpolation for silky motion
      currentTiltX += (targetTiltX - currentTiltX) * 0.25;
      currentTiltY += (targetTiltY - currentTiltY) * 0.25;

      activeCard.style.transition = 'transform 0.08s ease-out, border-color 0.25s ease';
      activeCard.style.transform = `perspective(1000px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg) translateY(-2px)`;
      activeCard.style.boxShadow = 'none';

      // Continue animating until settled
      if (
        Math.abs(targetTiltX - currentTiltX) > 0.05 ||
        Math.abs(targetTiltY - currentTiltY) > 0.05
      ) {
        rafId = requestAnimationFrame(updateTilt);
      } else {
        rafId = null;
      }
    };

    const handleMouseLeave = () => {
      if (activeCard) {
        resetCard(activeCard);
        activeCard = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
      if (activeCard) resetCard(activeCard);
    };
  }, []);

  return null;
}
