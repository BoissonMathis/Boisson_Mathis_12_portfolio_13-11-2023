import './restaurants.scss'
import { NavLink } from "react-router-dom";
import delicedessensImg from "../../../assets/ohmyfood/restaurants/delicedessens.jpg"
import logo from '../../../assets/ohmyfood/ohmyfood.png'

function Delicedessens() {

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
                <img src={ delicedessensImg } alt=""/>
            </div>
        </nav>

        <main>

            <div className="menu-title">
                <h1>Le délice des sens</h1>
                <div className="menu-like">
                    <i className="fa-sharp fa-regular fa-heart like-on"></i>
                </div>
            </div>

            <section className="menu">
                
                <h2 className="menu-un menu-un">ENTRÉES</h2>
                <div className="entrees menu-un">
                    
                    <article className="card-plate">

                        <h3 className="card-plate-title">Tartare de thon</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Assaisonné au yuzu</p>
                            <div className="price">
                                <p>25€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Bouchée de homard croustillant</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et sa farandole de petits légumes</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Velouté de cèpes</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Aux truffes</p>
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

                        <h3 className="card-plate-title">Filet rôti aux herbes de Provence</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et sa crème de truffe</p>
                            <div className="price">
                                <p>40€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Langouste rôtie</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et ses légumes de saison</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Côte de boeuf Angus</h3>
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

                        <h3 className="card-plate-title">Farandole de desserts</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Du chef</p>
                            <div className="price">
                                <p>18€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Crème brûlée</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Revisitée</p>
                            <div className="price">
                                <p>22€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Tiramisu</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">À la noisette</p>
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
  
  export default Delicedessens;