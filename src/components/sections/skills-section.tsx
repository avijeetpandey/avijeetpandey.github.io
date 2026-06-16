import { motion } from "framer-motion";
import { Blocks, DatabaseZap, ServerCog, Smartphone } from "lucide-react";

import { fadeUp, interactiveLift, staggerContainer, viewport } from "@/lib/animations";
import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/layout/section-heading";

const icons = [ServerCog, DatabaseZap, Smartphone] as const;
export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title="Core stack."
          description="A tighter view of the tools I lean on most in production work."
        />

        <motion.div
          className="grid gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Blocks;

            return (
              <motion.div key={group.title} variants={fadeUp} {...interactiveLift}>
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative flex h-full flex-col gap-5 p-6 sm:p-7 md:flex-row md:items-start md:justify-between">
                    <motion.span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary"
                      whileHover={{ y: -2, scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="size-6" />
                    </motion.span>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      <p className="text-base leading-7 text-muted-foreground">
                        {group.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
