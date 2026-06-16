import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, FolderGit2 } from "lucide-react";

import {
  fadeUp,
  interactiveLift,
  staggerContainer,
  viewport,
} from "@/lib/animations";
import { experienceTimeline, featuredProjects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/layout/section-heading";

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
            <div className="grid gap-4">
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
              className="grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.name} variants={fadeUp} {...interactiveLift}>
                  <Card className="h-full">
                    <CardHeader className="space-y-4 p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <Badge className="px-3 py-1.5">{project.tag}</Badge>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-white"
                        >
                          <FolderGit2 className="size-4" />
                        </a>
                      </div>
                      <CardTitle className="text-xl text-white sm:text-2xl">{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6 pt-0 sm:p-7 sm:pt-0 md:flex md:items-start md:justify-between md:gap-8">
                      <div className="space-y-3 md:max-w-2xl">
                        <p className="text-base leading-7 text-slate-200">{project.summary}</p>
                        <p className="text-sm leading-7 text-slate-400">{project.detail}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                        {project.stack.map((item) => (
                          <Badge key={item} variant="secondary" className="px-3 py-1.5 text-sm">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
            className="grid gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Card>
                <CardContent className="space-y-4 p-6 sm:p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <BriefcaseBusiness className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    Five years in the part of the stack that carries the load.
                  </h3>
                  <p className="max-w-3xl text-base leading-7 text-slate-300 sm:leading-8">
                    Ingestion, trading, downloads, payments, analytics, and the kind of
                    backend systems where numbers, uptime, and latency are not optional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="grid gap-4" variants={staggerContainer}>
              {experienceTimeline.map((item) => (
                <motion.div key={item.company} variants={fadeUp}>
                  <Card>
                    <CardContent className="space-y-4 p-6 sm:p-7 md:flex md:items-start md:justify-between md:gap-8">
                      <div className="space-y-4 md:max-w-3xl">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                            <Badge variant="outline">{item.period}</Badge>
                          </div>
                          <p className="text-sm text-primary">{item.title}</p>
                          <p className="text-sm text-slate-400">{item.location}</p>
                        </div>
                        <div className="space-y-2">
                          {item.highlights.map((highlight) => (
                            <p key={highlight} className="text-sm leading-7 text-slate-300">
                              {highlight}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
