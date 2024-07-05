import React from "react"
import Card from "react-bootstrap/Card"
import DeleteButton from "./DeleteButton"
import AddEquipmentToCart from "./AddEquipmentToCart"
import "../App.css"

function EquipmentCard({ equipmentListing, onDeleteEquipment, onAddToCart }) {
  const { description, image, price, in_stock_qty } = equipmentListing

  return (
    <Card className="card-container">
      <DeleteButton onDelete={onDeleteEquipment} listing={equipmentListing} />
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
        <AddEquipmentToCart
          onAddToCart={onAddToCart}
          equipmentListing={equipmentListing}
        />
      </Card.Body>
    </Card>
  )
}

export default EquipmentCard
