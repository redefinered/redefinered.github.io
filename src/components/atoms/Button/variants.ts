import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export function buttonVariants({
  variant = "primary",
  size = "md",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] disabled:pointer-events-none disabled:opacity-50",
    {
      primary:
        "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110",
      secondary:
        "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
      ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
      outline:
        "border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/60",
    }[variant],
    {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    }[size],
  );
}
