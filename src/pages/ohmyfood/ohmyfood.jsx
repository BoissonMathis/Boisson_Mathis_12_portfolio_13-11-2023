import "./ohmyfood.scss"
import { NavLink } from "react-router-dom";
import alafrancaiseImg from "../../assets/ohmyfood/restaurants/francaise.jpg"
import delicedessensImg from "../../assets/ohmyfood/restaurants/delicedessens.jpg"
import noteenchanteeImg from "../../assets/ohmyfood/restaurants/noteenchantee.jpg"
import palettedugoutImg from "../../assets/ohmyfood/restaurants/palettedugout.jpg"
import logo from '../../assets/ohmyfood/ohmyfood.png'

function Ohmyfood() {

  return (
    <div id="ohmyfood">
      <div className="retour-accueil">
        <NavLink to={'/'}>
          <i className="fa-solid fa-arrow-left"> Accueil</i>
        </NavLink>
      </div>
        <div className="ohmyfood">

          <div className="loader">
                <p className="oh">oh</p>
                <p className="my 2">my</p>
                <p className="food 3">food</p>
              </div>

              <header>
                <div className="header_logo">
                  <div className="logo">
                    <img src={ logo } alt="Logo ohmyfood"/>
                  </div>
                </div>
                <div className="header_location">
                  <i className="fa-normal fa-solid fa-location-dot" ></i><p>Paris, Belleville</p>
                </div>
              </header>

              <nav>
                <div className="navigation">
                  <h1>Réservez le menu qui vous convient</h1>
                  <p>Découvrez des restaurants d'exception, sélectionnés par nos soins.</p>
                  <div className="exploreButton">
                      <p className="button" >Explorer nos restaurants</p>
                  </div>
                </div>
              </nav>

              <main>
                <section className="functioning">
                  <h1>Fonctionnement</h1>
                  <div className="functioningContent">
                    <article className="functioningArticle">
                      <div className="number">
                        <p>1</p>
                      </div>
                      <i className="fa-solid fa-mobile-screen-button"></i>
                      <h2>Choisissez un restaurant</h2>
                    </article>
                        
                    <article className="functioningArticle">
                      <div className="number">
                        <p>2</p>
                      </div>
                      <i className="fa-solid fa-list-ul"></i>
                      <h2>Composez votre menu</h2>
                    </article>

                    <article className="functioningArticle">
                      <div className="number">
                        <p>3</p>
                      </div>
                      <i className="fa-solid fa-store"></i>
                      <h2>Dégustez au restaurant</h2>
                    </article>
                  </div>
                </section>

                <section className="restaurants">
                  <h1>Restaurants</h1>
                  <div className="restaurants-content">
                    <article className="card un">
                      <div className="new">
                        <p>Nouveau</p>
                      </div>
                      <NavLink to={'/ohmyfood/palettedugout'}>
                        <img src={ palettedugoutImg } alt=""/>
                        <div className="card-content">
                          <div className="card-txt">
                            <h2 className="card-title">La palette du goût</h2>
                            <p className="card-subtitle">Ménilmontant</p>
                          </div>
                          <div className="card-like">
                            <i className="fa-sharp fa-regular fa-heart like-on"></i>
                          </div>
                        </div>
                      </NavLink>
                    </article>

                    <article className="card deux">
                      <div className="new">
                        <p>Nouveau</p>
                      </div>
                      <NavLink to={'/ohmyfood/noteenchantee'}>
                        <img src={noteenchanteeImg} alt=""/>
                        <div className="card-content">
                          <div className="card-txt">
                            <h2 className="card-title">La note enchantée</h2>
                            <p className="card-subtitle">Charonne</p>
                          </div>
                          <div className="card-like">
                            <i className="fa-sharp fa-regular fa-heart like-on"></i>
                          </div>
                        </div>
                      </NavLink>
                    </article>

                    <article className="card trois">
                      <NavLink to={'/ohmyfood/alafrancaise'}>
                        <img src={ alafrancaiseImg } alt=""/>
                        <div className="card-content">
                          <div className="card-txt">
                            <h2 className="card-title">À la française</h2>
                            <p className="card-subtitle">Cité Rouge</p>
                          </div>
                          <div className="card-like">
                            <i className="fa-sharp fa-regular fa-heart like-on"></i>
                          </div>
                        </div>
                        </NavLink>
                    </article>

                    <article className="card quatre">
                      <NavLink to={'/ohmyfood/delicedessens'}>
                        <img src={ delicedessensImg } alt=""/>
                        <div className="card-content">
                          <div className="card-txt">
                            <h2 className="card-title">Le délice des sens</h2>
                            <p className="card-subtitle">Folie-Méricourt</p>
                          </div>
                          <div className="card-like">
                            <i className="fa-sharp fa-regular fa-heart like-on"></i>
                          </div>
                        </div>
                      </NavLink>
                    </article>
                  </div>
                </section>
              </main>
        </div>
    </div>
  );
}
  
export default Ohmyfood;