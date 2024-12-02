import React from 'react';
import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  const shapes = [
    { type: '★', color: 'text-blue-400', size: 'text-2xl', delay: 0 },
    { type: '♥', color: 'text-purple-400', size: 'text-3xl', delay: 1 },
    { type: '◆', color: 'text-indigo-400', size: 'text-xl', delay: 2 },
    { type: '●', color: 'text-blue-300', size: 'text-2xl', delay: 0.5 },
    { type: '✦', color: 'text-purple-300', size: 'text-3xl', delay: 1.5 },
    { type: '♦', color: 'text-indigo-300', size: 'text-2xl', delay: 2.5 },
    { type: '✧', color: 'text-blue-200', size: 'text-xl', delay: 3 },
    { type: '♠', color: 'text-purple-200', size: 'text-2xl', delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} ${shape.size} opacity-30`}
          initial={{ 
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        >
          {shape.type}
        </motion.div>
      ))}
    </div>
  );
};