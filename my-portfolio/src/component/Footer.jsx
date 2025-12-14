import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-12 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">Portfolio.</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A passionate Full Stack Developer building seamless web experiences. 
              Let's connect and build something amazing together.
            </p>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Connect</h4>
            <div className="flex space-x-4">
            
              <a 
                href="https://github.com/sourav030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
             
              <a 
                href="https://www.linkedin.com/in/sourav-kumar-tiwari-82762426b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              
             
             
              <a 
                href="mailto:your.email@example.com" 
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              Email: souravtiwari139@gmail.com
            </p>
          </div>
        </div>

        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sourav Kumar Tiwari. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;