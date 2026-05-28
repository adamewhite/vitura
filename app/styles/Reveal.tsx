'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'up' | 'fade' | 'left' | 'right';

const distance = 24;

const variants: Record<Variant, Variants> = {
  up: {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -distance },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: distance },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.9,
  className,
  amount = 0.25,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease-out cubic — Webflow-like
      }}
    >
      {children}
    </motion.div>
  );
}

// Group variant — staggers children that are also wrapped in <RevealItem>.
export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  amount = 0.2,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  variant = 'up',
  duration = 0.9,
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
