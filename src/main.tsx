import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DossierPage from "./DossierPage";
import "./dashboard.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/issue-dossier"
          element={
            <DossierPage
              title="Issue Dossier"
              src="/dossiers/issue-dossier.html"
            />
          }
        />
        <Route
          path="/legislation-dossier"
          element={
            <DossierPage
              title="Legislation Dossier"
              src="/dossiers/legislation-dossier.html"
            />
          }
        />
        <Route
          path="/profile-dossier"
          element={
            <DossierPage
              title="Profile Dossier"
              src="/dossiers/profile-dossier.html"
            />
          }
        />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
