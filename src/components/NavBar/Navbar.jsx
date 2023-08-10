import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
         <div className="navbar navbar-expand-lg bg-body-tertiary" id="barraFondo">
         <h3 className="tituloNavPatriora">Cerveza Patriota</h3>
          <div className="container-fluid">            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">                
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cervezas
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Anaray</a></li>
                    <li><a className="dropdown-item" href="/">Benkos</a></li>
                    <li><a className="dropdown-item" href="/">Rooke</a></li>
                    <li><a className="dropdown-item" href="/">Valerosa</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Contacto</a>
                </li>
                
              </ul>
            </div>
          </div>
          <CartWidget />
        </div>  
            
        </nav>
    )
}

export default NavBar