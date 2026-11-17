import { SectionHeader } from "@/components/SectionHeader";
import { certifications, education, roles } from "@/lib/content";

export function Experience() {
  return (
    <section className="sect" id="experience">
      <SectionHeader index="02" eyebrow="experience" title="Where I've" accent="worked." />

      <div className="timeline">
        {roles.map((role) => (
          <article className="timeline-item" key={role.company}>
            <div className="timeline-when">
              <p className="timeline-date">
                {role.level === "active" ? (
                  <span className="status-dot" aria-hidden="true" />
                ) : null}
                {role.date}
              </p>
              <p className="timeline-loc">{role.location}</p>
            </div>

            <div className="timeline-body">
              <h3>{role.title}</h3>
              <p className="timeline-co">{role.company}</p>

              <ul className="timeline-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <ul className="chips">
                {role.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="credentials">
        <div>
          <h3 className="mini-head">education</h3>
          <div className="cred-list">
            {education.map((entry) => (
              <div className="cred" key={entry.degree}>
                <p className="cred-title">{entry.degree}</p>
                <p className="cred-meta">
                  {entry.school} · {entry.date}
                </p>
                <p className="cred-detail">{entry.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mini-head">certifications</h3>
          <div className="cred-list">
            {certifications.map((cert) => (
              <div className="cred" key={cert.name}>
                <p className="cred-title">{cert.name}</p>
                <p className="cred-meta">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
