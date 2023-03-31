import React from "react";
import ProductAdd from "../components/ProductAdd";
import ProductSearch from "../components/ProductSearch";
import ProductsTable from "../components/ProductsTable";

const ProductsHomePage: React.FC = () => (
  <>
    <ProductSearch />
    <ProductAdd />
    <ProductsTable />
  </>
);

export default ProductsHomePage;
