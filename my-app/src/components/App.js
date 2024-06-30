import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navigation from "./Navigation"
import CoffeeList from "./CoffeeList"

import React from "react"

function Home() {
  return <h2>Welcome!</h2>
}
function Equipment() {
  return <h2>Equipment</h2>
}

function Apparel() {
  return <h2>Apparel</h2>
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/coffee" element={<CoffeeList />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
