import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/CaseStudyBody";
import { ArrowLeft, ArrowUpRight, Github } from "@/components/icons";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return {
    title: `${project.name} · Muhammad Shaheer`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <article className="cs">
      <Link className="cs-back" href="/projects">
        <ArrowLeft />
        All projects
      </Link>

      <header className="cs-hero">
        {project.logo ? (
          <Image
            className="cs-logo"
            src={project.logo}
            alt={`${project.name} logo`}
            width={432}
            height={272}
          />
        ) : null}
        <h1 className="cs-title">{project.name}</h1>
        <p className="cs-tagline">{project.tagline}</p>
        <p className="cs-lede">{project.summary}</p>

        <div className="cs-meta">
          <span className="tag">{project.status}</span>
          <ul className="cs-chips">
            {project.stack.map((tech) => (
              <li className="cs-chip" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="cs-actions">
          {project.links.map((link) => (
            <a
              className={`btn ${link.kind === "live" ? "accent" : ""}`}
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.kind === "repo" ? <Github /> : <ArrowUpRight />}
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <CaseStudyBody sections={project.body} />
    </article>
  );
}
