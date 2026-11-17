import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin } from "@/components/icons";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Muhammad Shaheer — home">
            <span className="brand-mark" aria-hidden="true">
              ~/
            </span>
            shaheer<span className="brand-accent">anser</span>
          </Link>

          <NavLinks />

          <div className="header-actions">
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span className="status-text">open to work</span>
            </span>
            <ThemeToggle />
            <a className="btn btn-sm header-resume" href={profile.resume} download>
              <Download />
              <span>Résumé</span>
            </a>
          </div>
        </div>
      </header>

      <main className="site-main" id="main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <Link className="footer-brand" href="/">
              shaheer<span>anser</span>
            </Link>
            <p>
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav className="footer-links" aria-label="Elsewhere">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github />
              GitHub
              <ArrowUpRight />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
              LinkedIn
              <ArrowUpRight />
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </nav>

          <p className="footer-meta">
            © {year} Muhammad Shaheer · static export on GitHub Pages · refreshed daily
          </p>
        </div>
      </footer>
    </>
  );
}
