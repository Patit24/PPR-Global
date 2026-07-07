"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingObjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute right-[9vw] top-28 h-44 w-44 rounded-[2rem] bg-white/[0.045] shadow-glow backdrop-blur-md"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -18, 0],
                rotateX: [18, 27, 18],
                rotateY: [-18, -8, -18]
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[5vw] top-[44vh] h-28 w-28 rounded-full border border-acid/30 bg-acid/[0.035]"
        animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
