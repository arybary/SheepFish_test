import * as React from "react";
import { Edit as EditIcon } from "@mui/icons-material";
import { useActions } from "../../store/useActions";
import { Product } from "../../model/Product";
import ProductDialog from "../ProductDialog";

interface EditProps {
  product: Product;
}

const ProductEdit: React.FC<EditProps> = ({ product }) => {
  const { updateProduct } = useActions();

  const nameDialog = "EDIT";

  const editProduct = (product: Product) => {
    updateProduct({
      id: product.id,
      changes: product,
    });
  };
  return (
    <ProductDialog
      onSubmitProduct={editProduct}
      name={nameDialog}
      icon={<EditIcon />}
      product={product}
    />
  );
};

export default ProductEdit;
