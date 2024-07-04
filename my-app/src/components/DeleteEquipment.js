import React from "react"
import Button from "react-bootstrap/Button"
import "../App.css"

function DeleteEquipment({ onDeleteEquipment, equipmentListing }) {
  const { id } = equipmentListing

  const handleDelete = () => {
    fetch(`http://localhost:3001/equipment/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteEquipment(id)
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

export default DeleteEquipment
