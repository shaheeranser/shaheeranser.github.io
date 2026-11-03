import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <p className="mono">full-stack software engineer</p>
      <h1 className="lead">I build products end to end.</h1>
      <p className="pos">
        From the problem to the deployed service — schema, API, deployment, and the infrastructure
        that keeps them running. I care about the people using them.
      </p>
      <div className="idline">
        <span>Muhammad Shaheer</span>
        <span>Lahore · UTC+05:00</span>
        <span className="live">● open — full-time &amp; contract · remote or relocation</span>
      </div>
      <div className="cta">
        <Link className="btn primary" href="#work">
          See selected work
        </Link>
        <Link className="btn" href="#contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
