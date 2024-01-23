import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Beautiful</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="#home">Home</Link>
            <Link href="#link">Actor</Link>
            <NavDropdown title="Gadget" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Actor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dvd Season</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Another link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
