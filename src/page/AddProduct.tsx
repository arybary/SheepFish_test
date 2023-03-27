import { Container, Typography } from "@mui/material";
import React from "react";

import AddProductForm from "../components/ProductForm";


const AddProductPage = () => {
    const product = {
        id:0,
        title: "",       
        rating: 0,
        description: '',
        discountPercentage:0,
        price: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
      }
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add New Product
      </Typography>
      <AddProductForm product={product}/>
    </Container>
  );
};

export default AddProductPage;
