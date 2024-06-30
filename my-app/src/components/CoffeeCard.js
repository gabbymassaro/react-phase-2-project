import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

function CoffeeCard({
  listing: { brand_name, category, description, image, price, in_stock_qty },
}) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Card.Text>
            Price: ${price} | Qty: {in_stock_qty}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CoffeeCard
