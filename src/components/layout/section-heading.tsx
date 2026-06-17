import { motion } from "framer-motion";

import { fadeUp, viewport } from "@/lib/animations";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="max-w-3xl space-y-5"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-xs font-medium tracking-[0.22em] text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--accent-from))] to-[hsl(var(--accent-to))]" />
        {eyebrow}
      </div>
      <h2 className="text-gradient-section text-4xl font-bold tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-[1.0625rem]">
        {description}
      </p>
    </motion.div>
  );
}
