import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DossierPage from "./DossierPage";
import PasswordGate from "./PasswordGate";
import issueHtml from "./dossiers/issue-dossier.html?raw";
import legislationHtml from "./dossiers/legislation-dossier.html?raw";
import profileHtml from "./dossiers/profile-dossier.html?raw";
import "./dashboard.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/issue-dossier"
            element={<DossierPage title="Issue Dossier" html={issueHtml} />}
          />
          <Route
            path="/legislation-dossier"
            element={
              <DossierPage title="Legislation Dossier" html={legislationHtml} />
            }
          />
          <Route
            path="/profile-dossier"
            element={<DossierPage title="Profile Dossier" html={profileHtml} />}
          />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  </React.StrictMode>
);
