import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiNestjs } from 'react-icons/si';
import { Link } from 'react-router-dom';

import Profile from "../assets/Sourav Kumar Tiwari.jpg"; 

const Home = () => {
  return (
    <div 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black pt-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
        
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            
           
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold shadow-sm border border-transparent dark:border-blue-800">
              🚀 Open to Work & Freelance
            </div>

          
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-500">Sourav Kumar Tiwari</span>
            </h1>

           
            <div className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 min-h-[50px]">
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-blue-500 dark:text-blue-400"
                repeat={Infinity}
              />
            </div>

           
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I build scalable web applications and intelligent AI solutions. 
              Passionate about connecting data with beautiful user interfaces.
            </p>

        
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/projects" 
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all hover:-translate-y-1"
              >
                View Projects
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
              >
                Contact Me
              </Link>
            </div>

           
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">Tech Stack</p>
              <div className="flex gap-6 justify-center md:justify-start text-gray-400 dark:text-gray-500">
                <SiReact size={32} className="hover:text-blue-500 transition-colors cursor-pointer" title="React" />
                <SiNodedotjs size={32} className="hover:text-green-600 transition-colors cursor-pointer" title="Node.js" />
                <SiMongodb size={32} className="hover:text-green-500 transition-colors cursor-pointer" title="MongoDB" />
                <SiNestjs size={32} className="hover:text-red-500 transition-colors cursor-pointer" title="NestJS" />
                <SiPython size={32} className="hover:text-yellow-500 transition-colors cursor-pointer" title="Python" />
              </div>
            </div>
          </div>

       
          <div className="order-1 md:order-2 flex justify-center relative">
          
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -left-4 -z-10 w-72 h-72 bg-purple-300 dark:bg-purple-900/50 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            
           
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            
              <img 
                src={Profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;