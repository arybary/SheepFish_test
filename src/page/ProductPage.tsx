import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../store/useTypedSelector";
import { selectProductById } from "../store/selectors/selector";
import { Product } from "../model/Product";
import ProductCard from "../components/ProductCard";


const ProductPage: React.FC = () => {
  const { id } = useParams();
  const product = useTypedSelector((state) =>
    selectProductById(state, id as string)
  );
  return <ProductCard {...(product as Product)} />;
};

export default ProductPage;
