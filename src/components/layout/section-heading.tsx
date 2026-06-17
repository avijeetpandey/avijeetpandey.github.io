import { motion } from "framer-motion";

import { fadeUp, viewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  sticky?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  sticky = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "max-w-3xl space-y-5",
        sticky && "md:sticky md:top-28 md:self-start"
      )}
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
