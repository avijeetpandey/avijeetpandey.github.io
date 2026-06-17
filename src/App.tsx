import { useEffect, useState } from "react";

import { Noise } from "@/components/effects/noise";
import { SystemStatus } from "@/components/effects/system-status";
import { AppShell } from "@/components/layout/app-shell";
import { PageLoader } from "@/components/layout/page-loader";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader active={loading} />
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
