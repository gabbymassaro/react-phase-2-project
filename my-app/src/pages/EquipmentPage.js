import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import EquipmentCard from "../components/EquipmentCard"
import { Container } from "react-bootstrap"

function EquipmentPage({ equipmentListings }) {
  return (
    <>
      <div>
        <body>
          <h2>Equipment</h2>
          <Container fluid>
            <Row>
              {equipmentListings.map((equipmentListing) => (
                <Col key={equipmentListing.id} md={3}>
                  <EquipmentCard equipmentListing={equipmentListing} />
                </Col>
              ))}
            </Row>
          </Container>
        </body>
      </div>
    </>
  )
}

export default EquipmentPage
