import { createSelector } from '@reduxjs/toolkit';
import { productsAdapter } from '../slice/products.slice';
import { RootState } from '../store';

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: RootState) => state.products);

export const selectFilter = (state: RootState) => state.filters.filters;

export const selectTableParam = (state: RootState) => state.table;
export const selectTableSorting = createSelector([selectTableParam], ({ sorting }) => sorting);

export const selectFiltredProducts = createSelector(
  [selectAllProducts, selectFilter],
  (products, filters) =>
    products.filter(product => {
      return filters.every(filter => {
        const { field, value } = filter;
        const fieldValue = product[field];
        if (typeof value === 'string') {
          return fieldValue.toString().toLowerCase().includes(value.toLowerCase());
        } else {
          const [minValue, maxValue] = value;
          return fieldValue >= minValue && fieldValue <= maxValue;
        }
      });
    }),
);
export const selectTablePagination = createSelector(
  [selectTableParam, selectFiltredProducts],
  ({ pagination }, products) => {
    const { page, rowsPerPage } = pagination;
    const countPages = Math.ceil(products.length / rowsPerPage);
    return { page, countPages, rowsPerPage };
  },
);

export const selectProductsForTable = createSelector(
  [selectFiltredProducts, selectTableParam],
  (filteredProducts, tableParam) => {
    const { sorting, pagination } = tableParam;

    const { field, order } = sorting;

    filteredProducts.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (aValue === bValue) {
        return 0;
      }
      return order === 'asc' ? (aValue < bValue ? -1 : 1) : aValue > bValue ? -1 : 1;
    });

    const { page, rowsPerPage } = pagination;

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return filteredProducts.slice(startIndex, endIndex);
  },
);
