import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, FolderGit2, Layers } from "lucide-react";

import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";
import { experienceTimeline, featuredProjects } from "@/lib/data";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CodeBlock } from "@/components/visuals/code-block";

type Project = (typeof featuredProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  const onSpotlight = useSpotlight();
  const hasArchitecture = "codeSnippet" in project || "architectureNotes" in project;

  return (
    <motion.div
      variants={fadeUp}
      className="h-full"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Card
        onPointerMove={onSpotlight}
        className="spotlight-card spotlight-border group flex h-full flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)]"
      >
        <CardContent className="relative z-[2] flex h-full flex-col gap-4 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Badge className="px-3 py-1.5">{project.tag}</Badge>
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {project.name}
              </h3>
            </div>
            <div className="flex gap-2">
              {hasArchitecture && (
                <Sheet>
                  <SheetTrigger asChild>
                    <motion.button
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.04] text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View architecture for ${project.name}`}
                    >
                      <Layers className="size-4" />
                    </motion.button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[min(32rem,calc(100vw-2rem))] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Layers className="size-5 text-primary" />
                        {project.name} Architecture
                      </SheetTitle>
                      <SheetDescription>
                        Technical deep-dive into the system design and implementation.
                      </SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 space-y-6">
                      {"codeSnippet" in project && project.codeSnippet && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">Core Implementation</h4>
                          <CodeBlock
                            code={project.codeSnippet}
                            filename={project.name.toLowerCase().replace(/\s+/g, "-") + ".rs"}
                          />
                        </div>
                      )}

                      {"architectureNotes" in project && project.architectureNotes && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">System Design</h4>
                          <p className="text-sm leading-7 text-muted-foreground">
                            {project.architectureNotes}
                          </p>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        View on GitHub
                        <ExternalLink className="size-3.5" />
                      </a>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              <motion.a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} on GitHub`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.04] text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderGit2 className="size-4" />
              </motion.a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-base leading-7 text-foreground/80">{project.summary}</p>
            <p className="text-sm leading-7 text-muted-foreground">{project.detail}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.stack.map((item) => (
              <motion.span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
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
    <div ref={timelineRef} className="relative pl-8 sm:pl-12 md:pl-16">
      {/* Track */}
      <div className="absolute left-[11px] top-4 bottom-4 w-px bg-border/50 sm:left-[15px] md:left-[19px]" />
      {/* Scroll-driven fill */}
      <motion.div
        className="absolute left-[11px] top-4 bottom-4 w-px origin-top bg-gradient-to-b from-[hsl(var(--metric-accent))] via-[hsl(var(--accent-via))] to-[hsl(var(--accent-to))] sm:left-[15px] md:left-[19px]"
        style={{ scaleY: fillScale, opacity: fillOpacity }}
      />

      <motion.div
        className="flex flex-col gap-12 sm:gap-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {experienceTimeline.map((item, index) => (
          <motion.div key={item.company} variants={fadeUp} className="relative">
            {/* Glowing node */}
            <span className="absolute -left-8 top-1 flex h-5 w-5 items-center justify-center sm:-left-12 md:-left-16">
              <motion.span
                className="absolute h-5 w-5 rounded-full"
                style={{ background: "radial-gradient(circle, hsl(var(--metric-accent) / 0.4), transparent 70%)" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
              />
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--metric-accent))] shadow-[0_0_12px_hsl(var(--metric-accent)/0.8),_0_0_24px_hsl(var(--metric-accent)/0.4)]" />
            </span>

            {/* Unboxed content - no card wrapper */}
            <div className="space-y-4">
              {/* Header row */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="font-semibold text-metric-accent">{item.company}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-muted-foreground">{item.location}</span>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground tabular-nums">
                  {item.period}
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-3 border-l border-border/30 pl-4">
                {item.highlights.map((highlight, highlightIndex) => (
                  <motion.p
                    key={highlightIndex}
                    className="text-sm leading-7 text-foreground/75 sm:text-base"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * highlightIndex, duration: 0.4 }}
                  >
                    {highlight}
                  </motion.p>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/50 bg-foreground/[0.02] px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
      {/* Projects Section - Asymmetric Layout */}
      <section id="projects" className="section-shell">
        <div className="section-inner">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            {/* Sticky header column */}
            <div className="md:col-span-4">
              <SectionHeading
                eyebrow="Projects"
                title="Selected work."
                description="A small selection of backend systems, tooling, and side projects I&apos;ve enjoyed building."
                sticky
              />
            </div>

            {/* Scrolling content column */}
            <div className="md:col-span-8">
              {loading ? (
                <div className="grid gap-4 lg:grid-cols-2">
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
                <motion.div
                  className="grid gap-4 lg:grid-cols-2 lg:gap-5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Asymmetric Layout */}
      <section id="experience" className="section-shell">
        <div className="section-inner">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10 lg:gap-14">
            {/* Sticky header column */}
            <div className="md:col-span-4">
              <SectionHeading
                eyebrow="Experience"
                title="Experience."
                description="Backend-heavy roles across streaming, fintech, SaaS, and product infrastructure."
                sticky
              />

              <motion.div
                className="mt-6 flex items-start gap-3 text-sm text-muted-foreground md:sticky md:top-[22rem]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />
                Five years in the part of the stack that carries the load — ingestion, trading,
                downloads, payments, and analytics where uptime and latency are not optional.
              </motion.div>
            </div>

            {/* Scrolling content column */}
            <div className="md:col-span-8">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
