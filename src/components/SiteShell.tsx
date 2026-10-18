import Link from "next/link";
import { Github, Linkedin } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/content";

const NAV = [
  { href: "/#work", label: "work" },
  { href: "/#experience", label: "experience" },
  { href: "/#competencies", label: "competencies" },
  { href: "/#contact", label: "contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="shell">
        <header className="topbar">
          <Link className="brand" href="/">
            shaheer<span>anser</span>
          </Link>
          <nav aria-label="Sections">
            {NAV.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </header>

        <aside className="rail">
          <Link className="brand" href="/">
            shaheer<span>anser</span>
          </Link>
          <nav aria-label="Sections">
            {NAV.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="now">
            <div>
              <p className="k">status</p>
              <p className="v">
                <span className="dot" />
                open — remote
              </p>
            </div>
            <div>
              <p className="k">focus</p>
              <p className="v">product &amp; infrastructure</p>
            </div>
            <div>
              <p className="k">latest</p>
              <p className="v">watcher · pre-1.0</p>
            </div>
          </div>
          <div className="rail-actions">
            <ThemeToggle />
            <a
              className="icobtn"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              className="icobtn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </aside>

        <main className="page" id="main">
          {children}
          <footer className="foot">
            <p>© {new Date().getFullYear()} Muhammad Shaheer</p>
            <p>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github
              </a>{" "}
              ·{" "}
              <a href={`mailto:${profile.email}`}>email</a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
