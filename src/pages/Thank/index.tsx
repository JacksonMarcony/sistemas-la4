import React from "react";

import thanksImg from "../../assets/img/thanks.webp";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

import "./styles.scss";

export default function Thank() {
  return (
    <main id="thank-page">
      <div className="img-container">
        <img src={thanksImg} alt="Entraremos em contato" />
      </div>
      <div className="text-container">
        <h5 className="title">
          <span>Tudo certo!</span> Entraremos em contato
        </h5>
        <p className="paragraph">
          Caso já queira chamar a gente para podermos te atender mais rápido, clique no botão abaixo.
        </p>
        <a
          className="btn-demo"
          href="https://api.whatsapp.com/send/?phone=556592586757&text=Ol%C3%A1,%20pode%20me%20falar%20mais%20sobre%20o%20sistema%20PDV?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </div>
    </main>
  );
}
