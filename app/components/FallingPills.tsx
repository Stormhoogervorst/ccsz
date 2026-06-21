"use client";

import { motion, useReducedMotion } from "framer-motion";

type Pill = {
  label: string;
  /** Green colorway classes (background + readable text). */
  color: string;
  /** Desktop scatter anchor (percentage from the left edge of the field). */
  left: string;
  /** Desktop scatter anchor (pixels from the top of the field). */
  top: number;
  /** Resting rotation in degrees for a loose, organic look. */
  rotate: number;
  /** Per-pill spring variation so they don't land perfectly in sync. */
  stiffness: number;
  damping: number;
  mass: number;
  /** Minimal random-feeling start delay (max ~0.05s); all fall together. */
  delay: number;
};

// Colours alternate across the green/lila accent palette so no two adjacent
// pills share a colour. Lime and lila always carry dark text; the forest and
// green tones always carry light text (see contrast rules).
const pills: Pill[] = [
  {
    label: "Identiteit",
    color: "bg-lila text-text-on-lime",
    left: "10%",
    top: 16,
    rotate: -6,
    stiffness: 220,
    damping: 9,
    mass: 1,
    delay: 0,
  },
  {
    label: "Versterken",
    color: "bg-forest text-text-on-dark",
    left: "27%",
    top: 4,
    rotate: 5,
    stiffness: 260,
    damping: 10,
    mass: 1.1,
    delay: 0.03,
  },
  {
    label: "Zelfstandig",
    color: "bg-lime text-text-on-lime",
    left: "16%",
    top: 70,
    rotate: -3,
    stiffness: 200,
    damping: 8,
    mass: 1.05,
    delay: 0.05,
  },
  {
    label: "Impact",
    color: "bg-green text-text-on-dark",
    left: "45%",
    top: -4,
    rotate: 7,
    stiffness: 280,
    damping: 9,
    mass: 0.95,
    delay: 0.02,
  },
  {
    label: "Coöperatie",
    color: "bg-forest-medium text-text-on-dark",
    left: "54%",
    top: 20,
    rotate: -5,
    stiffness: 230,
    damping: 10,
    mass: 1.1,
    delay: 0.04,
  },
  {
    label: "Zorg",
    color: "bg-lime text-text-on-lime",
    left: "74%",
    top: 12,
    rotate: 4,
    stiffness: 300,
    damping: 9,
    mass: 0.9,
    delay: 0.01,
  },
  {
    label: "Samen",
    color: "bg-forest text-text-on-dark",
    left: "37%",
    top: 80,
    rotate: -7,
    stiffness: 210,
    damping: 8,
    mass: 1.15,
    delay: 0.05,
  },
  {
    label: "Cultuursensitief",
    color: "bg-green text-text-on-dark",
    left: "52%",
    top: 74,
    rotate: 4,
    stiffness: 250,
    damping: 10,
    mass: 1,
    delay: 0.02,
  },
];

const pillBase =
  "inline-flex min-h-14 items-center justify-center rounded-pill px-7 py-3.5 text-base font-semibold shadow-card md:min-h-16 md:text-lg";

const viewport = { once: true, amount: 0.3 } as const;

export function FallingPills() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto mt-12 w-full max-w-5xl md:mt-16">
      {/* Mobile / narrow: tidy wrapped row, subtler fall so nothing overlaps. */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:hidden">
        {pills.map((pill) => (
          <motion.span
            key={pill.label}
            className={`${pillBase} ${pill.color}`}
            initial={
              reduceMotion ? false : { y: -120, opacity: 0, rotate: pill.rotate }
            }
            whileInView={{ y: 0, opacity: 1, rotate: pill.rotate }}
            viewport={viewport}
            transition={{
              y: {
                type: "spring",
                stiffness: pill.stiffness,
                damping: pill.damping + 4,
                mass: pill.mass,
                delay: pill.delay,
              },
              opacity: { duration: 0.2, delay: pill.delay },
              rotate: {
                type: "spring",
                stiffness: pill.stiffness,
                damping: pill.damping + 4,
                delay: pill.delay,
              },
            }}
          >
            {pill.label}
          </motion.span>
        ))}
      </div>

      {/* Desktop: compact, centred cluster of pills (~2 rows, lightly
          overlapping) that fall + bounce together. */}
      <div className="relative mx-auto hidden h-[180px] max-w-4xl md:block lg:h-[200px]">
        {pills.map((pill) => (
          <motion.span
            key={pill.label}
            className={`${pillBase} absolute ${pill.color}`}
            style={{ left: pill.left, top: pill.top }}
            initial={
              reduceMotion ? false : { y: -340, opacity: 0, rotate: pill.rotate }
            }
            whileInView={{ y: 0, opacity: 1, rotate: pill.rotate }}
            viewport={viewport}
            transition={{
              y: {
                type: "spring",
                stiffness: pill.stiffness,
                damping: pill.damping,
                mass: pill.mass,
                delay: pill.delay,
              },
              opacity: { duration: 0.2, delay: pill.delay },
              rotate: {
                type: "spring",
                stiffness: pill.stiffness,
                damping: pill.damping,
                delay: pill.delay,
              },
            }}
          >
            {pill.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
