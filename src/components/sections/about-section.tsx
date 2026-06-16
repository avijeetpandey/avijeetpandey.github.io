import { motion } from "framer-motion";
import { Camera, Dog, MapPin } from "lucide-react";

import { fadeUp, interactiveLift, staggerContainer, viewport } from "@/lib/animations";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/layout/section-heading";

export function AboutSection() {
  const onSpotlight = useSpotlight();

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
          <motion.div variants={fadeUp} {...interactiveLift}>
            <Card
              onPointerMove={onSpotlight}
              className="spotlight-card spotlight-border h-full"
            >
              <CardContent className="relative z-[2] flex h-full flex-col gap-6 p-6 text-base leading-7 text-muted-foreground sm:p-8 sm:leading-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-foreground/[0.04] px-3 py-1.5 text-sm font-medium text-foreground">
                  <MapPin className="size-4 text-primary" />
                  Bengaluru, India
                </div>
                <div className="space-y-4">
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
                      className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
                    >
                      Aiko
                    </a>
                    .
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2.5">
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

          <motion.div variants={fadeUp} {...interactiveLift}>
            <Card
              onPointerMove={onSpotlight}
              className="spotlight-card spotlight-border h-full"
            >
              <CardContent className="relative z-[2] flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="space-y-4">
                  <h3 className="text-gradient-accent text-2xl font-semibold">
                    Clear thinking. Low noise.
                  </h3>
                  <p className="text-base leading-8 text-muted-foreground">
                    I like clean architecture, sharp execution, and teams that care about
                    engineering quality without turning every decision into theater.
                  </p>
                </div>

                <a
                  href="https://instagram.com/avijeetandaiko"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-auto overflow-hidden rounded-[1.25rem] border border-border bg-foreground/[0.02] p-4 transition-colors hover:bg-foreground/[0.04]"
                >
                  {/* Warm radial glow behind the text */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.28),_transparent_65%)] blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/25 to-rose-500/25 text-amber-500">
                      <Dog className="size-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Aiko keeps the stack balanced.</p>
                      <p className="text-sm text-muted-foreground">
                        Backend by profession. Dog walks for recovery.
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 text-white">
                      <Camera className="size-4" />
                    </span>
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
