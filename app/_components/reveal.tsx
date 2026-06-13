"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/* Shared scroll/load reveal primitives built on motion.dev.
   MotionConfig (see smooth-scroll.tsx) handles prefers-reduced-motion:
   transforms are dropped, opacity crossfades remain. */

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 18,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const tags = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  figure: motion.figure,
} as const;

type Tag = keyof typeof tags;

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  gap?: number;
};

export function Stagger({
  children,
  className,
  as = "div",
  delay = 0,
  gap = 0.09,
}: StaggerProps) {
  const Component = tags[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  y?: number;
  blur?: boolean;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 16,
  blur = false,
}: StaggerItemProps) {
  const Component = tags[as];
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: EASE },
    },
  };
  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
