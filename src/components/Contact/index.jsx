import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Pyramid from "../../ui/Pyramid";
import "./contacts.css";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4z05z8",
        "template_k16hxdn",
        form.current,
        "QVySz-nBVJLUud7tI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Mensagem enviada com sucesso!");
          form.current.reset(); // Limpa os campos do formulário
        },
        (error) => {
          console.log(error.text);
          setMessage("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Vamos falar sobre o seu{" "}
              <span className="shine">grande projeto</span> juntos
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="flex__center btn"
                    >
                      <span className="btn__shine text">Message</span>
                      <div
                        className="flex__center icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Seu nome completo"
              name="name"
              required
            />
            <input type="email" placeholder="Seu email" name="email" required />
            <textarea
              name="message"
              rows={7}
              placeholder="Mensagem"
              required
            ></textarea>
            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>Enviar Agora</span>
            </button>
          </form>
          {message && <p className="confirmation-message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
