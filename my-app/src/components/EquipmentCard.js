import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function EquipmentCard({
  equipmentListing: { id, description, image, price, in_stock_qty },
  onDeleteEquipment,
}) {
  const handleDelete = () => {
    fetch(`http://localhost:3001/equipment/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteEquipment(id))
  }
  return (
    <Card className="h-100">
      <Button size="sm" variant="outline-danger" onClick={handleDelete}>
        X
      </Button>{" "}
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
      </Card.Body>
    </Card>
  )
}

export default EquipmentCard
