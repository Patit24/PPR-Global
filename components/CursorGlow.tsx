"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const springX = useSpring(x, { stiffness: 140, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 140, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] hidden h-60 w-60 rounded-full bg-acid/10 blur-3xl mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
