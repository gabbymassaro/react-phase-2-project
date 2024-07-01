import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import EquipmentCard from "../components/EquipmentCard"
import { Container } from "react-bootstrap"

function EquipmentPage({ equipmentListings, onDeleteEquipment }) {
  return (
    <>
      <div className="container">
        <h2>Equipment</h2>
        <Container fluid>
          <Row>
            {equipmentListings.map((equipmentListing) => (
              <Col key={equipmentListing.id} md={3}>
                <div className="row-container">
                  <EquipmentCard
                    equipmentListing={equipmentListing}
                    onDeleteEquipment={onDeleteEquipment}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default EquipmentPage
