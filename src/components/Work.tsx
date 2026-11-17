import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";
import { opensource, projects, type RepoStats, type WorkItem } from "@/lib/content";

function compactCount(value: number): string {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
}

function ProjectCard({ item, stats }: { item: WorkItem; stats?: RepoStats }) {
  const body = (
    <>
      <div className="card-top">
        <span className={`tag ${item.tone}`}>
          {item.tag}
        </span>
        <span className="card-arrow" aria-hidden="true">
          {item.internal ? <ArrowRight /> : <ArrowUpRight />}
        </span>
      </div>

      <h3 className="card-name">{item.name}</h3>
      <p className="card-desc">{item.sub}</p>

      {item.meta || stats ? (
        <p className="card-meta">
          {item.meta}
          {item.meta && stats ? " · " : null}
          {stats ? `${compactCount(stats.stars)}★ on GitHub` : null}
        </p>
      ) : null}

      {item.stack ? (
        <ul className="chips card-chips">
          {item.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : null}
    </>
  );

  if (item.internal) {
    return (
      <Link className="project-card" href={item.href}>
        {body}
      </Link>
    );
  }

  return (
    <a className="project-card" href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}

function OssRow({ item, stats }: { item: WorkItem; stats?: RepoStats }) {
  const body = (
    <>
      <span className="oss-main">
        <span className="oss-name">{item.name}</span>
        <span className="oss-desc">{item.sub}</span>
        {stats ? (
          <span className="oss-stats">
            {compactCount(stats.stars)} stars · {compactCount(stats.forks)} forks
          </span>
        ) : null}
      </span>
      <span className="oss-right">
        <span className={`tag ${item.tone}`}>{item.tag}</span>
        <span className="oss-arrow" aria-hidden="true">
          {item.internal ? <ArrowRight /> : <ArrowUpRight />}
        </span>
      </span>
    </>
  );

  if (item.internal) {
    return (
      <Link className="oss-row" href={item.href}>
        {body}
      </Link>
    );
  }

  return (
    <a className="oss-row" href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}

export function Work({ stats }: { stats: Record<string, RepoStats> }) {
  return (
    <section className="sect" id="work">
      <SectionHeader
        index="01"
        eyebrow="selected work"
        title="Things I've"
        accent="shipped."
        aside={
          <Link className="text-link" href="/projects">
            All case studies
            <ArrowRight />
          </Link>
        }
      />

      <div className="project-grid">
        {projects.map((item) => (
          <ProjectCard key={item.name} item={item} stats={item.repo ? stats[item.repo] : undefined} />
        ))}
      </div>

      <div className="oss">
        <div className="oss-head">
          <h3>Open source &amp; contributions</h3>
          <p>Stars and forks are baked in at build time.</p>
        </div>

        <ul className="oss-list">
          {opensource.map((item) => (
            <li key={item.name}>
              <OssRow item={item} stats={item.repo ? stats[item.repo] : undefined} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
