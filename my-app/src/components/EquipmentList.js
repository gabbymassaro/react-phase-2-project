import React from "react"
import Row from "react-bootstrap/Row"
import EquipmentCard from "./EquipmentCard"

function EquipmentList({ equipmentListings }) {
  return (
    <>
      <h1>Equipment</h1>
      <Row xs={1} md={2} className="g-4">
        {equipmentListings.map((equipmentListing) => (
          <EquipmentCard
            key={equipmentListing.id}
            equipmentListing={equipmentListing}
          />
        ))}
      </Row>
    </>
  )
}

export default EquipmentList
