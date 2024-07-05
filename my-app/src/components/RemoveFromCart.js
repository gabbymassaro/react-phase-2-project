import React from "react"
import { Button } from "react-bootstrap"

function RemoveFromCart({ cartItem, onDeleteCartItem }) {
  const { id } = cartItem

  const handleDelete = () => {
    fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteCartItem(id)
      })
  }
  return (
    <Button
      size="sm"
      variant="dark"
      className="delete-button"
      onClick={handleDelete}
    >
      X
    </Button>
  )
}

export default RemoveFromCart
