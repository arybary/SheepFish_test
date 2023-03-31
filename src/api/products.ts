import axios from "axios";
import { Product } from "../model/Product";

const BASE_URL = "https://dummyjson.com";

const limit = 100;

export const getProducts = () =>
  axios.get<{ products: Product[] }>(`${BASE_URL}/products`, {
    params: { limit },
  });
