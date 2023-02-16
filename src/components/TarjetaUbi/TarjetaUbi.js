import'./TarjetaUbi.css';

const TarjetaUbi = ({ Sucursal, Telefono, Direccion, mapa}) => {
    return(
        <div className='ConetenedorContacto'>
            <h3>{Sucursal}</h3>
            <div>
                <h4>{Telefono}</h4>
            </div>
            <div>
                <h5>{Direccion}</h5>
            </div>
            <iframe className='maps' src={mapa}></iframe>
        </div>
    )
}

export default TarjetaUbi