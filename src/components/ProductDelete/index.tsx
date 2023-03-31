import * as React from "react";
import { BottomNavigationAction, Tooltip } from "@mui/material";
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
  const name='DELETE'
  return (
    <Tooltip title={name}>
        <BottomNavigationAction
          color="primary"
          label={name}
          showLabel={true}
          onClick={handleDeleteClick}
          icon={<DeleteIcon/>}
        />
      </Tooltip>
  );
};

export default DeleteButton;

