import React, { useEffect } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductsPagination from '../components/ProductsPagination';
import ProductsTable from '../components/ProductsTable';
import { useActions } from '../store/useActions';

const ProductsHomePage: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <ProductSearch />
      <ProductsTable />
      <ProductsPagination />
    </>
  );
};

export default ProductsHomePage;
