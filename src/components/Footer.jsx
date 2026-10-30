import Logo from "./Logo";
import RegisterLink from "./RegisterLink";
import { CONTACT } from "../config";

const LEADERSHIP = [
  "Awe Theophilus (Co-Founder)",
  "Inengiye Emmanuel (Co-Founder)",
  "Chuka Nzeih (Digital Delivery Lead)",
  "Zebulun Ojo & Madumere Onyekachi (Tutors)",
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <Logo height={30} />
          <p className="footer-about">
            Driving nation building by making quality education, essential skills, and strong values
            accessible to all Nigerian youths.
          </p>
          <RegisterLink className="btn btn-primary btn-sm">Register for Python</RegisterLink>
        </div>

        <div>
          <h4>Leadership</h4>
          <ul>
            {LEADERSHIP.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            {CONTACT.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`}>{p.display}</a>
              </li>
            ))}
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                Instagram: {CONTACT.instagramHandle}
              </a>
            </li>
            <li>
              {CONTACT.linkedin ? (
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn: {CONTACT.linkedinLabel}
                </a>
              ) : (
                <>LinkedIn: {CONTACT.linkedinLabel}</>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} Equicate Academy. All rights reserved.
      </div>
    </footer>
  );
}