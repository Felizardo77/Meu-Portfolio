import React from "react";
import "./header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
const developer = {
    primeiroNome: Felizardo,
    ultimoNome: Muchanga,
    aka: Null,
    hobby:repeat = () =>{
        //comer()
        //dormir()
        //programar()
        //repeat()
    }
}
`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
            <h1 className="custom-title">
              Criando Experiências Digitais – UI/UX, Desenvolvimento Web &
              Software
            </h1>
          </div>
          <div className="column">
            <img
              src={profile1}
              className="profile__photo"
              alt="profile photo"
            />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"Javascript"} code={code} />
          <div>
            <p className="text__muted description">
              Engenheiro de Software e Desenvolvedor Full Stack apaixonado por
              criar interfaces intuitivas, backends escaláveis e soluções
              inteligentes com OpenCV. Sempre explorando novas tecnologias para
              transformar ideias em código eficiente.
            </p>
            <Facts />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
