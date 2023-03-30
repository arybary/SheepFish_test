import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";

import productsReduser from "./redusers/products.slice";

const rootReduser = combineReducers({ products: productsReduser.reducer });

const logger: Middleware<{}, RootState> = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export type RootState = ReturnType<typeof rootReduser>;

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export default store;
