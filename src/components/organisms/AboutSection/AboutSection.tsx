import { motion } from "framer-motion";
import { Card } from "@/components/atoms/Card/Card";
import { Container } from "@/components/atoms/Container/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading/SectionHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ABOUT } from "@/lib/constants";

export function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mx-auto max-w-3xl p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-zinc-400">{ABOUT.body}</p>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
