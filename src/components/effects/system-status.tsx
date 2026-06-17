import { motion } from "framer-motion";
import { memo } from "react";

export const SystemStatus = memo(function SystemStatus() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-border bg-background/80 px-3.5 py-2 shadow-lg backdrop-blur-xl dark:bg-background/60"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
      </span>

      {/* Status text */}
      <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-foreground/70 uppercase">
        SYS_OPT_OK · LATENCY 14ms
      </span>
    </motion.div>
  );
});
