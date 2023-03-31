import * as React from "react";
import {
  AppBar,
  BottomNavigationAction,
  IconButton,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  DialogContent,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProductForm from "../ProductForm";
import { Product } from "../../model/Product";
import { TransitionProps } from "@mui/material/transitions";

interface DialogProps {
  product: Product;
  name: string;
  icon: any;
  onSubmitProduct: (product: Product) => void;
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

const ProductDialog: React.FC<DialogProps> = ({
  product,
  name,
  onSubmitProduct,
  icon,
}) => {
  const { id, title } = product;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitProductAndCloseDialog = (productSubmit: Product) => {
    onSubmitProduct(productSubmit);
    handleClose();
  };

  return (
    <div>
      <Tooltip title={name}>
        <BottomNavigationAction
          color="primary"
          label={name}
          showLabel={true}
          onClick={handleClickOpen}
          icon={icon}
        />
      </Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {name} #{id}:
              {title}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <ProductForm
            product={product}
            onSubmitProduct={onSubmitProductAndCloseDialog}
            nameBtn={name}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
