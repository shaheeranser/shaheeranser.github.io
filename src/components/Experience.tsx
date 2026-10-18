import { certifications, education, roles } from "@/lib/content";

export function Experience() {
  return (
    <section className="sect" id="experience">
      <div className="sect-bar">
        <h2>Experience</h2>
      </div>

      <div className="jobs">
        {roles.map((role) => (
          <article className="job" key={role.company}>
            <p className="when">{role.date}</p>
            <div>
              <h3>{role.title}</h3>
              <p className="co">
                {role.company} · {role.location}
              </p>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="subhead">education</p>
      <div className="credentials">
        {education.map((entry) => (
          <div className="cred" key={entry.degree}>
            <p className="t">{entry.degree}</p>
            <p className="s">
              {entry.school} · {entry.date}
            </p>
          </div>
        ))}
      </div>

      <p className="subhead">certifications</p>
      <div className="credentials">
        {certifications.map((cert) => (
          <div className="cred" key={cert.name}>
            <p className="t">{cert.name}</p>
            <p className="s">
              {cert.issuer} · {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
