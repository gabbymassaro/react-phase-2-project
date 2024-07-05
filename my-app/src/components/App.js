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

  function onDeleteCartItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  function updateStockQty(id, product_type, newStockQty) {
    if (product_type === "coffee") {
      setCoffeeListings((prevListing) =>
        prevListing.map((item) => {
          if (item.id === id) {
            return { ...item, in_stock_qty: newStockQty }
          } else {
            return item
          }
        })
      )
    } else {
      setEquipmentListings((prevListing) =>
        prevListing.map((item) => {
          if (item.id === id) {
            return { ...item, in_stock_qty: newStockQty }
          } else {
            return item
          }
        })
      )
    }
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
  }, [])

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
                onDeleteCartItem={onDeleteCartItem}
                emptyCart={onEmptyCart}
                updateQty={updateStockQty}
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
