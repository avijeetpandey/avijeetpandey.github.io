import { BriefcaseBusiness, FolderGit2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-[1.75rem] px-6 py-5 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Avijeet Pandey. Built for scale.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/avijeet2200"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
          >
            <BriefcaseBusiness className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/avijeetpandey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
          >
            <FolderGit2 className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
