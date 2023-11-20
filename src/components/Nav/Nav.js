import "./Nav.scss"
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import React, {useEffect, useState } from 'react'

function Nav() {

  const [absolute, setAbsolute] = useState(true);
  const sticky = useRef();

  useEffect(() => {
    const posYNav = sticky.current.offsetTop;

    window.addEventListener('scroll', () => {
      if(window.scrollY > posYNav){
        setAbsolute(false)
      }else if (window.scrollY < posYNav){
        setAbsolute(true)
      }
    })
    
  }, [])

  return (
    <div>
      <div ref={sticky} className={`${absolute ? "absolute" : "fixed"} nav`}>
        <a href="#projets">Mes projets</a>
        <a href="#aboutMe">À propos de moi</a>
        <a href="#contactMe">Me contacter</a>
        <NavLink to='https://github.com/BoissonMathis?tab=repositories' target="_blank">
          <i className="fa-brands fa-github" id="navGithub"></i>
        </NavLink>
      </div>
    </div>
  );
}
  
export default Nav;