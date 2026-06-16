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
      className="max-w-3xl space-y-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <p className="text-sm font-medium tracking-[0.28em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-gradient text-3xl font-semibold tracking-[-0.06em] md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-[1.0625rem]">
        {description}
      </p>
    </motion.div>
  );
}
