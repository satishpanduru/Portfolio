import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.4
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0 md:pr-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-blue-600">Satish Panduru</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-600 mb-6"
            variants={itemVariants}
          >
            Frontend Developer
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            I create elegant, responsive, and user-friendly web applications with modern technologies.
            Let's turn your vision into reality!
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full overflow-hidden border-4 border-white shadow-xl"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile Image */}
              <img 
                src="public/assets/images/profile-image.jpg" 
                alt="Satish Panduru" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* <motion.div 
              className="absolute bottom-0 right-0 bg-white p-3 rounded-full shadow-lg"
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15c.829 0 1.5.672 1.5 1.5S12.829 10 12 10s-1.5-.672-1.5-1.5S11.171 7 12 7zm4 8.5c0 2.485-2.015 4.5-4.5 4.5S7 17.985 7 15.5V14h8v1.5z"/>
              </svg>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;