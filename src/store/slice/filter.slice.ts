import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model/Product";

export type FilterValue = [number, number];

export type Filter = {
  field: keyof Product;
  value: string | FilterValue;
};

type FilterState = {
  filters: Filter[];
};

const initialState: FilterState = {
  filters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      const { field, value } = action.payload;
      const index = state.filters.findIndex((filter) => filter.field === field);
      if (index === -1) {
        state.filters.push({ field, value });
      } else {
        state.filters[index].value = value;
      }
    },
  },
});

export default filtersSlice;
