import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Row from "react-bootstrap/Row"

function Checkout({ cartItems, updateQty }) {
  const [coffeeListings, setCoffeeListings] = useState([])
  const [equipmentListings, setEquipmentListings] = useState([])

  const allListings = [...coffeeListings, ...equipmentListings]

  const fetchCoffeeListings = () => {
    fetch("http://localhost:3001/coffee")
      .then((response) => response.json())
      .then((data) => setCoffeeListings(data))
  }

  const fetchEquipmentListings = () => {
    fetch("http://localhost:3001/equipment")
      .then((response) => response.json())
      .then((data) => setEquipmentListings(data))
  }

  useEffect(() => {
    fetchCoffeeListings()
    fetchEquipmentListings()
  }, [])

  const handleClick = () => {
    cartItems.forEach((cartItem) => {
      allListings.forEach((listing) => {
        if (listing.product_id === cartItem.product_id) {
          fetch(`http://localhost:3001/${listing.product_type}/${listing.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              in_stock_qty: listing.in_stock_qty - 1,
            }),
          }).then(updateQty)
        }
      })
    })
  }

  return (
    <Row>
      <Button onClick={handleClick}>Checkout</Button>
    </Row>
  )
}

export default Checkout