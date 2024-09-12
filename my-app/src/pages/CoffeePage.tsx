import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewCoffee from "../components/AddNewCoffee"
import CoffeeCard from "../components/CoffeeCard"

import "../App.css"

interface CoffeeListing {
  id?: number;
  description: string;
  image: string;
  price: number;
  in_stock_qty: number;
  product_type: string;
}
interface CoffeePageProps {
  coffeeListings: CoffeeListing[];
  onAddCoffee: (coffee: CoffeeListing) => void;
  onDeleteCoffee: (coffee: CoffeeListing) => void;
  onAddToCart: (coffee: CoffeeListing) => void;
}

export const CoffeePage: React.FC<CoffeePageProps> = ({
  coffeeListings,
  onAddCoffee,
  onDeleteCoffee,
  onAddToCart,
}) => {
  return (
    <div className="coffee-page">
      <div className="container">
        <AddNewCoffee onAddCoffee={onAddCoffee} />
        <Container fluid>
          <Row>
            {coffeeListings.map((coffeeListing, index) => (
              <Col key={index} md={3}>
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
