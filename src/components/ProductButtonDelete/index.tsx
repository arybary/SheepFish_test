import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useActions } from "../../store/useActions";
import { Delete as DeleteIcon } from "@mui/icons-material";


interface DeleteProps {
  productId: number;
}

const DeleteButton: React.FC<DeleteProps> = ({ productId }) => {
  const{removeProduct} = useActions();
  const handleDeleteClick = () => {
 removeProduct(productId);
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={handleDeleteClick} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;

