import { BriefcaseBusiness, FolderGit2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 px-4 pb-10 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-[2rem] px-6 py-5 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Avijeet Pandey. Built for scale.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/avijeet2200"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <BriefcaseBusiness className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/avijeetpandey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <FolderGit2 className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
