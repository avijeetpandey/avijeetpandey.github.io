import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 isolate overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:88px_88px]" />
      <motion.div
        className="absolute right-[-14rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-primary/18 blur-[140px]"
        animate={{ x: [0, 18, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15rem] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-[150px]"
        animate={{ x: [0, -16, 0], y: [0, -18, 0], scale: [1.02, 1, 1.02] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[22%] h-56 w-56 rounded-full bg-white/[0.03] blur-[100px]"
        animate={{ opacity: [0.24, 0.5, 0.24] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}
