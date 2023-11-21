import { Link } from "react-router-dom";
// import CartWidget from "../CartWidget/CartWidget";
import Cart from "../Cart/Cart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>CASTELLBLANCH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">TIENDA</Link>
            </Nav.Link>

            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/Ciclista">Ciclista</Link>
              </NavDropdown.Item>
             <NavDropdown.Item>
                <Link to="/category/Enteritos">Enteritos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Jeans">Jeans</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Calzas">Calzas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Camperas">Camperas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Remeras">Remeras</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
