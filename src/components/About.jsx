import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know me better and learn about my journey in web development
          </p>
        </motion.div>

        <div className="flex flex-col items-center text-center gap-12">
          <motion.div 
            className="w-full flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6 max-w-2xl"
              variants={itemVariants}
            >
              Hello! I'm Satish Panduru, a passionate frontend developer with a 
              strong eye for detail and a commitment to delivering exceptional user experiences.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 mb-6 max-w-2xl"
              variants={itemVariants}
            >
              I am currently learning to build modern web applications using React, JavaScript, and cutting-edge frontend technologies.
              I'm particularly interested in accessible design and performance optimization.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700"
              variants={itemVariants}
            >
              I believe in continuous learning and am always exploring new technologies and techniques.
            </motion.p>

            <motion.div 
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-start gap-4 text-left"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Experience</h4>
                  <p className="text-gray-600">None Years</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 text-left"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 11h-4v-2h4v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Projects</h4>
                  <p className="text-gray-600">3 Completed</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 text-left"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 16H5V6h14v13z"/>
                    <path d="m8 11 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Education</h4>
                  <p className="text-gray-600">Electrical Engineering</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 text-left"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19.5 11c.276 0 .5.224.5.5v7c0 .827-.673 1.5-1.5 1.5h-12c-.827 0-1.5-.673-1.5-1.5v-7c0-.276.224-.5.5-.5s.5.224.5.5v7c0 .276.224.5.5.5h12c.276 0 .5-.224.5-.5v-7c0-.276.224-.5.5-.5zm-7 5c-.13 0-.26-.05-.35-.15l-3-3c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l2.64 2.65 2.65-2.65c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3 3c-.09.1-.22.15-.35.15z"/>
                    <path d="M12 16c-.13 0-.26-.05-.35-.15-.2-.2-.2-.51 0-.71l3-3c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3 3c-.09.1-.22.15-.36.15z"/>
                    <path d="M15 13c-.13 0-.26-.05-.35-.15l-3-3c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l3 3c.2.2.2.51 0 .71-.1.1-.23.15-.36.15zm-6 0c-.13 0-.26-.05-.35-.15-.2-.2-.2-.51 0-.71l3-3c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3 3c-.09.1-.22.15-.36.15z"/>
                    <path d="M9 13c-.13 0-.26-.05-.35-.15l-3-3c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l3 3c.2.2.2.51 0 .71-.09.1-.22.15-.36.15z"/>
                    <path d="M5 8h14c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-14c-.276 0-.5.224-.5.5s.224.5.5.5z"/>
                    <path d="M12.5 7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5z"/>
                    <path d="M9.5 7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5z"/>
                    <path d="M6.5 7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5z"/>
                    <path d="M15.5 7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5z"/>
                    <path d="M18.5 7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Vizianagaram, AP</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div 
                className="w-full max-w-md rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/assets/images/about-image.jpg" 
                  alt="My workspace" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              ></motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 w-32 h-32 border-4 border-blue-600 rounded-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;