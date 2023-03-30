import { productsAdapter } from "../redusers/products.slice";
import { RootState } from "../store";

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
    selectIds: selectProductIds,
  } = productsAdapter.getSelectors((state: RootState) => state.products);