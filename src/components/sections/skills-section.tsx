import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Container,
  Database,
  HardDrive,
  Layers,
  Network,
  Server,
  ServerCog,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { fadeUp, interactiveLift, staggerContainer, viewport } from "@/lib/animations";
import { skillGroups } from "@/lib/data";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/layout/section-heading";

const infraIcons: { icon: LucideIcon; label: string }[] = [
  { icon: Cloud, label: "AWS" },
  { icon: Zap, label: "Kafka" },
  { icon: HardDrive, label: "Redis" },
  { icon: Container, label: "Docker" },
  { icon: Boxes, label: "K8s" },
  { icon: Server, label: "GCP" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Network, label: "Eventing" },
];

function FloatingInfraIcons() {
  return (
    <div className="mt-auto grid grid-cols-4 gap-2.5">
      {infraIcons.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={label}
          className="group/icon flex flex-col items-center gap-1"
          animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
          transition={{
            duration: 4 + (index % 4) * 0.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] text-primary shadow-[0_6px_16px_hsl(var(--primary)/0.1)] transition-colors group-hover/icon:border-primary/40 sm:h-10 sm:w-10 sm:rounded-2xl">
            <Icon className="size-4 sm:size-5" />
          </span>
          <span className="text-[9px] tracking-wide text-muted-foreground sm:text-[10px]">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  const onSpotlight = useSpotlight();

  const coreGroup = skillGroups.find((g) => g.title === "The Core");
  const infraGroup = skillGroups.find((g) => g.title === "Data & Infrastructure");
  const frontendGroup = skillGroups.find((g) => g.title === "Frontend & iOS");

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title="Core stack."
          description="A tighter view of the tools I lean on most in production work."
        />

        <motion.div
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* The Core - spans 2 cols on lg, full row on sm */}
          {coreGroup && (
            <motion.div
              variants={fadeUp}
              {...interactiveLift}
              className="sm:col-span-2 lg:col-span-2 lg:row-span-1"
            >
              <Card
                onPointerMove={onSpotlight}
                className="spotlight-card spotlight-border group h-full"
              >
                <CardContent className="relative z-[2] flex h-full flex-col gap-4 p-5 sm:p-6">
                  <motion.span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-foreground/[0.05] text-primary"
                    whileHover={{ y: -2, scale: 1.05, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ServerCog className="size-5" />
                  </motion.span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{coreGroup.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                      {coreGroup.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {coreGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Frontend & iOS - spans 1 col on lg */}
          {frontendGroup && (
            <motion.div
              variants={fadeUp}
              {...interactiveLift}
              className="lg:col-span-1 lg:row-span-1"
            >
              <Card
                onPointerMove={onSpotlight}
                className="spotlight-card spotlight-border group h-full"
              >
                <CardContent className="relative z-[2] flex h-full flex-col gap-4 p-5 sm:p-6">
                  <motion.span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-foreground/[0.05] text-primary"
                    whileHover={{ y: -2, scale: 1.05, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Smartphone className="size-5" />
                  </motion.span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{frontendGroup.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-7">
                      {frontendGroup.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {frontendGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Data & Infrastructure - spans 1 col on lg, taller with floating icons */}
          {infraGroup && (
            <motion.div
              variants={fadeUp}
              {...interactiveLift}
              className="sm:col-span-2 lg:col-span-1 lg:row-span-1"
            >
              <Card
                onPointerMove={onSpotlight}
                className="spotlight-card spotlight-border group h-full"
              >
                <CardContent className="relative z-[2] flex h-full flex-col gap-4 p-5 sm:p-6">
                  <motion.span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-foreground/[0.05] text-primary"
                    whileHover={{ y: -2, scale: 1.05, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Layers className="size-5" />
                  </motion.span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{infraGroup.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {infraGroup.description}
                    </p>
                  </div>
                  <FloatingInfraIcons />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
