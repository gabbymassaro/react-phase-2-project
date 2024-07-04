import React from "react"
import Button from "react-bootstrap/Button"
import "../App.css"

function DeleteCoffee({ coffeeListing, onDeleteCoffee }) {
  const { id } = coffeeListing

  const handleDelete = () => {
    fetch(`http://localhost:3001/coffee/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteCoffee(id)
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

export default DeleteCoffee
