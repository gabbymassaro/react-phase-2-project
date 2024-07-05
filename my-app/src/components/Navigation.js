import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons"

function Navigation({ cartItems }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="circle-logo"
            src="/coffee-logo.jpg"
            width="100"
            height="100"
            alt="Coffee Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="./coffee">
              Coffee
            </Nav.Link>
            <Nav.Link as={Link} to="./equipment">
              Equipment
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="./cart">
              {cartItems.length === 0 ? (
                <FontAwesomeIcon icon={faCartShopping} />
              ) : (
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ color: "#e36154" }}
                />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
