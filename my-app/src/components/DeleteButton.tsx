import React from "react"
import Button from "react-bootstrap/Button"
import "../App.css"

interface Listing {
  id?: number;
  description: string;
  product_type: string;
  image: string;
  price: number;
  in_stock_qty: number;
}

interface DeleteButtonProps {
  listing: Listing;
  onDelete: (listing: Listing) => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ listing, onDelete }) => {
  const { id, product_type } = listing

  const handleDelete = () => {
    fetch(`http://localhost:3001/${product_type}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDelete(listing)
      })
  }

  return (
    <Button
      size="sm"
      variant="dark"
      className="delete-button"
      onClick={handleDelete}
    >
      X
    </Button>
  )
}

export default DeleteButton
