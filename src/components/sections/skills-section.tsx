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

const groupIcons: Record<string, LucideIcon> = {
  "The Core": ServerCog,
  "Data & Infrastructure": Database,
  "Frontend & iOS": Smartphone,
};

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

const spanByTitle: Record<string, string> = {
  "The Core": "md:col-span-2",
  "Data & Infrastructure": "md:col-span-3",
  "Frontend & iOS": "md:col-span-1",
};

function FloatingInfraIcons() {
  return (
    <div className="relative grid grid-cols-4 gap-3 sm:grid-cols-8 md:max-w-md">
      {infraIcons.map(({ icon: Icon, label }, index) => (
        <motion.div
          key={label}
          className="group/icon flex flex-col items-center gap-1.5"
          animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
          transition={{
            duration: 4 + (index % 4) * 0.6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.15,
          }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-foreground/[0.04] text-primary shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-colors group-hover/icon:border-primary/40">
            <Icon className="size-5" />
          </span>
          <span className="text-[10px] tracking-wide text-muted-foreground">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  const onSpotlight = useSpotlight();

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title="Core stack."
          description="A tighter view of the tools I lean on most in production work."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-3 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.title] ?? Layers;
            const isInfra = group.title === "Data & Infrastructure";

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                {...interactiveLift}
                className={spanByTitle[group.title] ?? "md:col-span-1"}
              >
                <Card
                  onPointerMove={onSpotlight}
                  className="spotlight-card spotlight-border group h-full"
                >
                  <CardContent
                    className={
                      "relative z-[2] flex h-full flex-col gap-5 p-6 sm:p-7 " +
                      (isInfra ? "md:flex-row md:items-center md:justify-between md:gap-8" : "")
                    }
                  >
                    <div className="flex-1 space-y-4">
                      <motion.span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-foreground/[0.05] text-primary"
                        whileHover={{ y: -2, scale: 1.05, rotate: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Icon className="size-6" />
                      </motion.span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                        <p className="text-base leading-7 text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                      {!isInfra && (
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {isInfra && <FloatingInfraIcons />}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
