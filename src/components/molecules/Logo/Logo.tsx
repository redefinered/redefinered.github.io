import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a href="#" className={cn("flex items-center gap-3", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
        ED
      </span>
      <span className="text-lg font-bold text-white">{SITE.name}</span>
    </a>
  );
}
