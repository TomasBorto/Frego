import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';
import './Navbar2.css'

function Navbar2() {
    return(
        <header className='navbar'>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo_nav"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                  <Nav>
                    <Nav.Link className='nav_link' href="#home">Home</Nav.Link>
                    <Nav.Link className='nav_link' href="#productos"> Productos</Nav.Link>
                    <Nav.Link className='nav_link' href="#marcas"> Marcas</Nav.Link>
                    <Nav.Link className='nav_link' href="#locales"> Locales</Nav.Link>
                    <Nav.Link className='nav_link' href="#contacto"> Contactanos</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    )
}

export default Navbar2