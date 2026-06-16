import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import {
  fadeUp,
  interactiveLift,
  staggerContainer,
  viewport,
} from "@/lib/animations";
import { experienceTimeline, featuredProjects } from "@/lib/data";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/layout/section-heading";

function ProjectsGrid() {
  const onSpotlight = useSpotlight();

  return (
    <motion.div
      className="grid gap-4 sm:gap-5 md:grid-cols-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {featuredProjects.map((project) => (
        <motion.div key={project.name} variants={fadeUp} {...interactiveLift} className="h-full">
          <Card
            onPointerMove={onSpotlight}
            className="spotlight-card spotlight-border group flex h-full flex-col"
          >
            <CardContent className="relative z-[2] flex h-full flex-col gap-4 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <Badge className="px-3 py-1.5">{project.tag}</Badge>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.04] text-muted-foreground transition-all hover:border-primary/40 hover:text-primary group-hover:-translate-y-0.5"
                >
                  <FolderGit2 className="size-4" />
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-base leading-7 text-foreground/80">{project.summary}</p>
                <p className="text-sm leading-7 text-muted-foreground">{project.detail}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const fillScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const fillOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={timelineRef} className="relative pl-8 sm:pl-10">
      {/* Track */}
      <div className="absolute left-[10px] top-2 bottom-2 w-px bg-border sm:left-[14px]" />
      {/* Scroll-driven fill */}
      <motion.div
        className="absolute left-[10px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[hsl(var(--accent-from))] via-[hsl(var(--accent-via))] to-[hsl(var(--accent-to))] sm:left-[14px]"
        style={{ scaleY: fillScale, opacity: fillOpacity }}
      />

      <motion.div
        className="flex flex-col gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {experienceTimeline.map((item) => (
          <motion.div key={item.company} variants={fadeUp} className="relative">
            {/* Node */}
            <span className="absolute -left-8 top-7 flex h-3.5 w-3.5 items-center justify-center sm:-left-10">
              <span className="absolute h-3.5 w-3.5 rounded-full bg-primary/30" />
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
            </span>

            <Card>
              <CardContent className="space-y-4 p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground tabular-nums">
                    {item.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <span className="font-medium text-primary">{item.company}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="text-muted-foreground">{item.location}</span>
                </div>

                <div className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <p key={highlight} className="text-sm leading-7 text-foreground/80">
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function WorkSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="projects" className="section-shell">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work."
            description="A small selection of backend systems, tooling, and side projects I&apos;ve enjoyed building."
          />

          {loading ? (
            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, item) => (
                <Card key={item}>
                  <CardContent className="space-y-5 p-6 sm:p-7">
                    <Skeleton className="h-5 w-28" />
                    <Skeleton className="h-10 w-2/3" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[92%]" />
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} className="h-8 w-24 rounded-full" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <ProjectsGrid />
          )}
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Experience"
            title="Experience."
            description="Backend-heavy roles across streaming, fintech, SaaS, and product infrastructure."
          />

          <motion.div
            className="flex items-start gap-3 text-sm text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />
            Five years in the part of the stack that carries the load — ingestion, trading,
            downloads, payments, and analytics where uptime and latency are not optional.
          </motion.div>

          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}
