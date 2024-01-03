import Carrousel from "../../components/Projectscarrousel/Projectscarrousel.js";
import Header from "../../components/Header/Header.js";
import Nav from "../../components/Nav/Nav.js";
import Contact from "../../components/Contactform/Contactform.js";
import "../page.scss";

function Home() {
  return (
    <div id="app">
      <Header />
      <Nav />
      <div className="body home">
        <section className="integrationWeb" id="projets">
          <div className="integrationTitle">
            <h3>Projets intégration web</h3>
          </div>
          <Carrousel />
        </section>

        <section className="abilities" id="abilities">
          <div className="abilitiesTitle">
            <h3>Mes compétences</h3>
          </div>

          <div className="abilitiesLangage">
            <h4>Langages de programmation</h4>
            <p>HTML/CSS - SCSS - SASS</p>
            <ul>
              <li>intégration complète</li>
              <li>animations</li>
              <li>page structurée</li>
            </ul>
            <p>JavaScript</p>
            <ul>
              <li>gestion des interactions utilisateurs</li>
              <li>mise en place des appels API</li>
              <li>création de sites dynamiques</li>
            </ul>
            <p>React</p>
            <ul>
              <li>création d'applications web</li>
              <li>gestion de states globaux via React Redux</li>
            </ul>
          </div>

          <div className="abilitiesOptimisation">
            <h4>Optimisation de sites/applications web</h4>
            <ul>
              <li>SEO et référencement local</li>
              <li>optimisation du code et des performances</li>
              <li>optimisation de l'accessibilité</li>
            </ul>
          </div>

          <div className="abilitiesMaintenance">
            <h4>Maintenance</h4>
            <ul>
              <li>débogage Réact/JS/HTML-CSS</li>
              <li>suppression/remplacement de code legacy</li>
              <li>mise à jour des plug-ins</li>
            </ul>
          </div>
        </section>

        <section className="aboutMe" id="aboutMe">
          <div className="aboutTitle">
            <h3>À propos de moi</h3>
          </div>
          <p>
            Je m'apelle Mathis Boisson, j'ai 23 ans, et je suis actuellement la
            formation intégrateur web de chez OpenClassRoom. <br />
            Titulaire d'un bac STI2D SIN, je me suis dans un premier temps
            dirigé vers un BTS FED option Domotique que j'ai obtenu en 2022
            aprés 2 années d'alternance. <br />
            Le métier ne me convenant pas vraiment, je prends la décision, en
            2023, de me réorienter vers un métier qui m'intéresse depuis mon
            adolescence : le développement web. <br />
            Je commence donc ma démarche en m'insrivant à pôle emploi, qui me
            propose un contrat engagement jeune et me finance ma formation
            actuelle.
          </p>
        </section>

        <Contact />
      </div>
    </div>
  );
}

export default Home;
