import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import logInBlueIcon from "../../assets/icons/login.svg";

import "./styles.scss";

type Props = {
  title: string;
  paragraph: ReactNode;
  cta?: string;
  image: string;
  isReverse?: boolean;
};

export function SectionPDV({ title, paragraph, cta, image, isReverse }: Props) {
  return (
    <section
      className={`fw container scomponent-pdv-container ${
        isReverse && "reverse"
      }`}
    >
      <div className="img-container">
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="paragraph">{paragraph}</p>
        <Link to="/formulario-pdv" className="btn-demo">
          <img src={logInBlueIcon} alt="" />
          {cta || "Demonstração gratuita"}
        </Link>
      </div>
    </section>
  );
}
