import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
// import backupServerImg from "../../assets/img/server.png";
import checkIcon from "../../assets/icons/check.svg";

import { Formik, Field, Form } from "formik";
import { formPdvSchema } from "../../schemas/formPDV";
import { registerLead } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export interface ILeadPdv {
  name: string;
  email: string;
  whatsapp: string;
  segment: string;
}

export default function FormPDV() {
  const navigator = useNavigate()

  useEffect(() => {
    document.title = "Formulário PDV | Sistemas LA4";
  });

  return (
    <>
      <Navbar />
      <div id="sistema-pdv-form" className="container">
        <div className="form">
          <h1 className="title">Formulário para Contato</h1>
          <p className="paragraph">Precisamos  saber mais  sobre  você.</p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              whatsapp: "",
              segment: "",
            }}
            validationSchema={formPdvSchema}
            onSubmit={async (
              values: ILeadPdv,
            ) => {
              const response = await registerLead(values)
              
              if (response) {
                navigator('/entraremos-em-contato')
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="form-pdv">
                <div className="field-group">
                  <label htmlFor="name">Nome</label>
                  <Field id="name" name="name" placeholder="Digite seu nome aqui" />
                  {touched.name && errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="email">Seu melhor email</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exemplo@mail.com"
                  />
                  {touched.email && errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="whatsapp">Whatsapp</label>
                  <Field
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="99 9999-9999"
                  />
                  {touched.whatsapp && errors.whatsapp && (
                    <div className="error-message">{errors.whatsapp}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor="segment">Segmento</label>
                  <Field
                    id="segment"
                    name="segment"
                    placeholder="Digite seu segmento aqui"
                  />
                  {touched.segment && errors.segment && (
                    <div className="error-message">{errors.segment}</div>
                  )}
                </div>

                <button type="submit" id="cta">
                  <img src={checkIcon} width="30" alt="Confirmar" />
                  Solicitar demonstração</button>
              </Form>
            )}
          </Formik>
        </div>
        {/* <div className="img">
          <img src={backupServerImg} alt="" />
        </div> */}
      </div>
    </>
  );
}
