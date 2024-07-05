import React from "react"
import Button from "react-bootstrap/Button"
import "../App.css"

function DeleteButton({ lisitng, onDelete }) {
  const { id, product_type } = listing

  const handleDelete = () => {
    fetch(`http://localhost:3001/${product_type}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDelete(id)
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

export default DeleteButton
