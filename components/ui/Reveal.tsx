'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'article';
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container + item helpers
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
