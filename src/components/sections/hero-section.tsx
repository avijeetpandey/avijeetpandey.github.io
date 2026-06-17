import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import {
  ctaLift,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { NodeGraph } from "@/components/visuals/node-graph";
import { cn } from "@/lib/utils";

function scrollToHash(hash: string) {
  const target = document.getElementById(hash.replace("#", ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const metrics = [
  { label: "JioHotstar", value: "Millions of heartbeats", highlight: "/ 60s" },
  { label: "Probo", value: "150K DAU", highlight: "Core Engine" },
  { label: "Impact", value: "30% ↓", highlight: "Failure Rate" },
] as const;

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
            <p className="text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase sm:text-sm">
              Infrastructure · Event systems · High-stakes platforms
            </p>
            <h1 className="max-w-4xl text-[2.9rem] leading-[0.92] font-semibold tracking-[-0.06em] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[5.8rem]">
              <span className="text-gradient-section">I build systems</span>
              <span className="text-gradient-accent block">that don&apos;t break.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Senior Backend Engineer based in Bengaluru. Scaling infrastructure,
              event-driven architectures, and high-stakes platforms.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Magnetic>
              <motion.a
                href="#projects"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "button-glow")}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash("#projects");
                }}
                {...ctaLift}
              >
                View the Arsenal
                <ArrowRight />
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash("#contact");
                }}
                {...ctaLift}
              >
                Let&apos;s Talk Scale
              </motion.a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
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
          {/* Node Graph Background */}
          <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16">
            <NodeGraph />
          </div>

          {/* Radial glow behind metrics */}
          <div className="absolute -inset-4 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_var(--metric-glow),_transparent_60%)] blur-2xl" />

          {/* Metrics - stripped design */}
          <div className="relative space-y-3 sm:space-y-4">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current operating range</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Scale, throughput, reliability
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-foreground/[0.04] text-primary">
                <Sparkles className="size-4" />
              </div>
            </div>

            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative rounded-2xl border border-transparent bg-foreground/[0.02] px-5 py-4 transition-all hover:border-primary/20 hover:bg-foreground/[0.04] sm:px-6 sm:py-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ x: 4 }}
              >
                {/* Subtle left accent bar */}
                <motion.span
                  className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-[hsl(var(--metric-accent))] to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                />

                <p className="text-[10px] font-medium tracking-[0.28em] text-muted-foreground uppercase sm:text-xs">
                  {item.label}
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                  <span className="text-metric-accent">{item.value}</span>
                  <span className="ml-2 text-foreground/70">{item.highlight}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
