import React from "react"
import Card from "react-bootstrap/Card"
import "../App.css"

function CoffeeCard({
  coffeeListing: {
    brand_name,
    category,
    description,
    image,
    price,
    in_stock_qty,
  },
}) {
  return (
    <Card className="h-100">
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

export default CoffeeCard
