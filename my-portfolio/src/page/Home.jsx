import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  SiReact, SiVuedotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPython, SiTailwindcss, SiJavascript, SiCplusplus, SiMysql,
} from 'react-icons/si';
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import Reveal from '../component/Reveal';
import Profile from '../assets/Sourav Kumar Tiwari.jpg';

const resumeLink = '/Sourav_Kumar_Tiwari_Resume.pdf';

const stack = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiVuedotjs />, name: 'Vue.js' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <SiPython />, name: 'Python' },
];

const Home = () => {
  const cardRef = useRef(null);

  const handleTilt = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg)`;
  };
  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="chip chip-accent mx-auto lg:mx-0 mb-6">
                <span className="pulse-dot" />
                Available for full-time roles
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="eyebrow mb-4">Full Stack Developer</p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.02] mb-6">
                Hi, I'm <br className="hidden md:block" />
                <span className="gradient-text">Sourav Kumar Tiwari</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <div className="text-xl md:text-2xl font-medium text-[var(--muted)] h-8 mb-6">
                <TypeAnimation
                  sequence={[
                    'I build with Vue.js', 1800,
                    'I build with React', 1800,
                    'I build REST APIs with Node.js', 1800,
                    'I solve problems in C++', 1800,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[var(--text)]"
                  repeat={Infinity}
                />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Currently building production healthcare platforms at{' '}
                <span className="text-[var(--text)] font-medium">Beet.Health</span>, designing
                scalable REST APIs, optimizing large-dataset rendering and shipping
                AI-driven features with LangGraph.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <a href="#projects" className="btn btn-primary">
                  View my work <FiArrowUpRight />
                </a>
                <a href={resumeLink} download className="btn btn-ghost">
                  <FiDownload /> Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <a href="https://github.com/sourav030" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><FiGithub size={19} /></a>
                <a href="https://www.linkedin.com/in/sourav-kumar-tiwari-82762426b/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn"><FiLinkedin size={19} /></a>
                <a href="mailto:souravtiwari139@gmail.com" className="icon-btn" aria-label="Email"><FiMail size={19} /></a>
                <span className="ml-2 text-[var(--faint)] text-sm flex items-center gap-1.5">
                  <FiMapPin size={14} /> Ludhiana, India
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right - parallax profile */}
          <Reveal delay={200} className="flex justify-center">
            <div
              className="relative"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet-500/30 to-cyan-400/20 blur-2xl" />
              <div
                ref={cardRef}
                className="relative float glass rounded-[1.75rem]! p-3 transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={Profile}
                  alt="Sourav Kumar Tiwari"
                  className="w-64 h-72 md:w-72 md:h-80 object-cover rounded-[1.4rem]"
                />
                {/* Floating badges */}
                <div className="absolute -left-6 top-10 glass rounded-2xl! px-4 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-2xl font-bold gradient-text font-display">900+</p>
                  <p className="text-[11px] text-[var(--muted)]">DSA solved</p>
                </div>
                <div className="absolute -right-5 bottom-12 glass rounded-2xl! px-4 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-2xl font-bold gradient-text font-display">2+</p>
                  <p className="text-[11px] text-[var(--muted)]">Internships</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Skills marquee */}
        <Reveal delay={200} className="mt-20">
          <div className="marquee-track edge-fade overflow-hidden">
            <div className="marquee gap-4 pr-4">
              {[...stack, ...stack].map((s, i) => (
                <span key={i} className="chip text-sm! whitespace-nowrap">
                  <span className="text-lg text-[var(--muted)]">{s.icon}</span>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
