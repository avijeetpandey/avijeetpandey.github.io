import type { PropsWithChildren } from "react";

import { AnimatedBackground } from "@/components/layout/animated-background";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Navigation } from "@/components/layout/navigation";
import { Toaster } from "@/components/ui/sonner";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navigation />
        <main className="pb-16">{children}</main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
