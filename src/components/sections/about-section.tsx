import { motion } from "framer-motion";
import { Camera, HeartHandshake, MapPin } from "lucide-react";

import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/layout/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="About"
          title="Backend is where I do my best work."
          description="I focus on the systems layer: throughput, reliability, and the engineering decisions that keep products stable."
        />

        <motion.div
          className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <Card className="h-full">
              <CardContent className="space-y-4 p-6 text-base leading-7 text-slate-300 sm:p-8 sm:leading-8">
                <p>
                  I write code that handles the heavy lifting. From architecting trading
                  engines to streamlining massive data ingestion pipelines, I live in the
                  backend.
                </p>
                <p>
                  When I&apos;m not orchestrating Kafka flows or squeezing milliseconds out
                  of PostgreSQL, I&apos;m probably wandering Bengaluru with my Golden
                  Retriever,{" "}
                  <a
                    href="https://instagram.com/avijeetandaiko"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white underline decoration-white/20 underline-offset-4 transition-colors hover:text-primary"
                  >
                    Aiko
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["System Design", "Kafka", "AWS", "Redis", "PostgreSQL", "Scalability"].map(
                    (item) => (
                      <Badge key={item} variant="secondary" className="px-3 py-1.5 text-sm">
                        {item}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                    <MapPin className="size-4 text-primary" />
                    Bengaluru, India
                  </div>
                  <h3 className="text-gradient text-2xl font-semibold">Clear thinking. Low noise.</h3>
                  <p className="text-base leading-8 text-slate-300">
                    I like clean architecture, sharp execution, and teams that care about
                    engineering quality without turning every decision into theater.
                  </p>
                </div>

                <a
                  href="https://instagram.com/avijeetandaiko"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.25rem] border border-white/8 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <HeartHandshake className="size-5" />
                    </span>
                    <div>
                      <p className="font-medium text-white">Aiko keeps the stack balanced.</p>
                      <p className="text-sm text-slate-400">
                        Backend by profession. Dog walks for recovery.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 group-hover:text-white">
                    <Camera className="size-4" />
                    instagram.com/avijeetandaiko
                  </div>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
