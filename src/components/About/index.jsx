import "./about.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">Minhas Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color="var(--color-primary)" />
        </div>
        <div className="column right-column">
          <h2 className="shine">Sobre mim</h2>
          <h2 className="title">
            Eu sou <span className="color__primary">Felizardo Muchanga</span>
          </h2>
          <p className="text__muted description">
            Sou engenheiro de software e desenvolvedor fullstack, atuando como
            co-fundador e dev fullstack na Ikarus Tech. Atualmente, estou focado
            no desenvolvimento do site oficial da empresa e em projetos
            estratégicos confidenciais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
