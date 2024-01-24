import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editStarted } from "./introductionSlice.js";
import chibi from "../../assets/img/mychibi.jpg";
import portal from "../../assets/img/portal.jpg"
import "./Introduction.scss";

export default function Introduction() {
  const dispatch = useDispatch();
  

  const myChibi = useRef(null);
  const introTxt = useRef(null);
  const myPortal = useRef(null);

  const changeStarted = () => {
    dispatch(editStarted());
  };

  const endIntro = () => {
    
    myChibi.current.classList.add("leave");
    introTxt.current.classList.add("disapear");
    myPortal.current.classList.add("portalScale")
    setTimeout(changeStarted, 1000);
  };

  return (
    <div className="welcome">
      <img src={portal} className="portal" onClick={endIntro} ref={myPortal} alt="un vortex bleu"></img>
      <div className="introduction">
        <p className="introductionText" ref={introTxt}>
          Bonjour, je m'appelle Mathis Boisson et je suis intégrateur Web
          Junior, bienvenue sur mon portfolio ! Pour en apprendre plus sur moi,
          clique sur le portail.
        </p>
      </div>
      <img src={chibi} alt="moi en chibi" className="chibi" ref={myChibi}></img>
    </div>
  );
}
