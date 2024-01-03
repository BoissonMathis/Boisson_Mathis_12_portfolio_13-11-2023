import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import emailjs from "@emailjs/browser";
import "./Contactform.scss";
import { editFormCompleted, editIsVisible } from "./contactformSlice";

function Contactform() {

  const dispatch = useDispatch()
  const formCompleted = useSelector(state => state.contactStates.formCompleted)
  console.log(formCompleted)
  const isVisible = useSelector(state => state.contactStates.isVisible)
  console.log(isVisible)
  
  const [mailSubject, setMailSubject] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [mailName, setMailName] = useState("");
  const [mailEmail, setMailEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");


  const sendMessage = (e) => {
    e.preventDefault();
    if (mailSubject && mailMessage && mailName && mailEmail !== "") {
      const templateId = "template_i29g1rh";
      const serviceId = "service_jga78jr";
      sendFeedback(serviceId, templateId, {
        name: mailName,
        email: mailEmail,
        subject: mailSubject,
        message: mailMessage,
      });
      document.getElementById("contactForm").reset();
      console.log("click");
      setFormMessage("Merci pour votre message !");
      dispatch(editIsVisible())
      dispatch(editFormCompleted())
      setTimeout(() => {
        dispatch(editIsVisible())
        dispatch(editFormCompleted())
      }, 4000);
    } else {
      console.log("Tous les champs doivent être renseignés");
      setFormMessage("Tous les champs doivent être renseignés");
      dispatch(editIsVisible())
      setTimeout(() => {
        dispatch(editIsVisible())
      }, 4000);
    }
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "A6BaOCfjKZD1rVuwa")
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.error("Il y a une erreur"));
  };

  return (
    <section className="contactMe" id="contactMe">
      <form className="contactForm" id="contactForm">
        <label className="formLabel" htmlFor="subjectForm">
          Nom et Prénom :
        </label>
        <input
          type="text"
          className="formInput"
          id="nameForm"
          onChange={(e) => setMailName(e.target.value)}
        />
        <label className="formLabel" htmlFor="subjectForm">
          E-mail :
        </label>
        <input
          type="text"
          className="formInput"
          id="emailForm"
          onChange={(e) => setMailEmail(e.target.value)}
        />
        <label className="formLabel" htmlFor="subjectForm">
          Sujet :
        </label>
        <input
          type="text"
          className="subject formInput"
          id="subjectForm"
          onChange={(e) => setMailSubject(e.target.value)}
        />
        <label className="formLabel" htmlFor="messageForm">
          Votre message :
        </label>
        <textarea
          className="message formInput"
          id="messageForm"
          onChange={(e) => setMailMessage(e.target.value)}
          aria-label="message"
        />
        <p
          className={`${isVisible ? "visible" : "invisible"} ${
            formCompleted ? "green" : "red"
          }`}
        >
          {formMessage}
        </p>
        <button onClick={sendMessage} className="formSubmit">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contactform;
