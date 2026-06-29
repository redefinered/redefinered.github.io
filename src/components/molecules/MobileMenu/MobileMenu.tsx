import { X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
};

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <button
        type="button"
        aria-label="Close menu overlay"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col border-l border-white/10 bg-[#0a0a0f] p-6">
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className={cn("mt-8")}>
          <Button href="#contact" variant="primary" size="md" onClick={onClose}>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
