import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";

import "./styles.scss";

export default function SistemaPDV() {
  useEffect(() => {
     document.title = 'Sistema PDV | Sistemas LA4'
  })

  return (
    <div id="sistema-pdv-page">
    <Navbar />
      <h1>Sistema PDV</h1>
    </div>
  );
}
