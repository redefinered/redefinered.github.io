import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow/Eyebrow";
import { GradientOrb } from "@/components/atoms/GradientOrb/GradientOrb";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { HERO } from "@/lib/constants";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <GradientOrb className="-left-32 top-0" color="cyan" size="lg" />
      <GradientOrb className="-right-32 top-20" color="violet" size="md" />

      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow className="mb-6">{HERO.eyebrow}</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
              {HERO.headline}
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-cyan-300/90 sm:text-xl">
            {HERO.subhead.split(".")[0]}.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {HERO.subhead.split(".").slice(1).join(".").trim()}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={HERO.primaryCta.href} variant="primary" size="lg">
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary" size="lg">
              {HERO.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
