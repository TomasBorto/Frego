import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import './Navbar.css';

function Navbar() {

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div>
                    <a href="../index.html">
                        <img src={logo} className="logo_nav"  alt="logo" />
                    </a>
                </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item nav-item1">
                    <a className="nav-link"  href="../index.html">Inicio</a>
                  </li>
                  <li className="nav-item nav-item2">
                    <a className="nav-link" href="../pages/service.html">Productos</a>
                  </li>
                  <li className="nav-item nav-item3">
                    <a className="nav-link" href="../pages/products.html">Marcas</a>
                  </li>
                  <li className="nav-item nav-item4">
                    <a className="nav-link" aria-current="page" href="../pages/about.html">Locales</a>
                  </li>
                  <li className="nav-item nav-item5">
                    <a className="nav-link" href="../pages/contact.html">Contactanos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Navbar