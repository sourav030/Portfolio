import React from 'react';
import ProjectCard from '../component/ProjectCard';
import { projectData } from '../data/projectjs'; 

const Projects = () => {
  return (
    <div 
      id="projects" 
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
        
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my work ranging from 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Full Stack Web Apps </span> 
            to 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> Machine Learning Models</span>.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;