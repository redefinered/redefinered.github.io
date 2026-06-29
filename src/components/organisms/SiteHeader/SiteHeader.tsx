import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container/Container";
import { Logo } from "@/components/molecules/Logo/Logo";
import { MobileMenu } from "@/components/molecules/MobileMenu/MobileMenu";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <Button href="#contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white md:hidden",
          )}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </header>
  );
}
