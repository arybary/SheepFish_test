import React from "react";
import ProductSearch from "../components/ProductSearch";
import { StyledBox } from "../components/ProductSearch/ProductSearch.styled";
import ProductsPagination from "../components/ProductsPagination";
import ProductsTable from "../components/ProductsTable";

const ProductsHomePage: React.FC = () => (
  <><StyledBox></StyledBox>
    <ProductSearch />
   
    <ProductsTable />
    <ProductsPagination/>

  </>
);

export default ProductsHomePage;
