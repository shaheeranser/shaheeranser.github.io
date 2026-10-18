import type { ProjectSection } from "@/lib/caseStudies";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function headingId(section: ProjectSection): string | undefined {
  if (section.id) return section.id;
  if ("heading" in section && section.heading) return slugify(section.heading);
  return undefined;
}

function SectionHeading({ section }: { section: ProjectSection }) {
  const id = headingId(section);
  if (!("heading" in section) || !section.heading) return null;
  return (
    <h2 className="cs-heading" id={id}>
      {section.heading}
    </h2>
  );
}

export function CaseStudyBody({ sections }: { sections: ProjectSection[] }) {
  return (
    <div className="cs-body">
      {sections.map((section, i) => {
        const key = `${section.kind}-${headingId(section) ?? i}`;

        switch (section.kind) {
          case "prose":
            return (
              <section className="cs-section" key={key}>
                <SectionHeading section={section} />
                {section.paragraphs.map((p) => (
                  <p className="cs-prose" key={p}>
                    {p}
                  </p>
                ))}
              </section>
            );

          case "code":
            return (
              <section className="cs-section" key={key}>
                <SectionHeading section={section} />
                <figure className="cs-code">
                  {section.label ? (
                    <figcaption className="cs-code-label">{section.label}</figcaption>
                  ) : null}
                  <pre>
                    <code>{section.lines.join("\n")}</code>
                  </pre>
                </figure>
              </section>
            );

          case "steps":
            return (
              <section className="cs-section" key={key}>
                <SectionHeading section={section} />
                {section.intro ? <p className="cs-intro">{section.intro}</p> : null}
                <ol className="cs-steps">
                  {section.items.map((item, index) => (
                    <li className="cs-step" key={item.title}>
                      <span className="cs-step-num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="cs-step-title">{item.title}</h3>
                        <p className="cs-step-text">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );

          case "list":
            return (
              <section className="cs-section" key={key}>
                <SectionHeading section={section} />
                {section.intro ? <p className="cs-intro">{section.intro}</p> : null}
                <ul className={`cs-list ${section.tone ?? ""}`}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            );

          case "callout":
            return (
              <section className="cs-section" key={key}>
                <article className="cs-callout">
                  {section.badge ? (
                    <p className="cs-callout-badge">
                      <span className="cs-dot" aria-hidden="true" />
                      {section.badge}
                    </p>
                  ) : null}
                  <h3 className="cs-callout-title">{section.title}</h3>
                  <dl className="cs-callout-rows">
                    {section.rows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {section.meta ? (
                    <p className="cs-callout-meta">
                      {section.meta.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </p>
                  ) : null}
                  {section.foot ? <p className="cs-callout-foot">{section.foot}</p> : null}
                </article>
              </section>
            );

          case "links":
            return (
              <section className="cs-section" key={key}>
                <SectionHeading section={section} />
                {section.intro ? <p className="cs-intro">{section.intro}</p> : null}
                <ul className="cs-links">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.note ? <span className="cs-link-note">{item.note}</span> : null}
                        <span className="cs-link-label">{item.label}</span>
                        {item.tag ? <span className="cs-link-tag">{item.tag}</span> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
