import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container/Container";
import { GradientOrb } from "@/components/atoms/GradientOrb/GradientOrb";
import { SocialLink } from "@/components/molecules/SocialLink/SocialLink";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <GradientOrb className="left-1/4 top-0" color="cyan" size="md" />
      <GradientOrb className="right-1/4 bottom-0" color="violet" size="sm" />
      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#12121a]/80 p-8 text-center backdrop-blur-sm sm:p-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Open to senior full-stack roles and consulting. Reach out via email or
            connect on LinkedIn.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-zinc-400">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 hover:text-cyan-300"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-cyan-300"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                label={link.label}
                icon={link.icon}
              />
            ))}
          </div>
          <div className="mt-8">
            <Button href={`mailto:${SITE.email}`} variant="primary" size="lg">
              Send an Email
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
