import 'bootstrap/dist/css/bootstrap.min.css';
import './Marcas.css';
import mitsubishi from './assets/mitsubishi.png';

function Marcas() {
    return(
        <section id='marcas' className="sectionMarcas">
            <h1 className='MarcasH1'>Nuestras Marcas</h1>
            <div className="contenedor_produ1">
                <div className="container text-center">
                    <div className="row contenedor_produ1 justify-content-evenly">
                      <img className='col imgMarca' src={mitsubishi} />
                      <img className='col imgMarca' src={mitsubishi} />
                      <img className='col imgMarca' src={mitsubishi} />
                      <img className='col imgMarca' src={mitsubishi} />
                      <img className='col imgMarca' src={mitsubishi} />
                    </div>
                  </div>
            </div>
        </section>
    )
}

export default Marcas