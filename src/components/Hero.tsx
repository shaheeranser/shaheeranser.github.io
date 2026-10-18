import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <p className="mono">full-stack software engineer</p>
      <h1 className="lead">I build production systems end to end.</h1>
      <p className="pos">
        Schema, API, deployment and the infrastructure that keeps them running — from an empty
        repository to a live service. I care about the parts nobody sees until they break.
      </p>
      <div className="idline">
        <span>Muhammad Shaheer</span>
        <span>Lahore · UTC+05:00</span>
        <span className="live">● open — full-time &amp; contract, remote</span>
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
