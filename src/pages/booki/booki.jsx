import { NavLink } from "react-router-dom";
import logo from "../../assets/booki/logo/Booki.png";
import anniespratt from "../../assets/booki/hebergements/annie-spratt.jpg";
import awcreative from "../../assets/booki/hebergements/aw-creative.jpg";
import emileguillemot from "../../assets/booki/hebergements/emile-guillemot.jpg";
import febrianzakaria1 from "../../assets/booki/hebergements/febrian-zakaria.jpg";
import febrianzakaria2 from "../../assets/booki/hebergements/febrian-zakaria2.jpg";
import fredkleber from "../../assets/booki/hebergements/fred-kleber.jpg";
import marcusloke from "../../assets/booki/hebergements/marcus-loke.jpg";
import nicatelee from "../../assets/booki/hebergements/nicate-lee.jpg";
import reisetopia from "../../assets/booki/hebergements/reisetopia.jpg";
import florianwehde from "../../assets/booki/activites/florian-wehde.jpg";
import florianwehde589 from "../../assets/booki/activites/florian-wehde-589.jpg";
import florianwehde1040 from "../../assets/booki/activites/florian-wehde-1040.jpg";
import florianwehde1460 from "../../assets/booki/activites/florian-wehde-1460.jpg";
import florianwehde1780 from "../../assets/booki/activites/florian-wehde-1780.jpg";
import kilyansockalingum from "../../assets/booki/activites/kilyan-sockalingum.jpg";
import kilyansockalingum256 from "../../assets/booki/activites/kilyan-sockalingum-256.jpg";
import kilyansockalingum606 from "../../assets/booki/activites/kilyan-sockalingum-606.jpg";
import kilyansockalingum1040 from "../../assets/booki/activites/kilyan-sockalingum-1040.jpg";
import kilyansockalingum1460 from "../../assets/booki/activites/kilyan-sockalingum-1460.jpg";
import kilyansockalingum1780 from "../../assets/booki/activites/kilyan-sockalingum-1780.jpg";
import kilyansockalingum2048 from "../../assets/booki/activites/kilyan-sockalingum-2048.jpg";
import paulhermann from "../../assets/booki/activites/paul-hermann.jpg";
import paulhermann356 from "../../assets/booki/activites/paul-hermann-356.jpg";
import paulhermann780 from "../../assets/booki/activites/paul-hermann-780.jpg";
import paulhermann1040 from "../../assets/booki/activites/paul-hermann-1040.jpg";
import paulhermann1240 from "../../assets/booki/activites/paul-hermann-1240.jpg";
import paulhermann1400 from "../../assets/booki/activites/paul-hermann-1400.jpg";
import paulhermann1550 from "../../assets/booki/activites/paul-hermann-1550.jpg";
import paulhermann1690 from "../../assets/booki/activites/paul-hermann-1690.jpg";
import paulhermann1820 from "../../assets/booki/activites/paul-hermann-1820.jpg";
import paulhermann1940 from "../../assets/booki/activites/paul-hermann-1940.jpg";
import paulhermann2048 from "../../assets/booki/activites/paul-hermann-2048.jpg";
import renolaithienne from "../../assets/booki/activites/reno-laithienne.jpg";
import renolaithienne256 from "../../assets/booki/activites/reno-laithienne-256.jpg";
import renolaithienne702 from "../../assets/booki/activites/reno-laithienne-702.jpg";
import renolaithienne1040 from "../../assets/booki/activites/reno-laithienne-1040.jpg";
import renolaithienne1460 from "../../assets/booki/activites/reno-laithienne-1460.jpg";
import renolaithienne1780 from "../../assets/booki/activites/reno-laithienne-1780.jpg";
import renolaithienne2048 from "../../assets/booki/activites/reno-laithienne-2048.jpg";
import "./booki.scss";

function Booki() {
  return (
    <div id="booki">
      <div class="retour-accueil">
        <NavLink to={"/"}>
          <i class="fa-solid fa-arrow-left"> Accueil</i>
        </NavLink>
      </div>

      <div className="booki">
        <header>
          <div className="bookiLogo">
            <img src={logo} alt="Logo Booki" />
          </div>

          <ul>
            <li>
              <a href="#toHebergements">Hébergements</a>
            </li>
            <li>
              <a href="#toActivity">Activités</a>
            </li>
          </ul>
        </header>

        <nav>
          <div className="headline">
            <h1 className="section-title">
              Trouvez votre hébergement pour des vacances de rêve
            </h1>
            <p>En plein centre-ville ou en pleine nature</p>
          </div>

          <div className="searchBar">
            <form>
              <i
                className="fa-normal fa-solid fa-location-dot bookiLocationDot"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                name="text"
                className="search"
                placeholder="Marseille, France"
              />
              <button type="submit" className="submit">
                <i className="fa-normal fa-solid fa-magnifying-glass"></i>
                <span>Rechercher</span>
              </button>
            </form>
          </div>

          <div className="filtre">
            <div className="filtre_title">
              <h2>Filtres</h2>
            </div>

            <div className="filtreButtons">
              <a href="/#">
                <div className="filtreButton filtreHighlight">
                  <i className="fa-normal fa-solid fa-money-bill-wave"></i>
                  <h3>Économique</h3>
                </div>
              </a>

              <a href="/#">
                <div className="filtreButton filtreHighlight">
                  <i className="fa-normal fa-solid fa-person"></i>
                  <h3>Familial</h3>
                </div>
              </a>

              <a href="/#">
                <div className="filtreButton filtreHighlight">
                  <i className="fa-normal fa-solid fa-heart"></i>
                  <h3>Romantique</h3>
                </div>
              </a>

              <a href="/#">
                <div className="filtreButton filtreHighlight">
                  <i className="fa-normal fa-solid fa-fire"></i>
                  <h3>Nos pépites</h3>
                </div>
              </a>
            </div>
          </div>

          <div className="info">
            <i className="fa-xs fa-solid fa-info"></i>
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
        </nav>

        <main>
          <div className="hebergements-and-populaires">
            <section className="hebergements" id="toHebergements">
              <div className="hebergements-title">
                <h1 className="section-title">Hébergements à Marseille</h1>
              </div>

              <div className="hebergements-cards">
                <a href="/#">
                  <article className="booki-card un">
                    <img
                      src={fredkleber}
                      alt="chambre d'hôtel montrant un lit"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">Hôtel du port</h4>
                        <p className="card-subtitle">
                          Nuit à partir de 52<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="/#">
                  <article className="booki-card deux">
                    <img
                      src={febrianzakaria1}
                      alt="chambre d'hôtel montrant un lit1"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">Hôtel Chez Amina</h4>
                        <p className="card-subtitle">
                          Nuit à partir de 96<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="/#">
                  <article className="booki-card trois">
                    <img
                      src={reisetopia}
                      alt="chambre d'hôtel montrant un lit2"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">Hôtel Les mouettes</h4>
                        <p className="card-subtitle">
                          Nuit à partir de 76<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="/#">
                  <article className="booki-card quatre">
                    <img
                      src={anniespratt}
                      alt="chambre d'hôtel montrant un lit3"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">Hôtel de la mer</h4>
                        <p className="card-subtitle">
                          Nuit à partir de 46<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="/#">
                  <article className="booki-card cinq">
                    <img
                      src={marcusloke}
                      alt="chambre d'hôtel montrant un lit4"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">
                          Auberge La Canebière
                        </h4>
                        <p className="card-subtitle">
                          Nuit à partir de 25<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>

                <a href="/#">
                  <article className="booki-card six">
                    <img
                      src={nicatelee}
                      alt="chambre d'hôtel montrant un lit5"
                    />
                    <div className="card-content">
                      <div className="booki-card-text">
                        <h4 className="booki-card-title">Auberge Le Panier</h4>
                        <p className="card-subtitle">
                          Nuit à partir de 52<span className="euro">€</span>
                        </p>
                      </div>
                      <div className="card-rating">
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star"
                          aria-hidden="true"
                        ></i>
                        <i
                          className="fa-xs fa-solid fa-star neutralStar"
                          aria-hidden="true"
                        ></i>
                        <span className="sr-only">Note de 4 sur 5</span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <h2>Afficher plus</h2>
            </section>

            <section className="populaires">
              <div className="populaires-title">
                <h1 className="section-title">Les plus populaires</h1>
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
              </div>

              <div className="populaires-cards">
                <article className="booki-card">
                  <img
                    src={emileguillemot}
                    alt="chambre d'hôtel montrant un lit6"
                  />
                  <div className="card-content">
                    <div className="booki-card-text">
                      <h4 className="booki-card-title">
                        Hôtel Le soleil du matin
                      </h4>
                      <p className="card-subtitle">
                        Nuit à partir de 128<span className="euro">€</span>
                      </p>
                    </div>
                    <div className="card-rating">
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star neutralStar"
                        aria-hidden="true"
                      ></i>
                      <span className="sr-only">Note de 4 sur 5</span>
                    </div>
                  </div>
                </article>

                <article className="booki-card">
                  <img
                    src={awcreative}
                    alt="chambre d'hôtel montrant un lit7"
                  />
                  <div className="card-content">
                    <div className="booki-card-text">
                      <h4 className="booki-card-title">
                        Chambres d’hôtes Au cœur de l’eau
                      </h4>
                      <p className="card-subtitle">
                        Nuit à partir de 71<span className="euro">€</span>
                      </p>
                    </div>
                    <div className="card-rating">
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star neutralStar"
                        aria-hidden="true"
                      ></i>
                      <span className="sr-only">Note de 4 sur 5</span>
                    </div>
                  </div>
                </article>

                <article className="booki-card">
                  <img
                    src={febrianzakaria2}
                    alt="chambre d'hôtel montrant un lit8"
                  />
                  <div className="card-content">
                    <div className="booki-card-text">
                      <h4 className="booki-card-title">Hôtel Bleu et Blanc</h4>
                      <p className="card-subtitle">
                        Nuit à partir de 68<span className="euro">€</span>
                      </p>
                    </div>
                    <div className="card-rating">
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-xs fa-solid fa-star neutralStar"
                        aria-hidden="true"
                      ></i>
                      <span className="sr-only">Note de 4 sur 5</span>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>

          <section className="activity" id="toActivity">
            <h1 className="section-title activity-title">
              Activités à Marseille
            </h1>
            <div className="activityCard">
              <article className="booki-card">
                <a href="/#">
                  <img
                    src={renolaithienne}
                    alt="chambre d'hôtel montrant un lit9"
                    srcSet={`${renolaithienne256} 256w, ${renolaithienne702} 702w, ${renolaithienne1040} 1040w, ${renolaithienne1460} 1460w, ${renolaithienne1780} 1780w, ${renolaithienne2048} 2048w`}
                    sizes="(min-width: 1040px) 14.64vw, (min-width: 780px) 19.58vw, 90vw"
                  />
                  <div className="booki-card-text card-content">
                    <h4 className="booki-card-title">Vieux-Port</h4>
                  </div>
                </a>
              </article>

              <article className="booki-card">
                <a href="/#">
                  <img
                    src={paulhermann}
                    alt="chambre d'hôtel montrant un lit10"
                    srcSet={`${paulhermann356} 356w, ${paulhermann780} 780w, ${paulhermann1040} 1040w, ${paulhermann1240} 1240w, ${paulhermann1400} 1400w, ${paulhermann1550} 1550w, ${paulhermann1690} 1690w, ${paulhermann1820} 1820w, ${paulhermann1940} 1940w, ${paulhermann2048} 2048w`}
                    sizes="(min-width: 1040px) 14.64vw, (min-width: 780px) 19.58vw, 90vw"
                  />
                  <div className="booki-card-text card-content">
                    <h4 className="booki-card-title">Fort de Pomègues</h4>
                  </div>
                </a>
              </article>

              <article className="booki-card">
                <a href="/#">
                  <img
                    src={kilyansockalingum}
                    alt="chambre d'hôtel montrant un lit11"
                    srcSet={`${kilyansockalingum256} 256w, ${kilyansockalingum606} 606w, ${kilyansockalingum1040} 1040w, ${kilyansockalingum1460} 1460w, ${kilyansockalingum1780} 1780w, ${kilyansockalingum2048} 2048w`}
                    sizes="(min-width: 1040px) 14.64vw, (min-width: 780px) 19.58vw, 90vw"
                  />
                  <div className="booki-card-text card-content">
                    <h4 className="booki-card-title">
                      Parc national des Calanques
                    </h4>
                  </div>
                </a>
              </article>

              <article className="booki-card">
                <a href="/#">
                  <img
                    src={florianwehde}
                    alt="chambre d'hôtel montrant un lit12"
                    srcSet={`${florianwehde589} 589w, ${florianwehde1040} 1040w, ${florianwehde1460} 1460w, ${florianwehde1780} 1780w`}
                    sizes="(min-width: 1040px) 14.64vw, (min-width: 780px) 19.58vw, 90vw"
                  />
                  <div className="booki-card-text card-content">
                    <h4 className="booki-card-title">Notre-Dame-de-la-Garde</h4>
                  </div>
                </a>
              </article>
            </div>
          </section>
        </main>

        <footer className="bookiFooter">
          <section className="footerList">
            <div className="list">
              <h2>À propos</h2>
              <ul>
                <li>
                  <a href="/#" className="functioning navButton">
                    Fonctionnement du site
                  </a>
                </li>
                <li>
                  <a href="/#" className="termsAndConditions navButton">
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a href="/#" className="dataAndPrivacy navButton">
                    Données et confidentialité
                  </a>
                </li>
              </ul>
            </div>

            <div className="list">
              <h2>Nos hébergements</h2>
              <ul>
                <li>
                  <a href="/#" className="quality navButton">
                    Charte qualité
                  </a>
                </li>
                <li>
                  <a href="/#" className="proposeYourHotel navButton">
                    Proposer votre hôtel
                  </a>
                </li>
              </ul>
            </div>

            <div className="list">
              <h2>Assistance</h2>
              <ul>
                <li>
                  <a href="/#" className="helpCenter navButton">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="/#" className="contact navButton">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default Booki;
