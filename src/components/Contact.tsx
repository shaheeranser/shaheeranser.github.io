import { ArrowUpRight, Download, MapPin } from "@/components/icons";
import { CopyEmail } from "@/components/CopyEmail";
import { SectionHeader } from "@/components/SectionHeader";
import { contactLinks, profile } from "@/lib/content";

export function Contact() {
  return (
    <section className="sect" id="contact">
      <SectionHeader index="04" eyebrow="contact" title="Let's build" accent="something." />

      <div className="contact-grid">
        <div className="contact-primary">
          <p className="contact-kicker">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <p className="contact-note">
            Email reaches me directly. Tell me what you are building, what is stuck, or what
            role you have in mind.
          </p>

          <div className="contact-actions">
            <CopyEmail className="btn primary" compact />
            <a className="btn" href={profile.resume} download>
              Download résumé
              <Download />
            </a>
          </div>

          <p className="contact-location">
            <MapPin />
            {profile.location} · {profile.timezone}
          </p>
        </div>

        <ul className="connect-list">
          {contactLinks
            .filter((link) => link.label !== "Email")
            .map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  <span className="connect-k">{link.label}</span>
                  <span className="connect-v">{link.value}</span>
                  <ArrowUpRight />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
