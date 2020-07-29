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
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/about">About Me</Link>
          </div>
          <NavDropdown title="Treatments" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/deep-tissue-massage">Deep Tissue Massage</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/swedish">Swedish Massage</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/facial-massage">Ayurvedic Face Massage</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/foot-massage">Ayurvedic Foot Massage</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/indian-head-massage">Indian Head Massage</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/prices">Full Menu</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <div className="nav-link">
            <Link to="/contact">Contact</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Menubar;
