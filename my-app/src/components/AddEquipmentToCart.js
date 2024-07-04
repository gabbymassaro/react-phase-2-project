import React from "react"
import Button from "react-bootstrap/Button"

function AddEquipmentToCart({ onAddToCart, equipmentListing }) {
  const { id, ...newCartItem } = equipmentListing

  const handleAddToCart = () => {
    fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newCartItem, product_id: id }),
    })
      .then((response) => response.json())
      .then((item) => {
        onAddToCart(item)
      })
  }

  return (
    <Button size="sm" variant="primary" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  )
}

export default AddEquipmentToCart
