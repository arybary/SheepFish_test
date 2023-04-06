import React from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductsPagination from '../components/ProductsPagination';
import ProductsTable from '../components/ProductsTable';


const ProductsHomePage: React.FC = () => {
  return (
    <>
      <ProductSearch />
      <ProductsTable />
      <ProductsPagination />
    </>
  );
};

export default ProductsHomePage;
