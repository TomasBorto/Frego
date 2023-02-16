import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Marcas from './components/Marcas/Marcas';
import Locales from './components/Locales/Locales';
import Contacto from './components/Contacto/Contacto';
import Navbar2 from './components/Navbar2/Navbar2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar2 />
      <Home />
      <Productos />
      <Marcas />
      <Locales />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
