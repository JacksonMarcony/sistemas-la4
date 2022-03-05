import React from "react";

import thanksImg from "../../assets/img/thanks.webp";

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
          Seus dados foram salvos com sucesso, entraremos em contato em breve,
          obrigado.
        </p>
      </div>
    </main>
  );
}
