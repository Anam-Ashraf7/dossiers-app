import { Link } from "react-router-dom";
import "./dashboard.css";

type Props = {
  title: string;
  html: string;
};

/**
 * Hosts an original dossier (raw Webflow HTML + its own global CSS and vanilla JS)
 * inside an iframe via `srcDoc`. The HTML is bundled into the app (imported with
 * `?raw`) rather than served as a standalone file, so it is only rendered after the
 * password gate — there is no public `/dossiers/*.html` URL to bypass it. The iframe
 * also isolates the dossier's global styles/scripts from the dashboard.
 */
export default function DossierPage({ title, html }: Props) {
  return (
    <div className="dossier-page">
      <header className="dossier-bar">
        <Link to="/" className="dossier-back">
          &larr; Dashboard
        </Link>
        <span className="dossier-title">{title}</span>
      </header>
      <iframe className="dossier-frame" srcDoc={html} title={title} />
    </div>
  );
}
