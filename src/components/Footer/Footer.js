import "./Footer.scss"
import { NavLink } from "react-router-dom";

function Footer() {

    return (
      <div>
        <div className="body">
          <div className="footer">
            <NavLink to='https://github.com/BoissonMathis?tab=repositories' target="_blank">
              <i className="fa-brands fa-github" id="footerGithub"></i>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;