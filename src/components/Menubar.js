import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/images/logo_new.png";
import { Link } from "gatsby";

function Menubar() {
  return (
    <Navbar bg="light sticky-top" expand="lg">
      <Navbar.Brand href="/">
        <Link to="/" className="logo">
          <img src={logo} width="90px" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
          {/* <Nav.Link href="/services">Services</Nav.Link> */}
          <NavDropdown title="Treatments" id="basic-nav-dropdown">
            <NavDropdown.Item href="/prices">Menu</NavDropdown.Item>
            <NavDropdown.Item href="/deeptissuemassage">Deep Tissue Massage</NavDropdown.Item>
            <NavDropdown.Item href="/swedish">Swedish Massage</NavDropdown.Item>
            <NavDropdown.Item href="/facialmassage">Ayurvedic Face Massage</NavDropdown.Item>
            <NavDropdown.Item href="/footmassage">Ayurvedic Foot Massage</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Menubar;
