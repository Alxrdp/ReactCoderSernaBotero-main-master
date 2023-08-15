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




/*import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/indumentaria">
            Indumentaria
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/cursos-de-react" className="nav-link">
            No existe
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/calzado">
            Zapatillas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">
            Detalle
          </Link>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
}
        /*<nav>
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
            
        </nav>*/
    


//export default NavBar*/

