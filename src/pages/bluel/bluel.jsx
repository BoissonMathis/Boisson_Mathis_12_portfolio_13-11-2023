import { NavLink } from "react-router-dom";
import { home } from "../../routes/routes.js"

function Bluel() {

    return (
      <div>
        <div className="body">
            <p>Sophie Bluel</p>
          <div className="">
            <NavLink to={home} className="">
                <button>Accueil</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default Bluel;