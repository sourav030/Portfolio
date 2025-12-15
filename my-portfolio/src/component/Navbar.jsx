import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

 
  const resumeLink = "https://drive.google.com/uc?export=download&id=13W74s-q9OaVdJU7Khi7DYb7zDGnraPTe";

  return (
    
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
         
          <div className="flex-shrink-0 flex items-center">
           
            <Link to="/" className="text-2xl font-bold text-blue-500 tracking-wide">
              Sourav Kum<span className="text-white">ar Tiwari</span>
            </Link>
          </div>

         
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
           
            <a
              href={resumeLink}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-500 transition-all shadow-md shadow-blue-900/20"
            >
              Download CV
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
             
              className="text-gray-200 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded-md w-full text-center transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={resumeLink}
              className="block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 w-fit shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;