import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewCoffee from "./AddNewCoffee"
import CoffeeCard from "./CoffeeCard"

import "../App.css"

function CoffeeList({ coffeeListings, onAddCoffee }) {
  return (
    <>
      <div>
        <h2>Coffee</h2>
        <AddNewCoffee onAddCoffee={onAddCoffee} />
        <Container fluid>
          <Row>
            {coffeeListings.map((coffeeListing) => (
              <Col key={coffeeListing.id} md={3}>
                <CoffeeCard coffeeListing={coffeeListing} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CoffeeList
