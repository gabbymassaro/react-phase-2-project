import React, { useEffect, useState } from "react"

function Coffee() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return <div>sup</div>
}

export default Coffee
