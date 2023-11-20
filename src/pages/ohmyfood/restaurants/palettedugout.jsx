import './restaurants.scss'
import { NavLink } from "react-router-dom";
import palettedugoutImg from "../../../assets/ohmyfood/restaurants/palettedugout.jpg"
import logo from '../../../assets/ohmyfood/ohmyfood.png'

function Palettedugout() {

    return (
      <div>
        <div>
    <div className="main-container">

        <div className="loader">
            <p className="oh">oh</p>
            <p className="my 2">my</p>
            <p className="food 3">food</p>
        </div>

        <header className='restaurantHeader'>

            <div className="retour">
                <NavLink to={'/ohmyfood'} aria-label="go back to ohmyfood page">
                    <i className="fa-solid fa-arrow-left"></i>
                </NavLink>
            </div>

            <div className="header_logo">
                <img src={ logo } alt="Logo ohmyfood"/>
            </div>

        </header>

        <nav>
            <div className="menu-overview">
                <img src={ palettedugoutImg } alt=""/>
            </div>
        </nav>

        <main>
                
            <div className="menu-title">
                <h1>La palette du goût</h1>
                <div className="menu-like">
                    <i className="fa-sharp fa-regular fa-heart like-on"></i>
                </div>
            </div>

            <section className="menu">

                <h2 className="menu-un">ENTRÉES</h2>
                <div className="entrees menu-un">

                    <article className="card-plate">

                        <h3 className="card-plate-title">Fricassée d'escargots</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Au piment d'Espelette</p>
                            <div className="price">
                                <p>25€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Foie gras de canard mi-cuit</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et ses copeaux de truffe noire</p>
                            <div className="price">
                                <p>35€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Oeuf au plat</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Assaisonné à la truffe sur lit de caviar</p>
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

                        <h3 className="card-plate-title">Filet de boeuf aux herbes</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Accompagné de sa ribambelle de légume</p>
                            <div className="price">
                                <p>40€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Parmentier de queue de boeuf</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">À la truffe noire sur sa purée de panais</p>
                            <div className="price">
                                <p>35€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Filet de turbot</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Aux agrumes</p>
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

                        <h3 className="card-plate-title">Paris-Brest</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Revisité</p>
                            <div className="price">
                                <p>18€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Macaron au chocolat d'exception</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et glace à la vanille de Madagascar</p>
                            <div className="price">
                                <p>22€</p>
                            </div>

                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Mousse au chocolat</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Au piment d'Espelette et à la truffe noire</p>
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
        </div>
    </div>
    );
}
  
  export default Palettedugout;