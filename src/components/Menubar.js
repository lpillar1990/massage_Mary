import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo_new.png";
import { Link } from "gatsby";

function Menubar() {
  return (
    <Navbar bg="light sticky-top" expand="lg">
      <Navbar.Brand href="/">
        <Link to="/" className="logo">
          <img src={logo} width="130px" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
          {/* <Nav.Link href="/services">Services</Nav.Link> */}
          <NavDropdown title="Treatments" id="basic-nav-dropdown">
            <NavDropdown.Item href="/deep-tissue-massage">
              Deep Tissue Massage
            </NavDropdown.Item>
            <NavDropdown.Item href="/swedish">Swedish Massage</NavDropdown.Item>
            <NavDropdown.Item href="/facial-massage">
              Ayurvedic Face Massage
            </NavDropdown.Item>
            <NavDropdown.Item href="/foot-massage">
              Ayurvedic Foot Massage
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="/indian-head-massage">
              Indian Head Massage
            </NavDropdown.Item> */}
            <NavDropdown.Item href="/prices">Full Menu</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Menubar;
