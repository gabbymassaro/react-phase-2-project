import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewCoffee from "./AddNewCoffee"
import CoffeeCard from "./CoffeeCard"

import "../App.css"

function CoffeeList({ coffeeListings }) {
  return (
    <>
      <div>
        <body>
          <h2>Coffee</h2>
          <AddNewCoffee />
          <Container fluid>
            <Row>
              {coffeeListings.map((coffeeListing) => (
                <Col key={coffeeListing.id} md={3}>
                  <CoffeeCard coffeeListing={coffeeListing} />
                </Col>
              ))}
            </Row>
          </Container>
        </body>
      </div>
    </>
  )
}

export default CoffeeList
