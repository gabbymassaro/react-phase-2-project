import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Piotr Coffee Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/coffee">Coffee</Nav.Link>
            <Nav.Link href="/equipment">Equipment</Nav.Link>
            <Nav.Link href="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
