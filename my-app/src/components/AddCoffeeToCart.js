import React, { useState } from "react"
import Toast from "react-bootstrap/Toast"
import Button from "react-bootstrap/Button"

function AddCoffeeToCart({ coffeeListing, onAddToCart }) {
  const { id, ...newCartItem } = coffeeListing
  const [show, setShow] = useState(false)

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

  const handleToast = () => {
    setShow(true)
  }

  const handleOnClick = () => {
    handleAddToCart()
    handleToast()
  }

  return (
    <>
      <Button size="sm" variant="primary" onClick={handleOnClick}>
        Add To Cart
      </Button>
      <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
        <Toast.Body>Added to cart!</Toast.Body>
      </Toast>
    </>
  )
}

export default AddCoffeeToCart
