import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/img/marca/logo.jpg";
import verifiedIcon from "../../assets/icons/verified.svg";

import "./styles.scss";

export function Navbar() {
  return (
    <header id="header-component">
      <div className="logo-container">
        <img src={logoImg} alt="Logo Sistemas LA4" />
        <div className="logo-text">
          <h1>Sistemas LA4</h1>
          <p>Sistemas que até seu filho consegue usar</p>
        </div>
      </div>

      <div className="content-container">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/"}>
            <li>Contato</li>
          </Link>

          <Link to={"/"}>
            <li>Soluções</li>
          </Link>

          <Link to={"/"}>
            <li>Sobre nós</li>
          </Link>

          <Link to={"/"}>
            <li>Suporte</li>
          </Link>
        </ul>

      </div>
        <a className="btn-cta" href="#3" target="_blank" rel="noopener noreferrer">
          <img src={verifiedIcon} alt="Ícone verificado" />
          Experimente Grátis
        </a>
    </header>
  );
}
