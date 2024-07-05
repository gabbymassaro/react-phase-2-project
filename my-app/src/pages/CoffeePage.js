import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewCoffee from "../components/AddNewCoffee"
import CoffeeCard from "../components/CoffeeCard"

import "../App.css"

function CoffeePage({
  coffeeListings,
  onAddCoffee,
  onDeleteCoffee,
  onAddToCart,
}) {
  return (
    <div className="coffee-page">
      <div className="container">
        <AddNewCoffee onAddCoffee={onAddCoffee} />
        <Container fluid>
          <Row>
            {coffeeListings.map((coffeeListing) => (
              <Col key={coffeeListing.id} md={3}>
                <div className="row-container">
                  <CoffeeCard
                    coffeeListing={coffeeListing}
                    onDeleteCoffee={onDeleteCoffee}
                    onAddToCart={onAddToCart}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default CoffeePage
