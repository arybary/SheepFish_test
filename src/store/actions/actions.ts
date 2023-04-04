import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products";
import productsSlice from "../slice/products.slice";
import filtersSlice from "../slice/filter.slice";
import tableSlice from "../slice/table.slice";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await getProducts();
  return response.data.products;
});

export const { addProduct, updateProduct, removeProduct } =
  productsSlice.actions;
export const { setFilter } = filtersSlice.actions;

export const {
  setSorting,

  removeSorting,
  setPaginationPage,
  setPaginationRowsPerPage,
} = tableSlice.actions;
