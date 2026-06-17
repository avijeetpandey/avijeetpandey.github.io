import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 isolate overflow-hidden"
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Subtle grid - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden sm:block [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" />

      {/* Slow-moving radial mesh glows - simplified on mobile */}
      <motion.div
        className="absolute right-[-8rem] top-[-8rem] h-[20rem] w-[20rem] rounded-full blur-[100px] sm:right-[-16rem] sm:top-[-14rem] sm:h-[38rem] sm:w-[38rem] sm:blur-[150px]"
        style={{ backgroundColor: "var(--glow-1)" }}
        animate={{ x: [0, 26, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-[-8rem] h-[18rem] w-[18rem] rounded-full blur-[100px] sm:bottom-[-16rem] sm:left-[-14rem] sm:h-[34rem] sm:w-[34rem] sm:blur-[160px]"
        style={{ backgroundColor: "var(--glow-2)" }}
        animate={{ x: [0, -22, 0], y: [0, -20, 0], scale: [1.04, 1, 1.04] }}
        transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] top-[10%] hidden h-[26rem] w-[26rem] rounded-full blur-[150px] sm:block"
        style={{ backgroundColor: "var(--glow-1)" }}
        animate={{ x: [0, 30, -10, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Top vignette to seat the floating nav */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
    </div>
  );
}
