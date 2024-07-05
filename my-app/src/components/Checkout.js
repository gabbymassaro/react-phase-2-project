import React from "react"
import { Button } from "react-bootstrap"
import Row from "react-bootstrap/Row"

function Checkout({
  cartItems,
  updateQty,
  coffeeListings,
  equipmentListings,
  emptyCart,
}) {
  const allListings = [...coffeeListings, ...equipmentListings]

  const handleQuantity = () => {
    cartItems.forEach((cartItem) => {
      allListings.forEach((listing) => {
        if (listing.id === cartItem.product_id) {
          fetch(`http://localhost:3001/${listing.product_type}/${listing.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              in_stock_qty: listing.in_stock_qty - 1,
            }),
          }).then(() => {
            updateQty(
              listing.id,
              listing.product_type,
              listing.in_stock_qty - 1
            )
          })
        }
      })
    })
  }

  const handleEmptyCart = () => {
    cartItems.forEach((cartItem) => {
      fetch(`http://localhost:3001/cart/${cartItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
    emptyCart()
  }

  const handleOnClick = () => {
    handleQuantity()
    handleEmptyCart()
  }

  return (
    <Row>
      <Button onClick={handleOnClick}>Checkout</Button>
    </Row>
  )
}

export default Checkout
