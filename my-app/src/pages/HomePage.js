import React from "react"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"

function HomePage() {
  return (
    <div className="home-page">
      <Container className="header-container">
        <h1>
          <strong>Slightly Spooky Coffee Co. ☕️</strong>
        </h1>
        <br></br>
        <h3> Welcome to our little shop!</h3>
        <p className="welcome-paragraph">
          Slightly Spooky was founded in 2024 by Piotr and Gabby Romanowski.
          Together, our founders started an online business that brings all of
          your coffee needs in one place. Whether you want to try a new blend,
          or need more filters, we have you covered.
        </p>
        <br></br>
        <p>The only thing (slightly) spooky about us, is our deals 👻</p>
        <br></br>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/ghosts_having_coffee.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/haunted_coffee_store.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/skeletons_having_coffee.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/haunted_coffee_shop.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default HomePage