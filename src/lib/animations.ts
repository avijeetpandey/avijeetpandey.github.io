import { type Variants } from "framer-motion";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Smooth, premium spring used for hovers and layout transitions. */
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
} as const;

/** Snappier spring for small UI affordances. */
export const snappySpring = {
  type: "spring",
  stiffness: 400,
  damping: 28,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const viewport = {
  once: true,
  amount: 0.2,
} as const;

/** Subtle 3D-ish lift for cards on hover. */
export const interactiveLift = {
  whileHover: { y: -2, scale: 1.01 },
  whileTap: { scale: 0.99 },
  transition: springTransition,
} as const;

/** Stronger lift for primary CTAs. */
export const ctaLift = {
  whileHover: { y: -3, scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: springTransition,
} as const;
