import axios from 'axios';
import { Product } from '../store/products.type';


const BASE_URL = 'https://dummyjson.com';

export const getProducts = () => axios.get<{products:Product[]} | any>(`${BASE_URL}/products`);
export const getProduct = (id: number) => axios.get<Product>(`${BASE_URL}/products/${id}`);
export const searchProducts = (query: string) => axios.get<{products:Product[]}>(`${BASE_URL}/products/search?q=${query}`);
export const getProductCategories = () => axios.get<string[]>(`${BASE_URL}/products/categories`);
export const getProductsByCategory = (category: string) => axios.get(`${BASE_URL}/products/category/${category}`);
export const addProduct = (product: Product) => axios.post<Product>(`${BASE_URL}/products/`, product);
export const updateProduct = (product: Product) => axios.put(`${BASE_URL}/products/${product.id}`, product);
export const deleteProduct = (id: number) => axios.delete(`${BASE_URL}/products/${id}`);
