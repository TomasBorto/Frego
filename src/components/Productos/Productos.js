import 'bootstrap/dist/css/bootstrap.min.css';
import Ruleman from './assets/Ruleman.png';
import Tarjeta from '../Tarjeta/Tarjeta';
import './Productos.css';

function Productos() {
    return(
        <section id='productos' className="section_productos">
            <h1 className='ProductosH1'>Nuestros Productos</h1>
            <div className="contenedor_produ1">
                <div className="container text-center">
                    <div className="row contenedor_produ1 justify-content-evenly">
                      <Tarjeta className='col' Titulo={"Rulemanes"} Texto={"Trabajamos con rulemanes con las mejores marcas del mercado desde 2005"} img={Ruleman} />
                      <Tarjeta className='col' Titulo={"Rulemanes"} Texto={"Trabajamos con rulemanes con las mejores marcas del mercado desde 2005"} img={Ruleman} />
                      <Tarjeta className='col' Titulo={"Rulemanes"} Texto={"Trabajamos con rulemanes con las mejores marcas del mercado desde 2005"} img={Ruleman} />
                      <Tarjeta className='col' Titulo={"Rulemanes"} Texto={"Trabajamos con rulemanes con las mejores marcas del mercado desde 2005"} img={Ruleman} />
                    </div>
                  </div>
            </div>
        </section>
    )
}

export default Productos