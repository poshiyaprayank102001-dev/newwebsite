// Reusable animation variants for the application
import type { Variants } from "framer-motion";

// Ultra-smooth easing curves for fluid animations
const smoothEase = [0.25, 0.1, 0.25, 1] as const; // Smooth ease-in-out
const smoothEaseOut = [0.16, 1, 0.3, 1] as const; // Smooth ease-out
const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.5,
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig,
      stiffness: 80,
      damping: 25,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.2, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ...springConfig,
      stiffness: 60,
      damping: 25,
      mass: 0.8,
    },
  },
};

export const imageVariantsRight: Variants = {
  hidden: { opacity: 0, scale: 1.2, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ...springConfig,
      stiffness: 60,
      damping: 25,
      mass: 0.8,
    },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springConfig,
      stiffness: 80,
      damping: 25,
    },
  },
};

export const textVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springConfig,
      stiffness: 80,
      damping: 25,
    },
  },
};

export const hoverImageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springConfig,
      stiffness: 120,
      damping: 20,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export const pageHeaderVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const buttonHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};
