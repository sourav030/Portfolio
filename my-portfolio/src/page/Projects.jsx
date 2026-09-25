import React from 'react';
import ProjectCard from '../component/ProjectCard';
import { projectData } from '../data/projectjs';
import Reveal from '../component/Reveal';

const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-3">Things I've built</p>
          <h2 className="section-label">Featured Projects</h2>
          <p className="mt-4 text-[var(--muted)] max-w-2xl mx-auto text-lg">
            Full-stack web apps and AI-driven tools, from{' '}
            <span className="text-[var(--accent-strong)]">MERN platforms</span> to{' '}
            <span className="text-[var(--accent-2-strong)]">real-time systems</span>.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
