import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 isolate overflow-hidden"
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      {/* Subtle grid */}
      <div className="absolute inset-0 [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" />

      {/* Slow-moving radial mesh glows */}
      <motion.div
        className="absolute right-[-16rem] top-[-14rem] h-[38rem] w-[38rem] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--glow-1)" }}
        animate={{ x: [0, 26, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-[-14rem] h-[34rem] w-[34rem] rounded-full blur-[160px]"
        style={{ backgroundColor: "var(--glow-2)" }}
        animate={{ x: [0, -22, 0], y: [0, -20, 0], scale: [1.04, 1, 1.04] }}
        transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[42%] top-[14%] h-[26rem] w-[26rem] rounded-full blur-[150px]"
        style={{ backgroundColor: "var(--glow-1)" }}
        animate={{ x: [0, 30, -10, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Top vignette to seat the floating nav */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
    </div>
  );
}
