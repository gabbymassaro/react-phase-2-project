import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

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
    <Col>
      <Card>
        <Col xs={6} md={4}>
          <Image variant="top" src={image} thumbnail />
          <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text>
              Price: ${price} | Qty: {in_stock_qty}
            </Card.Text>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  )
}

export default CoffeeCard
