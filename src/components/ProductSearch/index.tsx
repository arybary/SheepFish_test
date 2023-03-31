import * as React from "react";
import ProductSliderFilter from "./ProductsSliderFilter";
import ProductsFieldFilter from "./ProductsFieldFilter";

const ProductSearch: React.FC = () => (
  <>
    <ProductsFieldFilter field={"title"} />
    <ProductsFieldFilter field={"category"} />
    <ProductsFieldFilter field={"brand"} />
    <ProductSliderFilter name={"price"} startValue={[0, 1000]} />
    <ProductSliderFilter name={"rating"} startValue={[0, 5]} />
    <ProductSliderFilter name={"stock"} startValue={[0, 200]} />
    <ProductSliderFilter name={"discountPercentage"} startValue={[0, 100]} />
  </>
);

export default ProductSearch;
