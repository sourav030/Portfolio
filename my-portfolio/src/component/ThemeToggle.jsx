import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const getInitial = () => {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('light')) {
    return 'light';
  }
  return 'dark';
};

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`icon-btn w-10! h-10! overflow-hidden relative ${className}`}
    >
      <span
        className="transition-all duration-500"
        style={{
          transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
          opacity: theme === 'dark' ? 1 : 0,
          position: theme === 'dark' ? 'static' : 'absolute',
        }}
      >
        <FiMoon size={18} />
      </span>
      <span
        className="transition-all duration-500"
        style={{
          transform: theme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
          opacity: theme === 'light' ? 1 : 0,
          position: theme === 'light' ? 'static' : 'absolute',
        }}
      >
        <FiSun size={18} />
      </span>
    </button>
  );
};

export default ThemeToggle;
