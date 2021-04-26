import React from 'react'
import { Navbar,Nav,NavDropdown} from "react-bootstrap";
import "../css/style.css"

const Navigation = () => {
  return(
    
        <Navbar collapseOnSelect expand="lg"  variant="dark" className="naav bg-light" fixed="top"  >
  <Navbar.Brand href="#home"><img className="logo" src="/images/logo-default-group-en.svg" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features" className="about">About us</Nav.Link>
      <Nav.Link href="#pricing">Career</Nav.Link>
      <NavDropdown title="Départements" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Marketion &</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    
   )

 }

export default Navigation;