import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const initialValue = {
  brand_name: "",
  product_id: "",
  category: "equipment",
  description: "",
  image: "",
  price: "",
  in_stock_qty: "",
}

function AddNewEquipment({ onAddEquipment }) {
  const [formData, setFormData] = useState(initialValue)
  const [toggleForm, setToggleForm] = useState(false)

  const toggleFormTrigger = () => setToggleForm(!toggleForm)

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
    fetch("http://localhost:3001/equipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizeFormData()),
    })
      .then(onAddEquipment)
      .then(resetForm)
      .then(toggleFormTrigger)
  }

  return (
    <>
      <div className="container">
        <Button variant="dark" onClick={toggleFormTrigger}>
          Add New Equipment Listing
        </Button>
      </div>
      {toggleForm && (
        <div className="container" id="listing-form">
          <Form onSubmit={handleSubmit}>
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="brand_name"
              value={formData.brand_name}
              placeholder="Brand Name"
              onChange={handleChange}
            />
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              placeholder="Description"
              onChange={handleChange}
            />
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              placeholder="'https://image.url'"
              onChange={handleChange}
            />
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={formData.price}
              placeholder="Price $0.00"
              onChange={handleChange}
            />
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="in_stock_qty"
              value={formData.in_stock_qty}
              placeholder="Quantity 0"
              onChange={handleChange}
            />
            <br></br>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  )
}

export default AddNewEquipment
