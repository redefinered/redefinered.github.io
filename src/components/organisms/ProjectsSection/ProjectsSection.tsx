import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/atoms/Card/Card";
import { Container } from "@/components/atoms/Container/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Production applications across health, streaming, IPTV, and community platforms."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                glow={index === 0}
                className="group h-full overflow-hidden transition-colors hover:border-cyan-500/20"
              >
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                        aria-label={project.linkLabel ?? `View ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  {project.featuredApps && project.featuredApps.length > 0 && (
                    <div className="mt-3 space-y-1 text-sm text-zinc-500">
                      <p>Featured artist apps:</p>
                      <ul className="space-y-1">
                        {project.featuredApps.map((app) => (
                          <li key={app.name}>
                            <a
                              href={app.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                              aria-label={`View ${app.name} on the App Store`}
                            >
                              {app.name}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
