import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative border-t border-[var(--border)] mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="font-display text-2xl font-bold">
              <span className="gradient-text">Sourav</span> Kumar Tiwari
            </a>
            <p className="text-[var(--muted)] text-sm leading-relaxed mt-3 max-w-xs">
              Full Stack Developer building production web apps with Vue.js, React,
              Node.js and MongoDB. Let's build something great together.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="text-[var(--text)] font-semibold mb-4 text-sm">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-[var(--text)] font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://github.com/sourav030" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><FiGithub size={18} /></a>
              <a href="https://www.linkedin.com/in/sourav-kumar-tiwari-82762426b/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
              <a href="mailto:souravtiwari139@gmail.com" className="icon-btn" aria-label="Email"><FiMail size={18} /></a>
            </div>
            <p className="text-[var(--faint)] text-sm">souravtiwari139@gmail.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--faint)] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sourav Kumar Tiwari. Built with React & Tailwind.
          </p>
          <a href="#home" className="chip hover:text-[var(--text)] transition-colors">
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
