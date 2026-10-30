import RegisterLink from "./RegisterLink";
import { CONTACT, PYTHON_START_LABEL } from "../config";

const PYTHON_TOPICS = [
  "Python Fundamentals & Syntax",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
];

const CAREER_BOOST = [
  "Real-world portfolio projects",
  "Free career counselling class",
  "Job & interview preparation",
];

// Draft month-by-month plan built from the three Python Core pillars. Edit freely.
const PLAN = [
  {
    month: "Month 1",
    tag: "Free",
    title: "Python Fundamentals & Syntax",
    text: "Variables, data types, control flow, functions and writing clean, readable Python.",
  },
  {
    month: "Month 2",
    tag: "Paid",
    title: "Data Structures & Algorithms",
    text: "Lists, dictionaries, sets, stacks and queues, searching and sorting, and thinking about efficiency.",
  },
  {
    month: "Month 3",
    tag: "Paid",
    title: "OOP & Portfolio Project",
    text: "Classes, inheritance and modules, then ship a real-world project for your portfolio.",
  },
];

export function Courses() {
  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Courses</span>
          <h2>Find the right course for you</h2>
          <p>Structured, mentor-led learning built around real outcomes.</p>
        </div>

        <div className="course-grid">
          <article className="course-card">
            <span className="badge badge-live">Enrolling now</span>
            <h3>Python Core</h3>
            <p className="course-meta">3-month program · Starts {PYTHON_START_LABEL}</p>
            <ul className="check-list">
              {PYTHON_TOPICS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="course-price">Month 1 free, then ₦5,000/month</p>
            <RegisterLink className="btn btn-primary btn-block">Register here</RegisterLink>
          </article>

          <article className="course-card course-card-soon">
            <span className="badge badge-soon">Coming soon</span>
            <h3>Mathematics</h3>
            <p className="course-meta">WAEC & JAMB preparation</p>
            <p>
              Our maths tutorship program is on its way. Follow us to hear first when registration
              opens.
            </p>
            <a
              className="btn btn-dark btn-block"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow {CONTACT.instagramHandle} for updates
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function PythonPlan() {
  return (
    <section className="section section-white" id="python">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Python Core</span>
          <h2>Your 3-month roadmap</h2>
          <p>From first line of code to a portfolio project, with career support built in.</p>
        </div>

        <div className="plan-grid">
          {PLAN.map((p) => (
            <article className="plan-card" key={p.month}>
              <span className={`week-badge ${p.tag === "Free" ? "free" : ""}`}>
                {p.month} · {p.tag}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <div className="boost">
          <div>
            <span className="eyebrow eyebrow-light">Career Boost</span>
            <h3>More than a course. A launchpad.</h3>
          </div>
          <ul className="check-list check-list-light">
            {CAREER_BOOST.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <RegisterLink className="btn btn-primary">Register here</RegisterLink>
        </div>
      </div>
    </section>
  );
}

export function MathsSoon() {
  return (
    <section className="section" id="maths">
      <div className="container">
        <div className="soon-panel">
          <span className="badge badge-soon">Coming soon</span>
          <h2>Mathematics for WAEC & JAMB</h2>
          <p>
            Syllabus-aligned maths tutorship for SS3 students is coming soon, with free study
            guides. Details and dates will be announced on our channels.
          </p>
          <a
            className="btn btn-dark"
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get updates on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}