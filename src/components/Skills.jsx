import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 50 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 50 },
        { name: "MongoDB", level: 50 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 60 },
      ]
    },
    {
      title: "Works on IT feild",
      skills: [
        { name: "DSA", level: 75 },
      ]
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: level => ({
      width: `${level}%`,
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeOut" 
      }
    })
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.8
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 + 0.2 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-blue-600 h-2 rounded-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillBarVariants}
                        custom={skill.level}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-gray-800">Other Skills I've Worked/Learning on</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Postman", "Oops", "MongoDB atlas"].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-300 shadow-sm hover:bg-blue-50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;