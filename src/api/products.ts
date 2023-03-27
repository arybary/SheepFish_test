import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    searchProducts: builder.query<Product[], string>({
      query: (q) => `/products/search?q=${q}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => `/products/categories`,
    }),
    getCategoryProducts: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (data) => ({
        url: '/products/add',
        method: 'POST',
        body: data,
      }),
    }),
    updateProduct: builder.mutation<Product, Partial<Product> & { id: number }>({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSearchProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi