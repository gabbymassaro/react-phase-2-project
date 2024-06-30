import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import CoffeeList from "./CoffeeList"

import React, { useEffect, useState } from "react"

function Home() {
  return <h2>Welcome!</h2>
}
function Equipment() {
  return <h2>Equipment</h2>
}

function Cart() {
  return <h2>Cart</h2>
}

function App() {
  const [coffeeListings, setCoffeeListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((response) => response.json())
      .then((data) => setCoffeeListings(data))
  }, [])

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/coffee"
            element={<CoffeeList coffeeListings={coffeeListings} />}
          />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
