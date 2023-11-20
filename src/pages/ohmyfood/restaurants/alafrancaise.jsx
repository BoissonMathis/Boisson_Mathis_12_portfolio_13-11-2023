import './restaurants.scss'
import { NavLink } from "react-router-dom";
import alafrancaiseImg from "../../../assets/ohmyfood/restaurants/francaise.jpg"
import logo from '../../../assets/ohmyfood/ohmyfood.png'

function Alafrancaise() {

    return (
      <div>
        <body>
    <div className="main-container">

        <div className="loader">
            <p className="oh">oh</p>
            <p className="my 2">my</p>
            <p className="food 3">food</p>
        </div>

        <header className='restaurantHeader'>

            <div className="retour">
                <NavLink to={'/ohmyfood'}>
                    <i className="fa-solid fa-arrow-left"></i>
                </NavLink>
            </div>

            <div className="header_logo">
                <img src={ logo } alt="Logo ohmyfood"/>
            </div>

        </header>

        <nav>
            <div className="menu-overview">
                <img src={ alafrancaiseImg } alt=""/>
            </div>
        </nav>

        <main>

            <div className="menu-title">
                <h1>À la française</h1>
                <div className="menu-like">
                    <i className="fa-sharp fa-regular fa-heart like-on"></i>
                </div>
            </div>

            <section className="menu">
                
                <h2 className="menu-un">ENTRÉES</h2>
                <div className="entrees menu-un">
                    
                    <article className="card-plate">

                        <h3 className="card-plate-title">Tartare de poulpe acidulé</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Au zestes d'orange</p>
                            <div className="price">
                                <p>25€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Velouté de légumes d'antan</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Carotte, panais, topinambour</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Soupe à l'oignon</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Revisitée</p>
                            <div className="price">
                                <p>20€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                </div>


                <h2 className="menu-deux">PLATS</h2>
                <div className="plats menu-deux">

                    <article className="card-plate">

                        <h3 className="card-plate-title">Coquilles Saint-Jacques</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Accompagnées d'une purée de panais</p>
                            <div className="price">
                                <p>40€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Magret de canard</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et parmentier de pommes de terre</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Pigeonneau d'Ille-et-Vilaine</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et sa purée de panais</p>
                            <div className="price">
                                <p>44€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                </div>


                <h2 className="menu-trois">DESSERTS</h2>
                <div className="desserts menu-trois">
                    
                    <article className="card-plate">

                        <h3 className="card-plate-title">Pétales de violettes glacés</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et purée de noisettes</p>
                            <div className="price">
                                <p>18€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Fondant au chocolat</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Revisité</p>
                            <div className="price">
                                <p>22€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Millefeuille croustillant</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Myrtilles et pâte d'amende</p>
                            <div className="price">
                                <p>23€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                </div>

                <div className="commandeButton">
                    <a className="button" href='/#' >Commander</a>
                </div>

            </section>

        </main>
    </div>
</body>
      </div>
    );
  }
  
  export default Alafrancaise;