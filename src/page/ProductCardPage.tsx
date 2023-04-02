import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { Product } from "../model/Product";
import { selectProductIds } from "../store/selectors/selector";
import { useActions } from "../store/useActions";
import { useTypedSelector } from "../store/useTypedSelector";

const AddProductPage = () => {
  const { addProduct } = useActions();
  let idNext = useTypedSelector(selectProductIds).length + 1;

  console.log(idNext);

  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [idAdded, setIdAdded] = useState<number>(idNext);
  const addedProduct = (product: Product) => {
    addProduct(product);
    addedProducts.push(product);
    setAddedProducts(addedProducts);
    setIdAdded(idNext + 1);
  };
  const product = {
    id: idAdded,
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
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add New Product you added product:{" "}
        {addedProducts.map((product) => product.title)}
      </Typography>

      <ProductForm
        product={product}
        onSubmitProduct={addedProduct}
        nameBtn={"ADD_PRODUCT"}
      />
    </Container>
  );
};

export default AddProductPage;
