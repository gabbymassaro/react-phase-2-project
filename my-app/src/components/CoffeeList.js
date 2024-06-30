import React from "react"
import Row from "react-bootstrap/Row"
import CoffeeCard from "./CoffeeCard"

function CoffeeList({ coffeeListings }) {
  return (
    <>
      <h1>Coffee</h1>
      <Row xs={1} md={2} className="g-4">
        {coffeeListings.map((coffeeListing) => (
          <CoffeeCard key={coffeeListing.id} coffeeListing={coffeeListing} />
        ))}
      </Row>
    </>
  )
}

export default CoffeeList
