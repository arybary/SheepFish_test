import * as React from "react";
import { Button, Tooltip } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductForm from "../ProductForm";
import { useActions } from "../../store/useActions";
import { Product } from "../../store/products.type";

interface EditProps {
  product: Product;
}

const EditButton: React.FC<EditProps> = ({ product }) => {
  const { updateProduct } = useActions();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const editProduct = (product: Product) => {
    console.log(product);
    updateProduct({
      id: product.id,
      changes: product,
    });
    handleClose();
  };
  return (
    <div>
      <Tooltip title="edit product">
        <Button variant="outlined" onClick={handleClickOpen}>
          <EditIcon />
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <ProductForm product={product} onSubmit={editProduct} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditButton;
