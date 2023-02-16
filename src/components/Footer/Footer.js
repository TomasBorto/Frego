import './Footer.css'
import logo from './assets/logo.png'

function Footer() {
    return(
        <div className="footer">
          <img src={logo} alt="" className="logo__footer" />
          <div className="social__icons-container">
            <a href=""><i className="fab fa-facebook"></i></a>
            <a href=""><i className="fab fa-whatsapp"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
          </div>
          <ul className="footer__menu-container">
            <li className="footer__item">
              <a href="#home">Home</a>
            </li>
            <li className="footer__item">
              <a href="#productos">Productos</a>
            </li>
            <li className="footer__item">
              <a href="#marcas">Marcas</a>
            </li>
            <li className="footer__item">
              <a href="#locales">Locales</a>
            </li>
            <li className="footer__item">
              <a href="#contacto">Contactanos</a>
            </li>
          </ul>
          <p className="coded-by">Diseñado y programado por <a href="https://tbdevelopmentgroup.com/pages__esp/inicio.html" target="_blank">TBDEVELOPMENT</a></p>
          <span className="copyright">&copy;2023, Ital-Rod. Todos los derechos reservados</span>
        </div>
    )
}

export default Footer