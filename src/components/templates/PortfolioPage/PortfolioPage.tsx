import { AboutSection } from "@/components/organisms/AboutSection/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection/ContactSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection/ExperienceSection";
import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection/ProjectsSection";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader/SiteHeader";
import { SkillsSection } from "@/components/organisms/SkillsSection/SkillsSection";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
