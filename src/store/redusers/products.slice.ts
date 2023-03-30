import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/products.actions";
import { Product } from "../products.type";

export const productsAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addProduct: productsAdapter.addOne,
    updateProduct: productsAdapter.updateOne,
    removeProduct: productsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, productsAdapter.setAll);
  },
});

export default productsSlice;
