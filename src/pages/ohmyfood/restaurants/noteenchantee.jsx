import './restaurants.scss'
import { NavLink } from "react-router-dom";
import noteenchanteeImg from "../../../assets/ohmyfood/restaurants/noteenchantee.jpg"
import logo from '../../../assets/ohmyfood/ohmyfood.png'

function Noteenchantee() {

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
                <img src={ noteenchanteeImg } alt=""/>
            </div>
        </nav>

        <main>

            <div className="menu-title">
                <h1>La note enchantée</h1>
                <div className="menu-like">
                    <i className="fa-sharp fa-regular fa-heart like-on"></i>
                </div>
            </div>

            <section className="menu">

                <h2 className="menu-un">ENTRÉES</h2>
                <div className="entrees menu-un">
                    
                    <article className="card-plate">

                        <h3 className="card-plate-title">Ravioles de foie gras</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Accompagnées de leur crème à la truffe</p>
                            <div className="price">
                                <p>25€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Caviar osciètre</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Sur blini à la farine de clé noir</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Homard et espuna de langoustine</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Marinés aux zestes d'orange</p>
                            <div className="price">
                                <p>20€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>

                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Foie gras de canard cuit entier</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Confiture de figue et pain toasté</p>
                            <div className="price">
                                <p>35€</p>
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

                        <h3 className="card-plate-title">Noix de coquilles de Saint-Jacques</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Sur lit de purée de céleri-rave</p>
                            <div className="price">
                                <p>40€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Langoustine poêlée</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et purée de patate douce</p>
                            <div className="price">
                                <p>35€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Mijoté de queue de boeuf</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Et riz sauvage aux zestes de citron</p>
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

                        <h3 className="card-plate-title">Macaron noisette et chocolat</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Glace au caramel brun et sel de Guérande</p>
                            <div className="price">
                                <p>18€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Baba au rhum revisité</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Avec son coulis de citron</p>
                            <div className="price">
                                <p>22€</p>
                            </div>
                            <div className="check">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                        </div>

                    </article>
                    
                    <article className="card-plate">
                        
                        <h3 className="card-plate-title">Tarte au citron meringuée</h3>
                        <div className="card-plate-content">
                            <p className="card-plate-title">Déstructurée</p>
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
  
  export default Noteenchantee;