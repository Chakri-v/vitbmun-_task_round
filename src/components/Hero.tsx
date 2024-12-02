import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { AnimatedBackground } from './decorative/AnimatedBackground';
import { ScrollProgress } from './decorative/ScrollProgress';

const Hero = () => {
  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="relative inline-block"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                className="absolute -top-6 -right-6 text-4xl"
              >
                🌟
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient">
                VIT Model United Nations
              </h1>
            </motion.div>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Join the largest student-run international relations simulation in VIT. Debate, negotiate, and shape the future of global diplomacy.
            </motion.p>
            
            <motion.button
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:-translate-y-1"
            >
              Register Now
            </motion.button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "500+ Delegates",
                description: "From universities worldwide"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "12+ Committees",
                description: "Diverse range of simulations"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "3 Days",
                description: "Of intensive diplomacy"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-2xl perspective-1000"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;