import React, { useState } from "react"
import Toast from "react-bootstrap/Toast"
import Button from "react-bootstrap/Button"

interface CoffeeListing {
  id?: number;
  description: string;
  image: string;
  price: number;
  in_stock_qty: number;
  product_type: string;
}

interface AddCoffeeToCartProps {
  coffeeListing: CoffeeListing;
  onAddToCart: (coffee: CoffeeListing) => void;
}

export const AddCoffeeToCart: React.FC<AddCoffeeToCartProps> = ({ coffeeListing, onAddToCart }) => {
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
