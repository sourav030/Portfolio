import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const resumeLink = '/Sourav_Kumar_Tiwari_Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  // Scroll progress bar + navbar background
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (top / height) * 100 : 0);
      setScrolled(top > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Scroll progress */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-violet-400 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`transition-all duration-500 border-b ${
          scrolled
            ? 'nav-blur backdrop-blur-xl border-[var(--border)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-display text-lg font-bold tracking-tight">
              <span className="gradient-text">S</span>ourav
              <span className="text-[var(--faint)]">.dev</span>
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === link.id
                      ? 'text-[var(--text)]'
                      : 'text-[var(--muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {active === link.id && (
                    <span className="absolute inset-0 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]" />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <a href={resumeLink} download className="btn btn-primary py-2! px-4! text-sm!">
                <FiDownload /> Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--text)] p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden menu-blur backdrop-blur-xl border-t border-[var(--border)]">
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active === link.id
                      ? 'text-[var(--text)] bg-[var(--surface-2)]'
                      : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeLink}
                download
                onClick={() => setIsOpen(false)}
                className="btn btn-primary mt-2"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
