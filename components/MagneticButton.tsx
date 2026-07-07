"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });
  const glowX = useTransform(springX, [-16, 16], ["35%", "65%"]);
  const glowY = useTransform(springY, [-16, 16], ["35%", "65%"]);

  const base =
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "bg-fog text-ink hover:bg-acid"
      : "bg-white/5 text-fog shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)] hover:bg-white/10";

  return (
    <motion.a
      {...props}
      className={`${base} ${styles} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(184,255,61,0.32), transparent 42%)`
        }}
      />
      <span className="relative inline-flex items-center justify-center gap-2">{children}</span>
    </motion.a>
  );
}
