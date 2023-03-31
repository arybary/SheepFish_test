import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import productsReduser from "./slice/products.slice";
import filtersSlice from "./slice/filter.slice";
import tableSlice from "./slice/table.slice";

const rootReduser = combineReducers({
  products: productsReduser.reducer,
  filters: filtersSlice.reducer,
  table: tableSlice.reducer,
});

export type RootState = ReturnType<typeof rootReduser>;

const logger: Middleware<{}, RootState> = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export default store;
