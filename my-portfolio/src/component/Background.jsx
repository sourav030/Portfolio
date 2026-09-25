import React, { useEffect, useRef } from 'react';

/**
 * Fixed aurora + grid backdrop with a cursor-following glow.
 */
const Background = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    // Skip pointer glow on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          }
          raf = 0;
        });
      }
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-grid" />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
    </>
  );
};

export default Background;
