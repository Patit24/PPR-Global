"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Exact pointer position (for precise dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for outer aura ring (lagging follow effect)
  const springRingX = useSpring(cursorX, { stiffness: 450, damping: 28, mass: 0.15 });
  const springRingY = useSpring(cursorY, { stiffness: 450, damping: 28, mass: 0.15 });

  // Slower ambient atmospheric light glow
  const glowX = useSpring(cursorX, { stiffness: 120, damping: 24, mass: 0.4 });
  const glowY = useSpring(cursorY, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia("(min-width: 768px) and (pointer: fine)").matches) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerDown = () => setIsClicked(true);
    const handlePointerUp = () => setIsClicked(false);

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, [tabindex="0"]'
      );
      setIsHovered(!!interactiveEl);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Large Soft Ambient Neon Light Halo */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-36 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(184,255,61,0.22)_0%,rgba(45,212,191,0.12)_45%,transparent_75%)] blur-2xl mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          scale: isHovered ? 1.4 : isClicked ? 0.8 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. Fluid Glowing Ring (Expands on Hover, Shrinks on Click) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-5 -top-5 rounded-full border border-acid shadow-[0_0_15px_rgba(184,255,61,0.4),inset_0_0_8px_rgba(184,255,61,0.2)]"
        style={{
          x: springRingX,
          y: springRingY,
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          borderColor: isHovered ? "#b8ff3d" : "rgba(184, 255, 61, 0.7)",
          backgroundColor: isHovered ? "rgba(184, 255, 61, 0.15)" : "transparent"
        }}
        animate={{
          scale: isClicked ? 0.75 : 1
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />

      {/* 3. Precise Acid-Neon Center Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1 -top-1 h-2 w-2 rounded-full bg-acid shadow-[0_0_10px_#b8ff3d,0_0_20px_#b8ff3d]"
        style={{
          x: cursorX,
          y: cursorY
        }}
        animate={{
          scale: isHovered ? 0 : isClicked ? 1.6 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
