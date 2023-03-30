import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../products.type";
import productsSlice from "../redusers/products.slice";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get<{ products: Product[] }>(PRODUCTS_API_URL);
  return response.data.products;
});

export const { addProduct, updateProduct, removeProduct } =
  productsSlice.actions;
