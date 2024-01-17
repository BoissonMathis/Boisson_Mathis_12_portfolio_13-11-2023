import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editStarted } from "./introductionSlice.js";
import chibi from "../../assets/img/mychibi.jpg";
import "./Introduction.scss";

export default function Introduction() {
  const dispatch = useDispatch();

  const myChibi = useRef(null);
  const startBtn = useRef(null);
  const introTxt = useRef(null);

  const changeStarted = () => {
    dispatch(editStarted());
  };

  const endIntro = () => {
    setTimeout(changeStarted, 1000);
    startBtn.current.classList.add("rotate");
    myChibi.current.classList.add("leave");
    introTxt.current.classList.add("disapear");
  };

  return (
    <div className="welcome">
      <button className="startButton" onClick={endIntro} ref={startBtn}>
        start
      </button>
      <div className="introduction">
        <p className="introductionText" ref={introTxt}>
          Bonjour, je m'appelle Mathis Boisson et je suis intégrateur Web
          Junior, bienvenue sur mon portfolio ! Pour en apprendre plus sur moi,
          clique sur start.
        </p>
      </div>
      <img src={chibi} alt="moi en chibi" className="chibi" ref={myChibi}></img>
    </div>
  );
}
