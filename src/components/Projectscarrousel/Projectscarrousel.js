import { useState } from "react";
import { NavLink } from "react-router-dom";
import { slides } from "./Slides.js"
import "./Projectscarrousel.scss"

function Projectscarrousel() {

    const [index, setIndex] = useState(0);
    const images = slides.map(slides => slides.image)
    const roots = slides.map(slides => slides.root)
    const nbSlide = slides.length;

    const nextCard = () => {
        if(index < nbSlide - 1){
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    };

    const previousCard = () => {
        if(index > 0){
            setIndex(index - 1)
        } else {
            setIndex(nbSlide - 1)
        }
    };

    return (
      <div>
        <div className="projectscarrousel">
          <div className="carrousel">
            <NavLink to={roots[index]} className="">
              <img src={images[index]} alt="" className="sliderImage" 
              // height={'100%'} width={'100%'}
              />
            </NavLink>
          </div>

          <div className="context">
            <p>{slides[index].context}</p>
          </div>

          <div className="dotsAndArrows">
            <i className="fa-solid fa-arrow-left arrow" id="arrowLeft"
              onClick={previousCard}>
            </i>
            <div className="dots">
              <i className={`${index === 0  ? "fa-solid" : "fa-regular"} fa-circle dot`}></i>
              <i className={`${index === 1  ? "fa-solid" : "fa-regular"} fa-circle dot`}></i>
              <i className={`${index === 2  ? "fa-solid" : "fa-regular"} fa-circle dot`}></i>
            </div>
            <i className="fa-solid fa-arrow-right arrow" id="arrowRight"
              onClick={nextCard}>
            </i>
          </div>
          
          <p className="gitHub">Retrouvez l'intégralité de mes projets ici : 
            <NavLink to='https://github.com/BoissonMathis?tab=repositories' target="_blank">
              <i className="fa-brands fa-github"></i>
            </NavLink>
          </p>

        </div>
        <div className="projectSkills">
          <p className="skill">{slides[index].langage}</p>
        </div>
      </div>
    );
  }
  
  export default Projectscarrousel;