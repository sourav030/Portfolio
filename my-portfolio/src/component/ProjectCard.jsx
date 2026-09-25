import React, { useRef } from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const hasLive = project.liveLink && project.liveLink !== '#' && !project.liveLink.includes('your-');

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="glass spotlight group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 img-fade" />
        {project.tag && (
          <span className="absolute top-3 left-3 chip chip-accent text-xs">{project.tag}</span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-[var(--text)] leading-snug">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View code"
              className="icon-btn w-9! h-9! rounded-lg!"
            >
              <FiGithub size={16} />
            </a>
            {hasLive && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="icon-btn w-9! h-9! rounded-lg!"
              >
                <FiArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-[var(--muted)] text-sm leading-relaxed mb-5 flex-grow line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, i) => (
            <span key={i} className="chip text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
