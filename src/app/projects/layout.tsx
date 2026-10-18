import Link from "next/link";
import { Github } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/content";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="doc-shell">
      <header className="doc-head">
        <div className="doc-head-inner">
          <Link className="doc-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              {"</>"}
            </span>
            <span>Muhammad Shaheer</span>
          </Link>
          <div className="doc-head-side">
            <Link className="doc-head-link" href="/projects">
              Projects
            </Link>
            <a
              className="tray-btn square"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="doc-main">{children}</main>

      <footer className="doc-foot">
        <div className="doc-foot-inner">
          <p>{profile.name} — full-stack engineer, Lahore.</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </footer>
    </div>
  );
}
