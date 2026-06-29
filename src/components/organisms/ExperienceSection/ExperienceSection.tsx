import { motion } from "framer-motion";
import { Card } from "@/components/atoms/Card/Card";
import { Container } from "@/components/atoms/Container/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EARLIER_EXPERIENCE, EXPERIENCE } from "@/lib/constants";

export function ExperienceSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="14+ years building and shipping software across web, mobile, and cloud infrastructure."
        />
        <div className="space-y-6">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <p className="text-cyan-400">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
          <Card className="p-6">
            <p className="text-sm font-semibold text-white">Earlier Experience</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {EARLIER_EXPERIENCE}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
