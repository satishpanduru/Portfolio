import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    //about working in a company
    // {
    //   type: "Company" ,
    //   company: "Google.",
    //   position: "Senior Frontend Developer",
    //   period: "June 2026 - Present",
    //   location: "Hyderabad, Telangana",
    //   description: [
    //     "Lead a team of 5 frontend developers in developing and maintaining multiple web applications",
    //     "Implemented new responsive design system that reduced CSS bundle size by 35%",
    //     "Architected and built a component library used across 3 major company products",
    //     "Optimized application performance, achieving a 40% improvement in load time"
    //   ]
    // },
    //about working in college clubs
    {
      type: "Club" ,
      company: "SAI Cell",
      position: "Graphic Designing Head",
      period: "Feb 2023 - Present",
      location: "NIT Durgapur" ,
      description: [
        "Lead a team of designers to create posters on club activities",
      ]
    },
  ];

  const education = [
    {
      institution: "National Institute of Technology Durgapur",
      degree: "Electrical Engineering",
      period: "2022 - 2026",
      // description: "Passionate in learning IT Technologies"
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "MPC",
      period: "2019 - 2021",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const educationVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Education & Works</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey and educational background
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={educationVariants}
                >
                  <div className="flex justify-between flex-wrap mb-2">
                    <h4 className="text-xl font-medium text-gray-800">{edu.degree}</h4>
                    <span className="text-blue-600 font-medium">{edu.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-lg text-gray-700">{edu.institution}</span>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* <motion.div 
              className="mt-12 bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-xl font-medium text-gray-800 mb-4">Certifications</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  DSA completion certificate Udemy
                </li>
              </ul>
            </motion.div> */}
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Work Experience</h3>
            
            <div className="relative border-l-2 border-blue-600 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-12 relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-12 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between flex-wrap mb-2">
                      <h4 className="text-xl font-medium text-gray-800">{exp.position}</h4>
                      <span className="text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800 mr-2">
                        {exp.type}
                      </span>
                      <span className="text-lg text-gray-700">{exp.company}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500">{exp.location}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;