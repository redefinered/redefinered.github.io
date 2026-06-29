import {
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/atoms/Card/Card";
import { Container } from "@/components/atoms/Container/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SKILL_GROUPS } from "@/lib/constants";

const iconMap = {
  code: Code2,
  layout: Layout,
  server: Server,
  cloud: Cloud,
  database: Database,
  sparkles: Sparkles,
};

export function SkillsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical proficiencies"
          description="A decade of production experience across the full stack, plus AI-accelerated workflows."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Card className="h-full p-6 transition-colors hover:border-cyan-500/20">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-zinc-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
