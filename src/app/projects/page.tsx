import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies by Muhammad Shaheer: exam-proctor, watcher, and hijri-api — browser-based exam proctoring, a self-hosted log-watching daemon, and verifiable Hijri calendar data as static JSON. Projects include Inspirit360 invoicing, Lookvisa, and open-source libraries like reamify.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    type: "website",
    url: "/projects/",
    title: "Projects · Muhammad Shaheer",
    description:
      "Case studies by Muhammad Shaheer: exam-proctor, watcher, and hijri-api — browser-based exam proctoring, a self-hosted log-watching daemon, and verifiable Hijri calendar data as static JSON.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Shaheer — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Muhammad Shaheer",
    description:
      "Case studies by Muhammad Shaheer: exam-proctor, watcher, and hijri-api — browser-based exam proctoring, a self-hosted log-watching daemon, and verifiable Hijri calendar data as static JSON.",
    images: ["/og.png"],
  },
};

export default function ProjectsIndex() {
  return (
    <div className="cs-index">
      <header className="cs-hero cs-hero-index">
        <p className="cs-eyebrow">projects</p>
        <h1 className="cs-title">Selected work</h1>
        <p className="cs-lede">
          Systems I have designed, built and shipped. Each one is written up as a case study:
          the problem, the constraints, what actually runs, and what does not yet.
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
