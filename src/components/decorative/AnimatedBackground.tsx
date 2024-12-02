import React from 'react';
import { motion } from 'framer-motion';
import { GlowingOrbs } from './GlowingOrbs';
import { ParticleEffect } from './ParticleEffect';
import { FloatingShapes } from './FloatingShapes';
import { BackgroundPattern } from './BackgroundPattern';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full"
      >
        <BackgroundPattern />
        <GlowingOrbs />
        <ParticleEffect />
        <FloatingShapes />
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-[2px]" />
      </motion.div>
    </div>
  );
};