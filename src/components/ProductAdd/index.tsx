import * as React from "react";
import { useActions } from "../../store/useActions";
import { Add as AddIcon } from "@mui/icons-material";
import ProductDialog from "../ProductDialog";
import { useTypedSelector } from "../../store/useTypedSelector";
import { selectProductIds } from "../../store/selectors/selector";

const ProductAdd: React.FC = () => {
  const { addProduct } = useActions();

  const productId = useTypedSelector(selectProductIds).length + 1;

  const nameDialog = "ADD_PRODUCT";

  const product = {
    id: productId,
    title: "",
    rating: 0,
    description: "",
    discountPercentage: 0,
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  };
  return (
    <ProductDialog
      onSubmitProduct={addProduct}
      name={nameDialog}
      icon={<AddIcon />}
      product={product}
    />
  );
};

export default ProductAdd;
