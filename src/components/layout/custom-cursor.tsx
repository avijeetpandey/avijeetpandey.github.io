import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(pointer: fine)").matches;
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[70] hidden h-12 w-12 rounded-full border border-foreground/20 bg-foreground/5 backdrop-blur-sm md:block"
        animate={{ x: position.x - 24, y: position.y - 24 }}
        transition={{ type: "spring", stiffness: 280, damping: 24, mass: 0.2 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[70] hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.9)] md:block"
        animate={{ x: position.x - 5, y: position.y - 5 }}
        transition={{ type: "spring", stiffness: 520, damping: 36, mass: 0.08 }}
      />
    </>
  );
}
