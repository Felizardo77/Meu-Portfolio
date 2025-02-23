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
    primeiroNome: "Felizardo",
    ultimoNome: "Muchanga",
    aka: "The Null",
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iste enim quae accusantium similique provident suscipit?
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
