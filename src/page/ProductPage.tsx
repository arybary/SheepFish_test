import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../store/useTypedSelector";
import { selectProductById } from "../store/selectors/selector";
import ProductCard from "../components/ProductCard";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = useTypedSelector((state) =>
    selectProductById(state, id as string)
  );
  if (!product) {
    return <Navigate to="/no-product" />;
  }
  return<> <ProductCard product={product} />
  </>;
};

export default ProductPage;
