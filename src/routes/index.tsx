import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SistemaPDV from "../pages/SistemaPDV";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema-pdv" element={<SistemaPDV />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
