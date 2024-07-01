import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import CoffeePage from "../pages/CoffeePage"
import EquipmentPage from "../pages/EquipmentPage"
import CartPage from "../pages/CartPage"

import React, { useEffect, useState } from "react"

function Home() {
  return <h2>Welcome!</h2>
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
                onDeleteCoffee={toggleFetchTrigger}
              />
            }
          />
          <Route
            path="/equipment"
            element={
              <EquipmentPage
                equipmentListings={equipmentListings}
                onDeleteEquipment={toggleFetchTrigger}
              />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
