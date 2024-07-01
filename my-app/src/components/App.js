import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import CoffeePage from "../pages/CoffeePage"
import EquipmentPage from "../pages/EquipmentPage"

import React, { useEffect, useState } from "react"

function Home() {
  return <h2>Welcome!</h2>
}

function Cart() {
  return <h2>Cart</h2>
}

function App() {
  const [coffeeListings, setCoffeeListings] = useState([])
  const [equipmentListings, setEquipmentListings] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((response) => response.json())
      .then((data) => setCoffeeListings(data))
  }, [fetchTrigger])

  useEffect(() => {
    fetch("http://localhost:3001/equipment")
      .then((response) => response.json())
      .then((data) => setEquipmentListings(data))
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
                onAddCoffee={toggleFetchTrigger}
              />
            }
          />
          <Route
            path="/equipment"
            element={<EquipmentPage equipmentListings={equipmentListings} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
