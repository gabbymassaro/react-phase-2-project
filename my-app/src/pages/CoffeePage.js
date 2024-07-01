import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewCoffee from "../components/AddNewCoffee"
import CoffeeCard from "../components/CoffeeCard"

import "../App.css"

function CoffeePage({ coffeeListings, onAddCoffee, onDeleteCoffee }) {
  return (
    <>
      <div>
        <h2>Coffee</h2>
        <AddNewCoffee onAddCoffee={onAddCoffee} />
        <Container fluid>
          <Row>
            {coffeeListings.map((coffeeListing) => (
              <Col key={coffeeListing.id} md={3}>
                <CoffeeCard
                  coffeeListing={coffeeListing}
                  onDeleteCoffee={onDeleteCoffee}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CoffeePage
