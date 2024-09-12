import React, { useState } from "react"
import { useForm, useFormState } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const AddNewCoffee = ({ onAddCoffee }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      brand_name: "",
      product_type: "coffee",
      description: "",
      image: "",
      price: "",
      in_stock_qty: "",
    },
  })

  const { errors } = useFormState({ control })
  const [toggleForm, setToggleForm] = useState(false)
  const toggleFormTrigger = () => setToggleForm(!toggleForm)

  const onSubmit = (data) => {
    fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((newItem) => {
        onAddCoffee(newItem)
      })
      .then(() => {
        toggleFormTrigger()
      })
  }

  return (
    <>
      <div className="container">
        <Button
          variant="secondary"
          onClick={toggleFormTrigger}
          className="add-new-form-button"
        >
          Add New Coffee Listing
        </Button>
      </div>
      {toggleForm && (
        <div className="container" id="listing-form">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label htmlFor="brand_name"></Form.Label>
            <Form.Control
              type="text"
              id="brand_name"
              placeholder="Brand"
              {...register("brand_name", {
                required: {
                  value: true,
                  message: "Brand Name is required",
                },
              })}
            />
            <p className="error">{errors.brand_name?.message}</p>

            <Form.Label htmlFor="description"></Form.Label>
            <Form.Control
              type="text"
              id="description"
              placeholder="Description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description Name is required",
                },
              })}
            />
            <p className="error">{errors.description?.message}</p>

            <Form.Label htmlFor="image"></Form.Label>
            <Form.Control
              type="text"
              id="image"
              placeholder="Image url"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <p className="error">{errors.image?.message}</p>

            <Form.Label htmlFor="price"></Form.Label>
            <Form.Control
              type="number"
              id="price"
              placeholder="19.99"
              {...register("price", {
                required: {
                  valueAsNumber: true,
                  message: "Price is required",
                },
              })}
            />
            <p className="error">{errors.price?.message}</p>

            <Form.Label htmlFor="in_stock_qty"></Form.Label>
            <Form.Control
              type="number"
              id="in_stock_qty"
              placeholder="5"
              {...register("in_stock_qty", {
                required: {
                  valueAsNumber: true,
                  message: "Quantity is required",
                },
              })}
            />
            <p className="error">{errors.in_stock_qty?.message}</p>

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

export default AddNewCoffee
