import { AnimatePresence, motion } from "framer-motion";

type PageLoaderProps = {
  active: boolean;
};

export function PageLoader({ active }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#04060d]/95 backdrop-blur-2xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-xl font-semibold text-white shadow-[0_0_60px_rgba(141,176,255,0.18)]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              AKP
            </motion.div>
            <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary to-sky-300/80"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
            <p className="text-sm tracking-[0.24em] text-slate-300 uppercase">
              Engineering premium systems
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
