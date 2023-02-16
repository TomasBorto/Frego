import './Contacto.css';

function Contacto() {
    return(
        <section id='contacto' className="section__contact">
            <h1 className='ContactoH1'>contactanos</h1>
            <div className='ContactoContainer'>
            <form>
                <div className="input-group">
                    <input name="nombre" className="input__contact" type="text" id="name" required />
                    <label className="label__contact" htmlFor="name"><i className="fa-solid fa-user"></i> Nombre Completo</label>
                </div>
                
                {/* <input type="text" name="_honey" style="display: none;" />

                
                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_next" value="http://127.0.0.1:5500/pages/exito.html" /> */}

                <div className="input-group">
                    <input name="telefono" className="input__contact" type="text" id="numero" required />
                    <label className="label__contact" htmlFor="numero"><i className="fa-solid fa-phone-square-alt"></i> Su Numero de Telefono</label>
                </div>
                <div className="input-group">
                    <input name="email" className="input__contact" type="email" id="email" required />
                    <label className="label__contact" htmlFor="email"><i className="fa-solid fa-envelope"></i> Su Email</label>
                </div>
                <div className="input-group">
                    <textarea name="consulta" id="mensaje" rows="8" required></textarea>
                    <label className="label__contact" htmlFor="mensaje"><i className="fa-solid fa-comments"></i> Su Mensaje</label>
                </div>
                <button className="button__form" type="submit"><i className="fa-solid fa-paper-plane"></i> ENVIAR</button>
            </form>
            </div>
        </section>
    )
}

export default Contacto