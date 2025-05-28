import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Email-Validator",
      description: "Developed a user-friendly email validation tool to ensure proper email format and domain verification using JavaScript.",
      technologies: ["CSS", "HTML", "JavaScript"],
      image: "/assets/images/email-validator.avif",
      link: "https://github.com/satishpanduru/Email-validator",
      liveDemoLink: "https://ecommerce-demo.example.com"
    },
    {
      title: "Tic-Tac-Toe game",
      description: "Developed a tic-tac-toe game using react, to understand the cocepts of react clearly.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: "/assets/images/tic-tac-toe.jpg",
      link: "https://github.com/satishpanduru/Tic-Tac-Toe-React",
      liveDemoLink: "https://task-app-demo.example.com"
    },
    {
      title: "Weather App",
      description: "Real-time weather information app with location detection.",
      technologies: ["JavaScript", "Weather API", "HTML/CSS"],
      image: "/assets/images/weather.webp",
      link: "https://github.com/satishpanduru/Weather-app",
      liveDemoLink: "https://weather-demo.example.com"
    },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard that displays social media performance metrics with customizable date ranges.",
    //   technologies: ["React", "D3.js", "Social APIs", "Tailwind CSS"],
    //   image: "/assets/images/project-social-dashboard.jpg",
    //   link: "https://github.com/johndoe/social-dashboard",
    //   liveDemoLink: "https://social-demo.example.com"
    // },
    // {
    //   title: "Recipe Finder",
    //   description: "An app that helps users discover recipes based on available ingredients with step-by-step cooking instructions.",
    //   technologies: ["React", "Food API", "Node.js", "Express"],
    //   image: "/assets/images/project-recipe.jpg",
    //   link: "https://github.com/johndoe/recipe-finder",
    //   liveDemoLink: "https://recipe-demo.example.com"
    // },
    // {
    //   title: "Fitness Tracker",
    //   description: "Workout tracking application with progress visualization, exercise library, and personalized workout plans.",
    //   technologies: ["React", "Chart.js", "LocalStorage", "PWA"],
    //   image: "/assets/images/project-fitness.jpg",
    //   link: "https://github.com/johndoe/fitness-tracker",
    //   liveDemoLink: "https://fitness-demo.example.com"
    // }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md"
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.liveDemoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="https://github.com/satishpanduru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;