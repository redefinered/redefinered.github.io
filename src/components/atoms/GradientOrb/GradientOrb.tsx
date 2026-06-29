import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type GradientOrbProps = {
  className?: string;
  color?: "cyan" | "violet" | "mixed";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

const colorMap = {
  cyan: "bg-cyan-500/30",
  violet: "bg-violet-500/30",
  mixed: "bg-gradient-to-br from-cyan-500/30 to-violet-500/30",
};

export function GradientOrb({
  className,
  color = "mixed",
  size = "md",
}: GradientOrbProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizeMap[size],
        colorMap[color],
        className,
      )}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}
