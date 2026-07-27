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
  // Material "groups" icon — a clean three-person cluster that reads well at any size.
  return (
    <svg
      className="dash-card-icon"
      width="88"
      height="88"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
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
