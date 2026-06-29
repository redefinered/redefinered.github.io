import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium text-zinc-400 transition-colors hover:text-white",
        className,
      )}
    >
      {children}
    </a>
  );
}
