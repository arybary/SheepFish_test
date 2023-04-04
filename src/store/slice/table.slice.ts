import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model/Product";

type SortOrder = "asc" | "desc";

type Sorting = {
  field: keyof Product;
  order: SortOrder;
};

type Pagination = {
  page: number;
  rowsPerPage: number;
};

type TableState = {
  sorting: Sorting;
  pagination: Pagination;
};

const initialState: TableState = {
  sorting: { field: "id", order: "asc" },
  pagination: {
    page: 1,
    rowsPerPage: 10,
  },
};

const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    removeSorting: (state) => {
      state.sorting = { field: "id", order: "asc" };
    },
    setPaginationPage: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload;
    },
    setPaginationRowsPerPage: (state, action: PayloadAction<number>) => {
      state.pagination.rowsPerPage = action.payload;
    },
  },
});

export default tableSlice;
