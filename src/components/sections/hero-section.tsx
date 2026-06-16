import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import {
  fadeUp,
  interactiveLift,
  springTransition,
  staggerContainer,
} from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function scrollToHash(hash: string) {
  const target = document.getElementById(hash.replace("#", ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl items-center px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-18 lg:px-8"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Badge className="gap-2 py-1.5">
              <Sparkles className="size-3.5" />
              Bengaluru · Senior Backend Engineer
            </Badge>
            <Badge variant="outline" className="py-1.5">
              JioHotstar · Probo
            </Badge>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-[11px] font-medium tracking-[0.28em] text-slate-400 uppercase sm:text-sm">
              Infrastructure · Event systems · High-stakes platforms
            </p>
            <h1 className="max-w-4xl text-[2.9rem] leading-[0.95] font-semibold tracking-[-0.08em] text-foreground sm:text-[4.2rem] md:text-[5.2rem] lg:text-[5.8rem]">
              I build systems
              <span className="text-gradient block">that don&apos;t break.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300/88 sm:text-lg sm:leading-8">
              Senior Backend Engineer based in Bengaluru. Scaling infrastructure,
              event-driven architectures, and high-stakes platforms.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "button-glow")}
              onClick={(event) => {
                event.preventDefault();
                scrollToHash("#projects");
              }}
              {...interactiveLift}
            >
              View the Arsenal
              <ArrowRight />
            </motion.a>
            <motion.a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
              onClick={(event) => {
                event.preventDefault();
                scrollToHash("#contact");
              }}
              {...interactiveLift}
            >
              Let&apos;s Talk Scale
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-muted-foreground">
            <ChevronDown className="size-4" />
            Scaling streaming, fintech, and event-driven systems for the last 5 years.
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6 before:absolute before:inset-[1px] before:rounded-[1.95rem] before:border before:border-white/[0.04] before:content-['']">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(154,102,255,0.12),_transparent_34%)]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Current operating range</p>
                <p className="mt-1 text-sm font-medium text-white">Scale, throughput, reliability</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-primary">
                <Sparkles className="size-4" />
              </div>
            </div>
            <div className="relative grid gap-3">
              {[
                { label: "JioHotstar", value: "Millions of heartbeats / 60s" },
                { label: "Probo", value: "150K DAU Core Engine" },
                { label: "Impact", value: "30% ↓ Failure Rate" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.025] p-4 sm:p-5"
                  animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                  transition={{
                    duration: 10 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-xs font-medium tracking-[0.28em] text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-white sm:text-xl">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {Array.from({ length: 6 }).map((_, index) => (
              <motion.span
                key={index}
                className="absolute hidden h-1.5 w-1.5 rounded-full bg-primary/60 sm:block"
                style={{
                  top: `${10 + ((index * 13) % 70)}%`,
                  left: `${8 + ((index * 17) % 78)}%`,
                }}
                animate={{ opacity: [0.18, 1, 0.18], scale: [1, 1.8, 1] }}
                transition={{
                  duration: 2.8 + index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ...springTransition,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
