import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AddNewEquipment from "../components/AddNewEquipment"
import EquipmentCard from "../components/EquipmentCard"
import { Container } from "react-bootstrap"

function EquipmentPage({
  equipmentListings,
  onDeleteEquipment,
  onAddEquipment,
  onAddToCart,
}) {
  return (
    <>
      <div className="equipment-page">
        <div className="container">
          <AddNewEquipment onAddEquipment={onAddEquipment} />
          <Container fluid>
            <Row>
              {equipmentListings.map((equipmentListing) => (
                <Col key={equipmentListing.id} md={3}>
                  <div className="row-container">
                    <EquipmentCard
                      equipmentListing={equipmentListing}
                      onDeleteEquipment={onDeleteEquipment}
                      onAddToCart={onAddToCart}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default EquipmentPage
