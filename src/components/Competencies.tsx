/* eslint-disable @next/next/no-img-element -- shields.io SVG badges are pre-rendered images */
import { skills, type Skill } from "@/lib/content";

function badgeSrc(skill: Skill) {
  const label = skill.label.replace(/ /g, "_");
  const logoColor = skill.logoColor ?? "white";
  return `https://img.shields.io/badge/${label}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=${logoColor}`;
}

export function Competencies() {
  return (
    <section className="sect" id="competencies">
      <div className="sect-bar">
        <h2>Competencies</h2>
      </div>

      <div className="badges">
        {skills.map((group) => (
          <div className="badge-row" key={group.label}>
            <span className="lbl">{group.label}</span>
            <span className="set">
              {group.items.map((item) => (
                <img key={item.label} src={badgeSrc(item)} alt={item.label} loading="lazy" />
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
