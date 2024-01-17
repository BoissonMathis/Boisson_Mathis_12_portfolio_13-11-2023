import "./Abilities.scss"

function Abilities() {

    return (
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
    );
}

export default Abilities