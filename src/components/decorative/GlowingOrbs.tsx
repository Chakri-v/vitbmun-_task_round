import React from 'react';
import { motion } from 'framer-motion';

export const GlowingOrbs = () => {
  const orbs = Array.from({ length: 15 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${
              index % 2 === 0 ? 'rgba(96, 165, 250, 0.2)' : 'rgba(167, 139, 250, 0.2)'
            }, transparent)`,
            filter: 'blur(8px)',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};