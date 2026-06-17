import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import {
  ctaLift,
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

// Cinematic animation variants
const curtainReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const bodyStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.9,
    },
  },
};

function CurtainText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span className="block" variants={curtainReveal}>
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl items-center px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-18 lg:px-8"
    >
      <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div className="space-y-6 sm:space-y-8">
          {/* Badges with fade in */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="gap-2 py-1.5">
              <Sparkles className="size-3.5" />
              Bengaluru · Senior Backend Engineer
            </Badge>
            <Badge variant="outline" className="py-1.5">
              JioHotstar · Probo
            </Badge>
          </motion.div>

          {/* Headline with cinematic curtain reveal */}
          <motion.div
            className="space-y-6"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-[11px] font-medium tracking-[0.28em] text-muted-foreground uppercase sm:text-sm"
              variants={fadeUpDelayed}
            >
              Infrastructure · Event systems · High-stakes platforms
            </motion.p>

            <h1 className="max-w-4xl text-[2.9rem] leading-[0.92] font-semibold tracking-[-0.06em] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[5.8rem]">
              <CurtainText className="text-gradient-section">
                I build systems
              </CurtainText>
              <CurtainText className="text-gradient-accent">
                that don&apos;t break.
              </CurtainText>
            </h1>
          </motion.div>

          {/* Body text fades in after headline */}
          <motion.div
            className="space-y-6"
            variants={bodyStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
              variants={fadeUpDelayed}
            >
              Senior Backend Engineer based in Bengaluru. Scaling infrastructure,
              event-driven architectures, and high-stakes platforms.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              variants={fadeUpDelayed}
            >
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
              className="flex items-center gap-3 text-sm text-muted-foreground"
              variants={fadeUpDelayed}
            >
              <ChevronDown className="size-4" />
              Scaling streaming, fintech, and event-driven systems for the last 5 years.
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ delay: 0.7 + index * 0.12, duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                whileHover={{ x: 4 }}
              >
                {/* Subtle left accent bar */}
                <motion.span
                  className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-[hsl(var(--metric-accent))] to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.9 + index * 0.15, duration: 0.4 }}
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
