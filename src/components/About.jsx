import RegisterLink from "./RegisterLink";
import { PYTHON_START_LABEL } from "../config";

const WHY = [
  {
    n: "01",
    title: "Free first month",
    text: "Experience the quality of our classes before you pay anything.",
  },
  {
    n: "02",
    title: "Money-back guarantee",
    text: "Get well grounded in Python within 3 months, or get your money back.",
  },
  {
    n: "03",
    title: "Career-first approach",
    text: "Portfolio projects, a free career counselling class, and job & interview prep.",
  },
  {
    n: "04",
    title: "School partnerships",
    text: "Principals and school owners: talk to us about bringing Equicate to your students.",
  },
];

export function Mission() {
  return (
    <section className="section section-white" id="mission">
      <div className="container">
        <div className="mission-box">
          <p className="eyebrow">Our mission</p>
          <blockquote>
            “Our mission is to drive nation building by making quality education, essential skills,
            strong values, and meaningful opportunities accessible to all Nigerian youths,
            teenagers and children.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section section-dark" id="why">
      <div className="container">
        <div className="section-head section-head-light">
          <span className="eyebrow eyebrow-light">Why Equicate</span>
          <h2>Built for learners who want results</h2>
        </div>
        <div className="why-grid">
          {WHY.map((w) => (
            <article className="why-card" key={w.n}>
              <span className="why-n">{w.n}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Python classes begin {PYTHON_START_LABEL}.</h2>
          <p>Your first month is free. Secure your spot today.</p>
        </div>
        <RegisterLink className="btn btn-dark btn-lg">Register here</RegisterLink>
      </div>
    </section>
  );
}