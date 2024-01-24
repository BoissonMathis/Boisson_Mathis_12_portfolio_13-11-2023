import { useSelector } from "react-redux";
import Carrousel from "../../components/Projectscarrousel/Projectscarrousel.js";
import Header from "../../components/Header/Header.js";
import Nav from "../../components/Nav/Nav.js";
import Contact from "../../components/Contactform/Contactform.js";
import Aboutme from "../../components/Aboutme/Aboutme.js";
import Abilities from "../../components/Abilities/Abilities.js";
import Introduction from "../../components/Introduction/Introduction.js";
import Footer from "../../components/Footer/Footer.js";
import "../page.scss";

function Home() {
  const started = useSelector((state) => state.introductionStates.started);

  if (started === false) {
    return (
      <div id="app">
        <Introduction />
      </div>
    );
  }
  if (started === true) {
    return (
      <div id="app">
        <Header />
        <Nav />
        <div className="body home">
          <Aboutme />
          <Abilities />
          <section className="integrationWeb" id="projets">
            <div className="integrationTitle">
              <h3>Projets intégration web</h3>
            </div>
            <Carrousel />
          </section>

          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
