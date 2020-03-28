import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

 function Menubar() {
    return (
<Navbar bg="light sticky-top" expand="lg">
  <Navbar.Brand href="/">Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/prices">Prices</Nav.Link>
      {/* <NavDropdown title="Full Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="/menu">Relaxing Swedish Massage</NavDropdown.Item>
        <NavDropdown.Item href="/menu">Deep Tissue Massage</NavDropdown.Item>
        <NavDropdown.Item href="/menu">Facial Massage Ayurvedic</NavDropdown.Item>
        <NavDropdown.Item href="/menu">Foot Massage Ayurvedic</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Menubar