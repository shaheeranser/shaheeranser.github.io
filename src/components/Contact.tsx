import { contactLinks, profile } from "@/lib/content";

export function Contact() {
  return (
    <section className="sect" id="contact">
      <div className="sect-bar">
        <h2>Contact</h2>
      </div>

      <div className="connect-grid">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            <span className="k">{link.label}</span>
            <span className="v">{link.value}</span>
          </a>
        ))}
        <a href={profile.resume} download>
          <span className="k">Résumé</span>
          <span className="v">Download PDF</span>
        </a>
      </div>
    </section>
  );
}
