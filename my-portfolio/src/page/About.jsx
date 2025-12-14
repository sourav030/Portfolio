import React from 'react';
import { FaGraduationCap, FaCode, FaServer, FaBrain, FaDatabase } from 'react-icons/fa';

const About = () => {

  const skills = [
    { 
      category: "Frontend Development", 
      icon: <FaCode className="text-blue-500" />,
      items: ["React.js", "Tailwind CSS", "HTML5 & CSS3", "JavaScript (ES6+)"] 
    },
    { 
      category: "Backend Development", 
      icon: <FaServer className="text-green-500" />,
      items: ["Node.js & Express", "NestJS", "Socket.io (WebRTC)", "REST APIs"] 
    },
    { 
      category: "Database & Cloud", 
      icon: <FaDatabase className="text-orange-500" />,
      items: ["MongoDB", "MySQL", "Prisma ORM", "Cloudinary"] 
    },
    { 
      category: "Machine Learning", 
      icon: <FaBrain className="text-purple-500" />,
      items: ["Python", "Pandas & NumPy", "Scikit-Learn", "Deep Learning Concepts"] 
    },
    { 
      category: "Core & Tools", 
      
      icon: <FaCode className="text-gray-700 dark:text-gray-300" />,
      items: ["C++ (DSA)", "Git & GitHub", "VS Code", "Postman"] 
    },
  ];

  return (
    <div id="about" className="min-h-screen bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
         
          <div className="space-y-8">
           
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" />
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I am a final-year Computer Science student with a passion for building full-stack applications and exploring AI.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Starting with a strong foundation in <span className="font-semibold text-blue-600 dark:text-blue-400">C++ and Data Structures</span>, 
                I transitioned into web development, mastering the <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack and NestJS</span>. 
                Currently, I am expanding my horizons into <span className="font-semibold text-purple-600 dark:text-purple-400">Machine Learning</span> to build intelligent, data-driven web solutions.
              </p>
            </div>

           
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:shadow-md">
                <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400">10+</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Projects Built</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:shadow-md">
                <h4 className="text-4xl font-bold text-blue-600 dark:text-blue-400">500+</h4>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">DSA Problems Solved</p>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-xl">{skillGroup.icon}</div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default About