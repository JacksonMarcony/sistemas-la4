import React from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

const SistemaPDV =  React.lazy(() => import("../pages/SistemaPDVBeta"));
const FormPDV =  React.lazy(() => import("../pages/FormPDV"));
const Thank =  React.lazy(() => import("../pages/Thank"));

export function Router() {
  return (
    <HashRouter>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<SistemaPDV />} />
          <Route path="/formulario-pdv" element={<FormPDV />} />
          <Route path="/entraremos-em-contato" element={<Thank />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}
