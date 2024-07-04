import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import HomePage from "../pages/HomePage"
import CoffeePage from "../pages/CoffeePage"
import EquipmentPage from "../pages/EquipmentPage"
import CartPage from "../pages/CartPage"

import React, { useEffect, useState } from "react"

function App() {
  const [coffeeListings, setCoffeeListings] = useState([])
  const [equipmentListings, setEquipmentListings] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  function onAddCoffee(item) {
    setCoffeeListings([...coffeeListings, item])
  }

  function onDeleteCoffee(id) {
    setCoffeeListings(coffeeListings.filter((item) => item.id !== id))
  }

  function onAddEquipment(item) {
    setEquipmentListings([...equipmentListings, item])
  }

  function onDeleteEquipment(id) {
    setEquipmentListings(equipmentListings.filter((item) => item.id !== id))
  }

  function onAddCoffeeToCart(item) {
    setCartItems([...cartItems, item])
  }

  function onAddEquipmentToCart(item) {
    setCartItems([...cartItems, item])
  }

  function onEmptyCart() {
    setCartItems([])
  }

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((response) => response.json())
      .then((data) => setCoffeeListings(data))
    fetch("http://localhost:3001/equipment")
      .then((response) => response.json())
      .then((data) => setEquipmentListings(data))
    fetch("http://localhost:3001/cart")
      .then((response) => response.json())
      .then((data) => setCartItems(data))
  }, [fetchTrigger])

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/coffee"
            element={
              <CoffeePage
                coffeeListings={coffeeListings}
                onAddCoffee={onAddCoffee}
                onDeleteCoffee={onDeleteCoffee}
                onAddToCart={onAddCoffeeToCart}
              />
            }
          />
          <Route
            path="/equipment"
            element={
              <EquipmentPage
                equipmentListings={equipmentListings}
                onAddEquipment={onAddEquipment}
                onDeleteEquipment={onDeleteEquipment}
                onAddToCart={onAddEquipmentToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                coffeeListings={coffeeListings}
                equipmentListings={equipmentListings}
                emptyCart={onEmptyCart}
                updateQty={toggleFetchTrigger}
              />
            }
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
