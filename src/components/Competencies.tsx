import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/lib/content";

export function Competencies() {
  return (
    <section className="sect" id="stack">
      <SectionHeader
        index="03"
        eyebrow="stack"
        title="The tools I"
        accent="reach for."
        aside={
          <p className="section-note">
            Grouped by where they show up in the work — not by buzzword.
          </p>
        }
      />

      <div className="skill-grid">
        {skills.map((group, index) => (
          <article className="skill-card" key={group.label}>
            <div className="skill-head">
              <span className="skill-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.note}</p>
              </div>
            </div>

            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
