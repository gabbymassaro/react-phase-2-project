import React from "react"
import { Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"

function CartCard({ cartItem: { description, image, price, in_stock_qty } }) {
  return (
    <Card className="h-100">
      <Button size="sm" variant="dark" className="delete-button">
        X
      </Button>{" "}
      <div className="image-container">
        <Card.Img
          variant="top"
          src={image}
          className="card-img-top fixed-img-size"
        />
      </div>
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CartCard
