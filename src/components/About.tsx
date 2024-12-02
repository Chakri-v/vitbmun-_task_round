import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, fadeInUp } from '../utils/animations';
import { FloatingShapes } from './decorative/FloatingShapes';
import { BackgroundPattern } from './decorative/BackgroundPattern';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <FloatingShapes />
      <BackgroundPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={slideIn}
            className="relative group"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="MUN Conference"
                className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg"
            >
              <p className="font-semibold">Join Us Today!</p>
            </motion.div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              About VIT MUN
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 leading-relaxed"
            >
              VIT Model United Nations is one of India's premier MUN conferences, bringing together passionate delegates from across the globe. Our conference simulates various UN committees and international organizations, providing a platform for students to engage in diplomatic negotiations and debate.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 leading-relaxed"
            >
              With a legacy of excellence spanning several years, VIT MUN has become a cornerstone event in the collegiate MUN circuit, known for its high-quality debate, professional organization, and inclusive environment.
            </motion.p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;