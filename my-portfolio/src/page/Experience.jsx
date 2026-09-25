import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import Reveal from '../component/Reveal';
import SpotlightCard from '../component/SpotlightCard';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Beet.Health',
    period: 'May 2026 - Present',
    current: true,
    points: [
      'Develop responsive healthcare web apps with Vue.js, Node.js, Express.js and MongoDB, including end-to-end delivery of the Clinic Owner Portal.',
      'Design RESTful APIs with server-side pagination and virtual scrolling, keeping the UI responsive while rendering large clinical datasets.',
      'Build Nutritionist Portal modules: patient messaging, supplement management, calorie tracking, meal adherence and activity monitoring.',
    ],
    tech: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'LangGraph'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'RBJ Technologies Pvt. Ltd. (Foyr)',
    period: 'Apr 2026',
    current: false,
    points: [
      'Developed a web-based, AI-powered 2D Shape Vector Editor using Vue.js, Fabric.js, Node.js, Express.js and MongoDB.',
      'Integrated LangGraph so users could create and edit vector shapes through natural-language commands instead of manual tools.',
      'Designed RESTful APIs and implemented Undo/Redo via a history-management stack for reliable canvas state restoration.',
    ],
    tech: ['Vue.js', 'Fabric.js', 'Node.js', 'Express.js', 'MongoDB', 'LangGraph'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-3">Where I've worked</p>
          <h2 className="section-label">Experience</h2>
        </Reveal>

        <div className="relative pl-8 md:pl-10">
          {/* Rail */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] rail" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="relative">
                  {/* Node */}
                  <span className="absolute -left-8 md:-left-10 top-6 grid place-items-center w-7 h-7 rounded-full bg-[var(--bg)] border border-violet-400/40">
                    <FiBriefcase className="text-[var(--accent-strong)]" size={12} />
                  </span>

                  <SpotlightCard className="p-6 md:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[var(--text)]">{exp.role}</h3>
                        <p className="text-[var(--accent-strong)] font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className={`chip h-fit w-fit ${exp.current ? 'chip-accent' : ''}`}>
                        {exp.current && <span className="pulse-dot" />}
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {exp.points.map((p, idx) => (
                        <li key={idx} className="text-[var(--muted)] text-sm leading-relaxed flex gap-3">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/80 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
