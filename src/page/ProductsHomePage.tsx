import React from "react";
import ProductSearch from "../components/ProductSearch";
import ProductsTable from "../components/ProductsTable";

const ProductsHomePage: React.FC = () => (
  <>
    <ProductSearch />
    <ProductsTable />
  </>
);

export default ProductsHomePage;
