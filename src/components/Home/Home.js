import logo from './assets/logo.png';
import './Home.css'

function Home() {
    return(
        <section id='home' className="section_inicio">
            <img className="logo" src={logo} alt="ital-rod hurlingham" />
        </section>
    )
}

export default Home