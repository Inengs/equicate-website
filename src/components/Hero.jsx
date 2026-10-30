import RegisterLink from "./RegisterLink";
import { MONTHLY_FEE, PYTHON_START, PYTHON_START_LABEL, formatNaira } from "../config";
import { useDaysUntil } from "../hooks/useDaysUntil";

const PERKS = [
  ["Month 1 is free", "Try the class with zero risk"],
  ["Money-back guarantee", "Well grounded in Python in 3 months, or a refund"],
  ["Real portfolio projects", "Build work you can show employers"],
  ["Free career counselling", "Plus job & interview preparation"],
];

export default function Hero() {
  const days = useDaysUntil(PYTHON_START);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-badge">
              <span aria-hidden="true">●</span> Python Core · Starts {PYTHON_START_LABEL}
            </span>
            <h1>Finally! Get well grounded in Python in 3 months.</h1>
            <p className="hero-lead">
              Kickstart your career journey in tech. Learn Python fundamentals, data structures,
              algorithms and OOP, or get your money back.
            </p>
            <div className="hero-actions">
              <RegisterLink className="btn btn-primary btn-lg">Register here</RegisterLink>
              <a href="#python" className="btn btn-ghost btn-lg">
                See what you'll learn
              </a>
            </div>
            <p className="hero-fine">
              First month free, then {formatNaira(MONTHLY_FEE)} per month.
            </p>
          </div>

          <aside className="hero-card" aria-label="Python class start countdown">
            <p className="hero-card-label">Next cohort</p>
            <h3>Python Core · 3-Month Program</h3>

            <div className="countdown">
              {days > 0 ? (
                <>
                  <strong>{days}</strong>
                  <span>{days === 1 ? "day" : "days"} to go</span>
                </>
              ) : (
                <span>Classes have begun</span>
              )}
            </div>
            <p className="hero-card-date">{PYTHON_START_LABEL}</p>

            <div className="hero-stats">
              <div>
                <h4>{formatNaira(0)}</h4>
                <p>Month 1</p>
              </div>
              <div>
                <h4>{formatNaira(MONTHLY_FEE)}</h4>
                <p>Per month after</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="perks" aria-label="Highlights">
        <div className="container perks-grid">
          {PERKS.map(([title, text]) => (
            <div className="perk" key={title}>
              <span className="perk-icon" aria-hidden="true">✓</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}