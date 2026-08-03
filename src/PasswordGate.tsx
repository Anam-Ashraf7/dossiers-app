import { useState, type FormEvent, type ReactNode } from "react";
import "./gate.css";

const PASSWORD = "Dossier2026";
const STORAGE_KEY = "dossier_gate_ok";

/**
 * Simple client-side password gate. NOTE: this is a static site with no backend,
 * so the check runs in the browser — it blocks casual access, but is not strong
 * security (a determined user can read the bundle). For hard protection, put
 * HTTP auth in front of the site at the host level.
 */
export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "1"
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  if (authed) return <>{children}</>;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="gate">
      <form className="gate-card" onSubmit={submit}>
        <div className="gate-lock" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect
              x="4.5"
              y="10.5"
              width="15"
              height="10"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 10.5V8a4 4 0 0 1 8 0v2.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <h1 className="gate-title">Xavier AI — Dossiers</h1>
        <p className="gate-sub">Enter the password to continue</p>

        <input
          className={"gate-input" + (error ? " gate-input-error" : "")}
          type="password"
          value={value}
          autoFocus
          placeholder="Password"
          aria-label="Password"
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(false);
          }}
        />
        <div className="gate-error" role="alert">
          {error ? "Incorrect password. Please try again." : ""}
        </div>

        <button className="gate-btn" type="submit">
          Unlock
        </button>
      </form>
    </div>
  );
}
