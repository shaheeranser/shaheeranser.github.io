import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies by Muhammad Shaheer: watcher, a self-hosted log-watching daemon, and hijri-api, verifiable Hijri calendar data as static JSON.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsIndex() {
  return (
    <div className="cs-index">
      <header className="cs-hero cs-hero-index">
        <p className="cs-eyebrow">projects</p>
        <h1 className="cs-title">Selected work</h1>
        <p className="cs-lede">
          Systems I have designed, built and shipped. Each one is written up as a case study:
          the problem, the approach and what actually runs.
        </p>
      </header>

      <ul className="cs-cards">
        {caseStudies.map((project) => (
          <li key={project.slug}>
            <Link className="cs-card" href={`/projects/${project.slug}`}>
              <span className="cs-card-top">
                <h2 className="cs-card-name">{project.name}</h2>
                <span className="cs-card-status">{project.status}</span>
              </span>
              <span className="cs-card-summary">{project.summary}</span>
              <span className="cs-card-stack">{project.stack.join(" · ")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
