import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Row from "react-bootstrap/Row"

function Checkout({ cartItems, updateQty }) {
  const [currentCoffeeListings, setCurrentCoffeeListings] = useState([])
  const [currentEquipmentListings, setCurrentEquipmentListings] = useState([])

  const fetchCoffeeListings = () => {
    fetch("http://localhost:3001/coffee")
      .then((response) => response.json())
      .then((data) => setCurrentCoffeeListings(data))
  }

  const fetchEquipmentListings = () => {
    fetch("http://localhost:3001/equipment")
      .then((response) => response.json())
      .then((data) => setCurrentEquipmentListings(data))
  }

  useEffect(() => {
    fetchCoffeeListings()
    fetchEquipmentListings()
  }, [])

  const handleClick = () => {
    cartItems.forEach((cartItem) => {
      currentCoffeeListings.forEach((coffeeListing) => {
        if (coffeeListing.product_id === cartItem.product_id) {
          // console.log("This is the coffee item listing: ", coffeeListing)

          fetch(`http://localhost:3001/coffee/${coffeeListing.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              in_stock_qty: coffeeListing.in_stock_qty - 1,
            }),
          }).then(updateQty)
        }
      })

      currentEquipmentListings.forEach((equipmentListing) => {
        if (equipmentListing.product_id === cartItem.product_id) {
          // console.log("This is the equipment item listing: ", equipmentListing)

          fetch(`http://localhost:3001/equipment/${equipmentListing.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              in_stock_qty: equipmentListing.in_stock_qty - 1,
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
