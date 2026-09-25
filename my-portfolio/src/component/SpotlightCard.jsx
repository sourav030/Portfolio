import React, { useRef } from 'react';

/**
 * Glass card with a radial spotlight that follows the cursor.
 */
const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`glass spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
