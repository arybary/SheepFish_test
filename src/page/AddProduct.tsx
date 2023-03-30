import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { Product } from "../store/products.type";
import { selectProductIds } from "../store/selectors/products.selector";
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
    setIdAdded(idAdded+1)
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
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add New Product
        you added product: {addedProducts.map((product) => product.title)}
      </Typography>
   
      <ProductForm product={product} onSubmit={addedProduct} />
    </Container>
  );
};

export default AddProductPage;
