import type { Variants, Transition } from 'framer-motion';

export const energizedTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...energizedTransition, delay: 0.1 },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...energizedTransition, delay: 0.15 + i * 0.08 },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...energizedTransition, delay: 0.1 + i * 0.1 },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...energizedTransition, delay: 0.1 + i * 0.1 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1 + i * 0.1 },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...energizedTransition, delay: 0.2 + i * 0.1 },
  }),
};

export const electricPulse: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: {
      opacity: { duration: 0.3 },
      scale: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
