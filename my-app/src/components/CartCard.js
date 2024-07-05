import React from "react"
import Card from "react-bootstrap/Card"
import RemoveFromCart from "./RemoveFromCart"

function CartCard({ cartItem, onDeleteCartItem }) {
  const { description, image, price } = cartItem
  return (
    <Card className="h-100">
      <RemoveFromCart cartItem={cartItem} onDeleteCartItem={onDeleteCartItem} />
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
