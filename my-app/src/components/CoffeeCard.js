import React from "react"
import Card from "react-bootstrap/Card"
import DeleteCoffee from "./DeleteCoffee"
import AddCoffeeToCart from "./AddCoffeeToCart"
import "../App.css"

function CoffeeCard({ coffeeListing, onAddToCart, onDeleteCoffee }) {
  const { description, image, price, in_stock_qty } = coffeeListing

  return (
    <Card className="h-100">
      <DeleteCoffee
        onDeleteCoffee={onDeleteCoffee}
        coffeeListing={coffeeListing}
      />
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
        <AddCoffeeToCart
          coffeeListing={coffeeListing}
          onAddToCart={onAddToCart}
        />
      </Card.Body>
    </Card>
  )
}

export default CoffeeCard
