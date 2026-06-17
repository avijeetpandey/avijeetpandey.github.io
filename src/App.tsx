import { Noise } from "@/components/effects/noise";
import { SystemStatus } from "@/components/effects/system-status";
import { AppShell } from "@/components/layout/app-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";

function App() {
  return (
    <>
      <Noise />
      <AppShell>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <SiteFooter />
      </AppShell>
      <SystemStatus />
    </>
  );
}

export default App;
