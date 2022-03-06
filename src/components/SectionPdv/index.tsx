import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import logInBlueIcon from "../../assets/icons/login.svg";

import "./styles.scss";

type Props = {
  title: string;
  paragraph: string;
  cta?: string;
  image: string;
  isReverse?: boolean;
  customSection?: {
    additionalClassName?: string;
    widthImg?: string;
  };
  children?: ReactNode; 
};

export function SectionPDV({ title, paragraph, cta, image, isReverse, customSection, children }: Props) {
  return (
    <section
      className={`fw container scomponent-pdv-container ${customSection?.additionalClassName} ${
        isReverse && "reverse"
      }`}
    >
      <div className={`img-container ${customSection?.widthImg}`}>
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="paragraph">{children || paragraph}</p>
        <Link to="/formulario-pdv" className="btn-demo">
          <img src={logInBlueIcon} alt="" />
          {cta || "Demonstração gratuita"}
        </Link>
      </div>
    </section>
  );
}
