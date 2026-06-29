import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
};

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#12121a]/80 backdrop-blur-sm",
        glow && "shadow-lg shadow-violet-500/10 ring-1 ring-violet-500/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
