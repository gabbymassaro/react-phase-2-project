import React from "react"
import Button from "react-bootstrap/Button"

function AddCoffeeToCart({ coffeeListing, onAddToCart }) {
  const { id, ...newCartItem } = coffeeListing

  const handleAddToCart = () => {
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItem),
    }).then(() => {
      onAddToCart(newCartItem)
    })
  }
  return (
    <Button size="sm" variant="primary" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  )
}

export default AddCoffeeToCart
