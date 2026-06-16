import { AnimatePresence, motion } from "framer-motion";

type PageLoaderProps = {
  active: boolean;
};

export function PageLoader({ active }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 backdrop-blur-2xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-border bg-foreground/[0.04] text-xl font-semibold text-foreground shadow-[0_0_60px_hsl(var(--primary)/0.22)]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              AKP
            </motion.div>
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--accent-from))] via-[hsl(var(--accent-via))] to-[hsl(var(--accent-to))]"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
            <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">
              Engineering premium systems
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
