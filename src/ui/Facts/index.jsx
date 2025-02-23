import "./Facts.css";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "react-odometerjs";
import { useState, useEffect } from "react";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(()=>{
    const timeoutId = setTimeout(() => {
        setExperience(5);
        setProjects(10);
        setClients(2.5);
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <div className="flex__center fact__container">

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Anos de experiencia</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Projectos Feitos</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <h3 className="title">K</h3>
        </div>
        <p className="label">Clientes satisfeitos</p>
      </div>

    </div>
  );
};

export default Facts;
