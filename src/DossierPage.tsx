import { Link } from "react-router-dom";
import "./dashboard.css";

type Props = {
  title: string;
  src: string;
};

/**
 * Hosts an original dossier (raw Webflow HTML + its own global CSS and vanilla JS)
 * inside an iframe. The iframe is deliberate: these dossiers ship global `*` / `body`
 * selectors and their own scripts, so isolating them keeps them working exactly as
 * they do today without leaking styles into the dashboard.
 */
export default function DossierPage({ title, src }: Props) {
  return (
    <div className="dossier-page">
      <header className="dossier-bar">
        <Link to="/" className="dossier-back">
          &larr; Dashboard
        </Link>
        <span className="dossier-title">{title}</span>
      </header>
      <iframe className="dossier-frame" src={src} title={title} />
    </div>
  );
}
