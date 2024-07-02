import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Container } from "react-bootstrap"
import CartCard from "../components/CartCard"

function CartPage({ cartItems }) {
  return (
    <>
      <Container fluid className="cart-page">
        <Row>
          {cartItems.map((cartItem) => (
            <Col key={cartItem.id} md={3}>
              <div className="row-container">
                <CartCard cartItem={cartItem} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default CartPage
