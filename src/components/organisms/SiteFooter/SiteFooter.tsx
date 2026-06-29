import { Container } from "@/components/atoms/Container/Container";
import { Logo } from "@/components/molecules/Logo/Logo";
import { NavLink } from "@/components/molecules/NavLink/NavLink";
import { SocialLink } from "@/components/molecules/SocialLink/SocialLink";
import { FOOTER, NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm leading-relaxed text-zinc-500">{FOOTER.tagline}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block text-sm text-cyan-400 hover:text-cyan-300"
            >
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Connect</p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          {FOOTER.copyright}
        </div>
      </Container>
    </footer>
  );
}
