import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import Form from "react-bootstrap/Form"

function AddNewCoffee() {
  return (
    <Container fluid>
      <Form>
        <Form.Group className="mb-3" controlId="formGridBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="brand" placeholder="Enter Brand" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="image url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="$0.00" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridQty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control placeholder="0" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default AddNewCoffee
