import { Link } from "react-router-dom";
import "./dashboard.css";

/* ---------- Icons ---------- */

function IssueIcon() {
  return (
    <svg
      className="dash-card-icon"
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* magnifier */}
        <circle cx="38" cy="38" r="15" />
        <path d="M27 49 L14 62" strokeWidth="6" />
        {/* radiating arrows */}
        <path d="M38 18 V6 M33 11 l5 -5 l5 5" />
        <path d="M58 38 H70 M65 33 l5 5 l-5 5" />
        <path d="M38 58 V70 M33 65 l5 5 l5 -5" />
        <path d="M52 24 l9 -9 M55 15 h6 v6" />
        <path d="M52 52 l9 9 M61 55 v6 h-6" />
      </g>
    </svg>
  );
}

function LegislationIcon() {
  return (
    <svg
      className="dash-card-icon"
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* scroll body */}
        <path d="M22 16 h44 v52 a10 10 0 0 0 10 10 H32 a10 10 0 0 1 -10 -10 Z" />
        {/* curled top */}
        <path d="M66 16 a8 8 0 0 1 8 8 v6 h-8" />
        {/* text block */}
        <rect x="30" y="27" width="14" height="12" />
        <path d="M50 29 h10 M50 36 h10" />
        <path d="M30 48 h30 M30 56 h30" />
      </g>
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      className="dash-card-icon"
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* side figures */}
      <circle cx="20" cy="35" r="8" />
      <path d="M6 66 c0 -9 6.5 -15 14 -15 c7.5 0 14 6 14 15 Z" />
      <circle cx="72" cy="35" r="8" />
      <path d="M58 66 c0 -9 6.5 -15 14 -15 c7.5 0 14 6 14 15 Z" />
      {/* inner figures */}
      <circle cx="36" cy="30" r="9" />
      <path d="M20 68 c0 -11 7 -18 16 -18 c9 0 16 7 16 18 Z" />
      <circle cx="56" cy="30" r="9" />
      <path d="M40 68 c0 -11 7 -18 16 -18 c9 0 16 7 16 18 Z" />
      {/* center figure */}
      <circle cx="46" cy="24" r="12" />
      <path d="M25 72 c0 -14 9 -23 21 -23 c12 0 21 9 21 23 Z" />
    </svg>
  );
}

/* ---------- Card ---------- */

type CardProps = {
  to: string;
  title: string;
  caption: string;
  icon: React.ReactNode;
};

function Card({ to, title, caption, icon }: CardProps) {
  return (
    <Link to={to} className="dash-card-wrap">
      <div className="dash-card">
        <div className="dash-card-strip" />
        <div className="dash-card-body">
          <h3 className="dash-card-title">{title}</h3>
          {icon}
        </div>
      </div>
      <span className="dash-card-caption">{caption}</span>
    </Link>
  );
}

/* ---------- Dashboard ---------- */

export default function Dashboard() {
  return (
    <div className="dash-shell">
      <section className="dash-section">
        <h2 className="dash-section-title">Dossiers</h2>
        <div className="dash-grid">
          <Card
            to="/issue-dossier"
            title="Issue Dossier"
            caption="Issue Dossier"
            icon={<IssueIcon />}
          />
          <Card
            to="/legislation-dossier"
            title="Legislation Dossier"
            caption="Legislation Dossier"
            icon={<LegislationIcon />}
          />
          <Card
            to="/profile-dossier"
            title="Profile Dossier"
            caption="Profile Dossier"
            icon={<ProfileIcon />}
          />
        </div>
      </section>
    </div>
  );
}
