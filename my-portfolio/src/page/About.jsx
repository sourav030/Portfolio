import React from 'react';
import {
  FiUser, FiAward, FiBookOpen, FiCode, FiServer, FiDatabase, FiCpu, FiZap,
} from 'react-icons/fi';
import Reveal from '../component/Reveal';
import SpotlightCard from '../component/SpotlightCard';

const skillGroups = [
  { icon: <FiCode />, title: 'Languages', items: ['JavaScript', 'C++', 'C', 'Python'] },
  { icon: <FiZap />, title: 'Frontend', items: ['React.js', 'Vue.js', 'Tailwind CSS', 'HTML5 & CSS3'] },
  { icon: <FiServer />, title: 'Backend', items: ['Node.js', 'Express.js', 'NestJS (Basic)', 'REST APIs'] },
  { icon: <FiDatabase />, title: 'Database & Tools', items: ['MongoDB', 'MySQL', 'Git & GitHub', 'Postman'] },
  { icon: <FiCpu />, title: 'AI & Libraries', items: ['LangGraph', 'Fabric.js', 'NumPy · Pandas', 'Scikit-Learn'] },
];

const SectionHeading = ({ eyebrow, title }) => (
  <Reveal className="text-center mb-14">
    <p className="eyebrow mb-3">{eyebrow}</p>
    <h2 className="section-label">{title}</h2>
  </Reveal>
);

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid md:grid-cols-3 gap-5">

          {/* Bio - spans 2 cols */}
          <Reveal className="md:col-span-2">
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-violet-500/15 text-[var(--accent-strong)]">
                  <FiUser size={18} />
                </span>
                <h3 className="font-display text-xl font-semibold">Who am I?</h3>
              </div>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I'm a Full Stack Developer with hands-on experience building{' '}
                <span className="text-[var(--text)]">production web applications</span> using
                Vue.js, React.js, Node.js, Express.js and MongoDB.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Right now I'm developing healthcare platforms at{' '}
                <span className="text-[var(--accent-strong)] font-medium">Beet.Health</span>, designing
                RESTful APIs, optimizing frontend rendering for large datasets, and integrating
                AI-driven features with LangGraph. B.Tech in Computer Science (2026), with{' '}
                <span className="text-[var(--text)]">900+ DSA problems</span> solved.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* Stats stack */}
          <Reveal delay={80} className="grid grid-rows-2 gap-5">
            <SpotlightCard className="p-6 flex flex-col justify-center">
              <p className="font-display text-4xl font-bold gradient-text">900+</p>
              <p className="text-[var(--muted)] text-sm mt-1">DSA problems (LeetCode + GFG)</p>
            </SpotlightCard>
            <SpotlightCard className="p-6 flex flex-col justify-center">
              <p className="font-display text-4xl font-bold gradient-text">7.8<span className="text-xl text-[var(--faint)]">/10</span></p>
              <p className="text-[var(--muted)] text-sm mt-1">B.Tech CGPA · CSE 2026</p>
            </SpotlightCard>
          </Reveal>

          {/* Skills - spans full width */}
          <Reveal className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {skillGroups.map((g, i) => (
                <SpotlightCard key={i} className="p-5">
                  <div className="flex items-center gap-2.5 mb-4 text-[var(--accent-2-strong)]">
                    <span className="text-lg">{g.icon}</span>
                    <h4 className="font-semibold text-[var(--text)] text-sm">{g.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {g.items.map((it, idx) => (
                      <li key={idx} className="text-[var(--muted)] text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-violet-400/80" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal className="md:col-span-2">
            <SpotlightCard className="p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-cyan-500/15 text-[var(--accent-2-strong)]">
                  <FiBookOpen size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text)]">B.Tech, Computer Science & Engineering</p>
                    <p className="text-[var(--muted)] text-sm">Chandigarh Group of Colleges, Landran</p>
                  </div>
                  <span className="chip whitespace-nowrap h-fit">2022-26</span>
                </div>
                <div className="h-px bg-[var(--surface-2)]" />
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text)]">Senior Secondary (XII), 88.9%</p>
                    <p className="text-[var(--muted)] text-sm">Mata Mohan Dai Oswal Public School, Ludhiana</p>
                  </div>
                  <span className="chip whitespace-nowrap h-fit">2021-22</span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={80}>
            <SpotlightCard className="p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-amber-500/15 text-amber-300">
                  <FiAward size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-[var(--muted)] text-sm flex gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  5-Star rating in C++ on HackerRank
                </li>
                <li className="text-[var(--muted)] text-sm flex gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  3rd place, Code Vortex Coding Competition
                </li>
                <li className="text-[var(--muted)] text-sm flex gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  400+ LeetCode · 500+ GeeksforGeeks solved
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-[var(--border)] flex flex-wrap gap-2">
                {['PW Backend', 'Udemy Web Dev', 'Internshala ML'].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default About;
