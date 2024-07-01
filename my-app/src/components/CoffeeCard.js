import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "../App.css"

function CoffeeCard({ coffeeListing, onAddToCart, onDeleteCoffee }) {
  const { id, description, image, price, in_stock_qty } = coffeeListing

  const handleDelete = () => {
    fetch(`http://localhost:3001/coffee/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteCoffee(id))
  }

  const handleAddToCart = () => {
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeListing),
    }).then(onAddToCart(coffeeListing))
  }

  return (
    <Card className="h-100">
      <Button size="sm" variant="outline-danger" onClick={handleDelete}>
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
