import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import CoffeeCard from "./CoffeeCard"

function CoffeeList() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((response) => response.json())
      .then((data) => setListings(data))
  }, [])

  return (
    <>
      <h1>Coffee</h1>
      <Row xs={1} md={2} className="g-4">
        {listings.map((listing) => (
          <CoffeeCard key={listing.id} listing={listing} />
        ))}
      </Row>
    </>
  )
}

export default CoffeeList
