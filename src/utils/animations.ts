import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const slideIn: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const rotateIn: Variants = {
  initial: {
    rotate: -180,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
};

export const buttonHover = {
  scale: 1.05,
  y: -5,
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const cardHover = {
  y: -10,
  scale: 1.02,
  rotateY: 5,
  boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};