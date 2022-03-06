import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import bannerSistemaPDV from "../../assets/img/banner-intro.webp";
import logInIcon from "../../assets/icons/login.svg";
import dotsElementImg from "../../assets/img/elements/dots.svg";
import paymentMachineImg from "../../assets/img/payment-methods.webp";
import connectionImg from "../../assets/img/server.webp";
import mobileControlImg from "../../assets/img/mobile-app.webp";
import stockIcon from "../../assets/icons/stock.svg";
import faqIcon from "../../assets/icons/icon-faq.png";
import backupServerImg from "../../assets/img/backup-image.webp";
import xmlImg from "../../assets/img/xml.webp";
import paymentModesImg from "../../assets/img/payment-modes-example.webp";
import balanceImg from "../../assets/img/balance-example.webp";

import someQuestions from "../../assets/img/some-questions.webp";
// import client1Img from "../../assets/img/clients/client1.png";
// import financeIcon from "../../assets/icons/controle-financeiro.svg";
import supportIcon from "../../assets/icons/support.svg";
import creditCardEl from "../../assets/img/elements/element-banner-credit-card.svg";
import wifiEl from "../../assets/img/elements/element-banner-wifi.svg";
import securityEl from "../../assets/img/elements/element-banner-security.svg";
import logoImg from "../../assets/img/marca/logo.webp";

import helpManagerIcon from "../../assets/icons/help.svg";
import pdvManagerIcon from "../../assets/icons/pdv.svg";
import nfceManagerIcon from "../../assets/icons/nfce.svg";

import instagramIcon from "../../assets/icons/social/instagram.svg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import youtubeIcon from "../../assets/icons/social/youtube.svg";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  carouselSettings,
  carouselSingleItemSettings,
} from "../../config/carousel";
import { ManagementCard } from "../../components/ManagementCard";
import { SectionPDV } from "../../components/SectionPdv";

import "./styles.scss";

// const mainFeatures = [
//   {
//     label: "Uso do App para verificar vendas;",
//     image: xmlImg,
//   },
//   {
//     label: "Integração com Leitor de Código de Barras...",
//     image: paymentMachineImg,
//   },
//   {
//     label: "Facilidade ao Usar [Vídeo de Venda Sendo...",
//     image: stockIcon,
//   },

//   {
//     label: "Alteração de Produtos em Lote.",
//     image: dotsElementImg,
//   },
// ];

export default function SistemaPDV() {
  // const [showFeatureImg, setShowFeatureImg] = useState<number>(0);

  useEffect(() => {
    document.title = "Sistema PDV | Sistemas LA4";
  });

  // function handleToChangeFeatureImage(index: number) {
  //   setShowFeatureImg(index);
  // }

  return (
    <div id="sistema-pdv-page">
      <Navbar />
      <main className="main-pdv-content fw">
        <div className="element-curve" />
        {/* <div className="background-overlay"></div> */}
        <div className="content-container">
          <h1>
            Frente de Caixa (PDV): O Sistema que Até seu Filho Consegue Usar
          </h1>
          <p>
            Nosso sistema PDV te ajuda na gestão completa do seu negócio com a
            facilidade e praticidade que sua empresa merece.
          </p>
          <Link to="/formulario-pdv" className="btn-demo">
            <img src={logInIcon} alt="" />
            Demonstração grátis!
          </Link>
          <code>*Sem taxa de adesão e contratos.</code>
        </div>
        <div className="img-container">
          <img draggable="false" id="el-cc" src={creditCardEl} alt="" />
          <img draggable="false" id="el-wifi" src={wifiEl} alt="" />
          <img draggable="false" id="el-sec" src={securityEl} alt="" />
          <img
            draggable="false"
            src={bannerSistemaPDV}
            alt="Sistema PDV"
            loading="lazy"
          />
        </div>
      </main>

      <section className="sales-transaction">
        <h2 className="title text-center ph-20">
          Venda em Menos de 20 Segundos
        </h2>
        <div className="video-container">
          <img id="f-dots" src={dotsElementImg} alt="" loading="lazy" />
          <iframe
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MiumqAABTis?mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <img id="s-dots" src={dotsElementImg} alt="" loading="lazy" />
        </div>
        <hr className="hr" />
      </section>

      <SectionPDV
        title="Já deixou de vender por não receber pelo PIX?"
        image={paymentMachineImg}
        paragraph=""
      >
        Variedade nos meios de pagamento é crucial! Leve uma melhor experiência
        ao seu cliente e não perca mais vendas.
        <br />
        Confira, suportamos: dinheiro, PIX, principais maquininhas(TEF) de
        cartão de crédito/débito, boleto e a prazo.
      </SectionPDV>

      {/* <SectionPDV
        title="Venda com ou sem internet"
        paragraph="Use o sistema sempre que preciso, com ou sem conexão de internet. Faça tudo normalmente, e quando for possível, se conecte e tenha suas notas fiscais emitidas(caso seu plano possua módulo fiscal incluso)."
        image={connectionImg}
        isReverse={true}
      /> */}

      <section className="background-gray mt-100">
        <SectionPDV
          title="Venda com ou sem internet"
          paragraph="Não dependa de conexão com Internet ou do funcionamento
        do roteador para realizar vendas em nosso PDV. 
        A sua loja nunca deve parar e seu estoque deve estar sempre em dia."
          image={connectionImg}
          isReverse={true}
          customSection={{
            additionalClassName: "mt-0",
          }}
        />
      </section>

      <section className="container text-center mt-100">
        <h2 className="title ph-20">Como iremos te ajudar</h2>
        <Slider className="mt-40" {...carouselSettings}>
          <ManagementCard
            image={pdvManagerIcon}
            title="Gestão Financeira"
            text="Tenha controle do que entre e sai do seu comércio de forma simples. Além disso, não dependa de planilhas para saber o faturamento ou quanto foi vendido no cartão, por exemplo."
          />
          <ManagementCard
            image={stockIcon}
            title="Gestão de Estoque"
            text="Gerencie seu comércio de forma inteligente com um controle dos produtos completo. Saiba quais produtos restam e o que precisa ser comprado de forma rápida e prática."
          />
          <ManagementCard
            image={helpManagerIcon}
            title="Suporte Especializado"
            text="Temos uma equipe de profissionais qualificados e experientes no atendimento comercial. Os nossos atendentes estão prontos para atender suas dúvidas/problemas com nosso sistema."
          />
          <ManagementCard
            image={nfceManagerIcon}
            title="Emissor Fiscal"
            text="Caso precise, temos um emissor fiscal embutido para que seu processo de adequação ao Fisco seja fácil e segura. Emita suas notas e venda seus produtos, tudo em um só lugar!"
          />
        </Slider>
      </section>

      <SectionPDV
        title="Tenha seus indicadores na palma da mão! Onde e quando quiser."
        paragraph="Não perca sua empresa de vista! Com nosso aplicativo você pode verificar como estão as vendas onde estiver, por meio do seu celular com nosso APP!"
        image={mobileControlImg}
        customSection={{
          widthImg: "width-img-mobile",
        }}
      />

      <section className="experience-container">
        <h2 className="ph-20">Nossa experiência</h2>
        <p>Nossa conquista na jornada descrita em números</p>
        <div className="experience-content">
          <div className="experience-number">
            <h6>6+</h6>
            <p>Anos de mercado</p>
          </div>

          <div className="line-break"></div>

          <div className="experience-number">
            <h6>300+</h6>
            <p>Clientes ativos</p>
          </div>

          <div className="line-break"></div>

          <div className="experience-number">
            <h6>900+</h6>
            <p>Terminais ativos</p>
          </div>
        </div>
      </section>
      <section className="experience-container">
        <h2 className="ph-20" id="title-experience-container">
          Comece uma nova etapa de evolução com apenas 3 passos
        </h2>
        <Link to="/formulario-pdv" className="btn-demo" id="btn-demo-experience">
          Peça sua demonstração. É grátis!
        </Link>
      </section>
      

      {/* <section className="main-features container fw">
        <div className="options-container">
          <h2 className="title">Principais funcionalidades</h2>
          <p className="paragraph">
            Clique no botão para exibir o respectivo video
          </p>
          <div className="btn-options-group">
            {mainFeatures.map((item, index) => {
              return (
                <button
                  onClick={() => handleToChangeFeatureImage(index)}
                  className={showFeatureImg === index ? "active-btn" : ""}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="feature-image">
          <img
            src={mainFeatures[showFeatureImg].image}
            alt={mainFeatures[showFeatureImg].label}
          />
        </div>
      </section> 
      <hr className="hr" />
      */}

      <SectionPDV
        title="Backup Automático nas Nuvens"
        paragraph="Tenha seus dados salvos automaticamente. Trabalhe com segurança e
        ocupe seu tempo nas vendas do seu negócio, a cautela que seu
        comércio precisa."
        image={backupServerImg}
        isReverse={true}
      />

      {/* <section className="background-gray mt-100">
        <SectionPDV
          title="“Guarda meu lugar na fila, filho.”"
          image={paymentMachineImg}
          cta="Confira e peça sua demonstração"
          customSection={{
            additionalClassName: "mt-0"
          }}
          paragraph=""
        >
          Esse é o som que uma mãe atarefada faz, quando percebe que a fila do supermercado está longa.
          <br />
          Nenhum consumidor gosta de esperar na fila, mas é muito mais fácil repudiar do que ajudar, no entanto, a Sistemas LA4 oferece gestão de vários terminais, interface intuitiva e variedade na forma de pagamento por um único motivo: ajudar o empreendedor. 

        </SectionPDV>
      </section> */}

      <section className="steps-container container text-center mt-150">
        <h2 className="title ph-20">Seu PDV pronto pra uso em 3 passos</h2>
        <div className="steps-articles fw">
          <article>
            <h6>1.</h6>
            <span>Aderência: verificação de hardware e de rotina.</span>
          </article>
          <article>
            <h6>2.</h6>
            <span>Treinamento da equipe do cliente;</span>
          </article>
          <article>
            <h6>3.</h6>
            <span>Ativação e utilização.</span>
          </article>
        </div>
      </section>

      {/* margin-bottom: 10px !important; */}
      <section className="container text-center mt-100">
        <h2 className="title ph-20">Muito mais funcionalidades</h2>
        <Slider {...carouselSingleItemSettings} className="mt-40">
          <div className="feature-carousel-item">
            <img loading="lazy" src={paymentModesImg} alt="" />
            <div className="text">
              <h3>Variedade nas formas de pagamento</h3>
              <p>
                Venda a prazo e fiado com emissão de recibo ou promissória.
                Tenha também o controle automático da cobrança de juros, em caso
                de atraso, além do bloqueio total em situações específicas.
              </p>
            </div>
          </div>

          <div className="feature-carousel-item">
            <img loading="lazy" src={xmlImg} alt="" />
            <div className="text">
              <h3>Baixa de XML</h3>
              <p>
                Cadastre todos seus produtos automaticamente por meio de um
                arquivo XML.
              </p>
            </div>
          </div>

          <div className="feature-carousel-item">
            <img loading="lazy" src={balanceImg} alt="" />
            <div className="text">
              <h3>Integração com Balança</h3>
              <p>
                O sistema lê suas etiquetas para buscar o preço e o peso do
                produto automaticamente.
              </p>
            </div>
          </div>
        </Slider>
      </section>
      <br />
      <br />

      {/* <section className="reviews-container mt-150">
        <h2 className="title text-center ph-20">Quem usa recomenda</h2>
        <div className="reviews">
          <article>
            <div className="content">
              <h5>Uma experia incrivel</h5>
              <p>
                A promotoria registrou também o depoimento de Patrizia
                D'Addario, que contou à imprensa ter entregue à justiça duas
                gravações e vídeos dos encontros. A promotoria registrou também
                o depoimento de Patrizia D'Addario.
              </p>
            </div>
            <div className="client">
              <img src={client1Img} alt="Foto do cliente" loading="lazy" />
              <div className="name">
                <p>João Guilherme</p>
                <span>CTO, Europcar</span>
              </div>
            </div>
          </article>

          <article>
            <div className="content">
              <h5>Uma experia incrivel</h5>
              <p>
                A promotoria registrou também o depoimento de Patrizia
                D'Addario, que contou à imprensa ter entregue à justiça duas
                gravações e vídeos dos encontros. A promotoria registrou também
                o depoimento de Patrizia D'Addario.
              </p>
            </div>
            <div className="client">
              <img src={client1Img} alt="Foto do cliente" loading="lazy" />
              <div className="name">
                <p>João Guilherme</p>
                <span>CTO, Europcar</span>
              </div>
            </div>
          </article>
        </div>
      </section> */}

      <section className="faq container mt-100">
        <h2 className="title text-center ph-20">Perguntas frequentes</h2>
        <div className="questions-answers">
          <img
            src={faqIcon}
            loading="lazy"
            width="30"
            height="30"
            alt="Exibir respostas"
          />
          <div>
            <p>
              O sistema consegue fazer leitura de balança e leitor de código de
              barras
            </p>
            <span>
              Sim. O sistema é feito para ler o KIT PDV: balança e um leitor.
            </span>
          </div>
        </div>

        <div className="questions-answers">
          <img
            src={faqIcon}
            loading="lazy"
            width="30"
            height="30"
            alt="Exibir respostas"
          />
          <div>
            <p>O sistema funciona para todos os estados?</p>
            <span>
              Sim, hoje com a tecnologia não existe distância. Nossa equipe é
              treinada para auxiliar o cliente em qualquer lugar do Brasil.
            </span>
          </div>
        </div>

        <div className="questions-answers">
          <img
            src={faqIcon}
            loading="lazy"
            width="30"
            height="30"
            alt="Exibir respostas"
          />
          <div>
            <p>O sistema é mensal?</p>
            <span>
              Sim, por ser um ERP e se tratar da gestão completa da empresa, o
              cliente sempre irá querer novas funcionalidades e ajustes para sua
              rotina.
            </span>
          </div>
        </div>

        <div className="questions-answers">
          <img
            src={faqIcon}
            loading="lazy"
            width="30"
            height="30"
            alt="Exibir respostas"
          />
          <div>
            <p>Caso queira desistir, existe alguma taxa ou multa?</p>
            <span>
              Não, nossa política é a satisfação do cliente com relação à
              ferramenta e o suporte. Caso não for possível, o cliente não será
              preso ou forçado de qualquer forma.
            </span>
          </div>
        </div>
      </section>

      <section className="some-questions container mt-100">
        <section
          className="fw container scomponent-pdv-container reverse"
          id="some-question"
        >
          <div className="img-container">
            <img src={someQuestions} loading="lazy" alt="Equipe de suporte" />
          </div>
          <div className="content-container">
            <h2 className="title">Restou alguma dúvida?</h2>
            <p className="paragraph">
              Temos uma equipe de profissionais qualificados e experientes no
              atendimento comercial. Os atendentes estão prontos para atender e
              resolver suas dúvidas/problemas referentes ao nosso sistema.
            </p>

            <a
              className="some-question btn-demo"
              href="https://api.whatsapp.com/send/?phone=556592586757&text=Ol%C3%A1,%20pode%20me%20falar%20mais%20sobre%20o%20sistema%20PDV?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={supportIcon} alt="Suporte" loading="lazy" />
              Entrar em contato
            </a>
          </div>
        </section>
      </section>

      {/* <section className="segments-pdv container mt-100">
        <h2 className="title text-center">
          A LA4 Sistemas tem soluções flexíveis e feitas para seu négocio
        </h2>
        <div className="segments-items">
          <div className="items">
            <div className="item-pdv">
              <img
                src={financeIcon}
                className="img-item-pdv"
                alt=""
                width={70}
              />
              <h3>Supermercado</h3>
            </div>
            <div className="item-pdv">
              <img
                src={financeIcon}
                className="img-item-pdv"
                alt=""
                width={70}
              />
              <h3>Supermercado</h3>
            </div>
          </div>
        </div>
      </section> */}

      <footer id="footer-page">
        <div className="footer-content">
          <div className="logo-container">
            <img loading="lazy" src={logoImg} alt="Logo Sistemas LA4" />
            <div className="logo-text">
              <h1>Sistemas LA4</h1>
              <p>Sistemas que até seu filho consegue usar</p>
            </div>
          </div>

          <div className="social-media">
            <a
              href="https://www.instagram.com/la4_sistemas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={instagramIcon}
                width="35"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/la4sistemas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={facebookIcon}
                width="33"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCddPo1j0ZrTi5DuXmNcDXbg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img loading="lazy" src={youtubeIcon} width="40" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="copyright-container">
          <p>
            Copyright © 2021{" "}
            <a
              href="https://sistemasla4.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sistemas LA4
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
