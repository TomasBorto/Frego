import TarjetaUbi from "../TarjetaUbi/TarjetaUbi";
import './Locales.css'

function Locales() {
    return(
        <section id="locales" className="sectionLocales">
            <h1 className='LocalesH1'>Nuestros Locales</h1>
            <div className="contenedor_produ1">
                <div className="container text-center">
                    <div className="row contenedor_produ1 justify-content-evenly">
                      <TarjetaUbi className='col mapa' Sucursal={'Sucursal Hurlingham'} Direccion={'Av Vergara'} Telefono={'11-4564-2453'} mapa={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8786804629235!2d-58.63703698481362!3d-34.60722918045869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb928a2bc7a1d%3A0x6c484e4eca1f9d15!2sITAL-ROD!5e0!3m2!1ses!2sar!4v1676154675241!5m2!1ses!2sar"} />
                      <TarjetaUbi className='col mapa' Sucursal={'Sucursal Hurlingham'} Direccion={'Av Vergara'} Telefono={'11-4564-2453'} mapa={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8786804629235!2d-58.63703698481362!3d-34.60722918045869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb928a2bc7a1d%3A0x6c484e4eca1f9d15!2sITAL-ROD!5e0!3m2!1ses!2sar!4v1676154675241!5m2!1ses!2sar"} />
                    </div>
                  </div>
            </div>
        </section>
    )
}

export default Locales