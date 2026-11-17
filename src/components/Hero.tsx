import Link from "next/link";
import { ArrowRight, Clock, Download, MapPin } from "@/components/icons";
import { profile, type RepoStats } from "@/lib/content";

function compactCount(value: number): string {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
}

const PROJECT_LINKS = [
  { label: "hijri-api", href: "/projects/hijri-api", internal: true },
  { label: "watcher", href: "/projects/watcher", internal: true },
  { label: "exam-proctor", href: "/projects/exam-proctor", internal: true },
  { label: "reamify", href: "https://github.com/shaheeranser/reamify", internal: false },
] as const;

export function Hero({ stats }: { stats: Record<string, RepoStats> }) {
  const upstreamStars = compactCount(stats.genoffice?.stars ?? 11635);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-rule" aria-hidden="true" />
            full-stack engineer · cloud &amp; devops
          </p>

          <h1 className="hero-title" id="hero-title">
            I build products
            <br />
            <em>end to end.</em>
          </h1>

          <p className="hero-lede">
            From the problem to the deployed service — schema, API, deployment, and the
            infrastructure that keeps them running. I care about the people using them.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" href="#work">
              View selected work
              <ArrowRight />
            </Link>
            <a className="btn" href={profile.resume} download>
              Download résumé
              <Download />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin />
              {profile.location}
            </span>
            <span>
              <Clock />
              {profile.timezone}
            </span>
            <span className="live">
              <span className="status-dot" aria-hidden="true" />
              {profile.availabilityShort} · remote or relocation
            </span>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">~/shaheer — zsh</span>
          </div>
          <div className="window-body">
            <p className="prompt">
              <span aria-hidden="true">$</span> whoami
            </p>
            <p className="whoami">{profile.name}</p>

            <dl className="whoami-rows">
              <div>
                <dt>role</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt>focus</dt>
                <dd>{profile.focus}</dd>
              </div>
              <div>
                <dt>based</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>status</dt>
                <dd className="live">{profile.availabilityShort}</dd>
              </div>
            </dl>

            <p className="prompt">
              <span aria-hidden="true">$</span> ls projects/
            </p>
            <p className="file-list">
              {PROJECT_LINKS.map((project) =>
                project.internal ? (
                  <Link href={project.href} key={project.label}>
                    {project.label}
                  </Link>
                ) : (
                  <a href={project.href} key={project.label} target="_blank" rel="noreferrer">
                    {project.label}
                  </a>
                ),
              )}
            </p>

            <p className="prompt">
              <span aria-hidden="true">$</span> git log -1 --oneline
            </p>
            <p className="last-commit">
              <span aria-hidden="true">●</span> inspirit360 · invoicing platform — deployed
            </p>
          </div>
          <span className="hero-card-glow" aria-hidden="true" />
        </aside>
      </section>

      <section className="proof" aria-label="Highlights">
        <div className="proof-item">
          <p className="proof-value">{upstreamStars}★</p>
          <p className="proof-label">merged into genspark-ai/genoffice</p>
        </div>
        <div className="proof-item">
          <p className="proof-value">03</p>
          <p className="proof-label">systems written up as case studies</p>
        </div>
        <div className="proof-item">
          <p className="proof-value">02</p>
          <p className="proof-label">commercial products delivered</p>
        </div>
        <div className="proof-item">
          <p className="proof-value live">Open</p>
          <p className="proof-label">full-time &amp; contract · remote or relocation</p>
        </div>
      </section>
    </>
  );
}
