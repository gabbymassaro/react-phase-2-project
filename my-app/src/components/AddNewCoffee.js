import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const initialValue = {
  brand_name: "",
  category: "coffee",
  description: "",
  image: "",
  price: 0,
  in_stock_qty: 0,
}

function AddNewCoffee({ onAddCoffee }) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const resetForm = () => setFormData(initialValue)

  const sanitizeFormData = () => ({
    ...formData,
    price: Number(formData.price),
    in_stock_qty: Number(formData.in_stock_qty),
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizeFormData()),
    })
      .then(onAddCoffee)
      .then(resetForm)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Brand</Form.Label>
      <Form.Control
        type="text"
        name="brand_name"
        value={formData.brand_name}
        placeholder="Enter Brand"
        onChange={handleChange}
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        name="description"
        value={formData.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <Form.Label>Image URL</Form.Label>
      <Form.Control
        type="text"
        name="image"
        value={formData.image}
        placeholder="image url"
        onChange={handleChange}
      />
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="text"
        name="price"
        value={formData.price}
        placeholder="$0.00"
        onChange={handleChange}
      />
      <Form.Label>Quantity</Form.Label>
      <Form.Control
        type="text"
        name="in_stock_qty"
        value={formData.in_stock_qty}
        placeholder="0"
        onChange={handleChange}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddNewCoffee
