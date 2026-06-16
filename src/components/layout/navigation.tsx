import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { useMobile } from "@/hooks/use-mobile";
import { springTransition } from "@/lib/animations";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);

  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHash(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-28% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl justify-center">
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
                className="ml-auto rounded-full border-white/8 bg-black/72 backdrop-blur-2xl"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="inset-3 w-auto rounded-[2rem] bg-black/92">
              <SheetHeader>
                <SheetTitle>Avijeet Pandey</SheetTitle>
                <SheetDescription>
                  Systems, projects, and ways to get in touch.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-base text-foreground transition-colors hover:bg-white/[0.07]"
                    onClick={() => {
                      scrollToHash(item.href);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <a
                href="#contact"
                className={buttonVariants({ variant: "default", size: "lg" })}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash("#contact");
                  setOpen(false);
                }}
              >
                Let&apos;s Talk Scale
                <MoveUpRight />
              </a>
            </SheetContent>
          </Sheet>
        ) : (
          <motion.div
            className={cn(
              "flex items-center gap-2 rounded-full border px-2 py-2 backdrop-blur-2xl transition-all duration-300",
              scrolled
                ? "border-white/10 bg-black/78 shadow-[0_18px_80px_rgba(0,0,0,0.48)]"
                : "border-white/8 bg-black/60",
            )}
            animate={{ scale: scrolled ? 0.97 : 1, y: scrolled ? 2 : 0 }}
            transition={springTransition}
          >
            <button
              type="button"
              className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.05] px-3 text-sm font-semibold text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              AKP
            </button>
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    activeHash === item.href ? "text-white" : "text-slate-400 hover:text-white",
                  )}
                  onClick={() => scrollToHash(item.href)}
                >
                  <AnimatePresence>
                    {activeHash === item.href ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full border border-white/8 bg-white/[0.06]"
                        transition={springTransition}
                      />
                    ) : null}
                  </AnimatePresence>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>
            <button
              type="button"
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "rounded-full px-5",
              })}
              onClick={() => scrollToHash("#contact")}
            >
              Let&apos;s Talk Scale
              <MoveUpRight />
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
