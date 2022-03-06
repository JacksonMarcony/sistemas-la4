import React from "react";

import { Routes, Route, HashRouter } from "react-router-dom";
import { Loading } from "../components/Loading";

const SistemaPDVBeta =  React.lazy(() => import("../pages/SistemaPDVBeta"));
const SistemaPDV =  React.lazy(() => import("../pages/SistemaPDV"));
const FormPDV =  React.lazy(() => import("../pages/FormPDV"));
const Thank =  React.lazy(() => import("../pages/Thank"));

export function Router() {
  return (
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SistemaPDV />} />
          <Route path="/pdv" element={<SistemaPDVBeta />} />
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
