import { useEffect, useState } from "react";
import Logo from "./Logo";
import RegisterLink from "./RegisterLink";

const LINKS = [
  ["Courses", "#courses"],
  ["Python Plan", "#python"],
  ["Maths", "#maths"],
  ["Why Equicate", "#why"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header">
      <div className="container nav">
        <Logo height={30} />

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav id="primary-nav" className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <RegisterLink className="btn btn-primary btn-sm">Register</RegisterLink>
        </nav>
      </div>
    </header>
  );
}