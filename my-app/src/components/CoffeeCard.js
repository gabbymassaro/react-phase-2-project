import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "../App.css"

function CoffeeCard({ coffeeListing, onAddToCart, onDeleteCoffee }) {
  const { description, image, price, in_stock_qty } = coffeeListing
  const { id, ...newCartItem } = coffeeListing

  const handleDelete = () => {
    fetch(`http://localhost:3001/coffee/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(onDeleteCoffee)
  }

  const handleAddToCart = () => {
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItem),
    }).then(onAddToCart)
  }

  return (
    <Card className="h-100">
      <Button
        size="sm"
        variant="dark"
        className="delete-button"
        onClick={handleDelete}
      >
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
        <Card.Text>
          Price: ${price} | Qty: {in_stock_qty}
        </Card.Text>
        <Button size="sm" variant="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CoffeeCard
