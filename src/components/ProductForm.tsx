import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, TextField } from "@mui/material";
import { Product } from "../store/products.type";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"), 
  rating: Yup.number().required("Required").positive().max(5),
  description: Yup.string().required("Required"),
  price: Yup.number().positive().required("Required"),
  stock: Yup.number().integer().min(0).required("Required"),
  brand: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  thumbnail: Yup.string().url().required("Required"),
});
interface PropsProductForm {
  product: Product
}

const AddProductForm: React.FC<PropsProductForm> = ({ product }) => {


  const formik = useFormik({
    initialValues: product,
    validationSchema: validationSchema,
    onSubmit: (values:Product) => {
     
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      
     
      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        fullWidth
        value={formik.values.rating}
        onChange={formik.handleChange}
        error={formik.touched.rating && Boolean(formik.errors.rating)}
        helperText={formik.touched.rating && formik.errors.rating}
      />

      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        fullWidth
        label="Price"
        name="price"
        type="number"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />
      <TextField
        fullWidth
        label="Stock"
        name="stock"
        type="number"
        value={formik.values.stock}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.stock && Boolean(formik.errors.stock)}
        helperText={formik.touched.stock && formik.errors.stock}
      />
      <TextField
        fullWidth
        label="Brand"
        name="brand"
        value={formik.values.brand}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
      />
      <TextField
        fullWidth
        label="Category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
      />
      <TextField
        fullWidth
        label="Thumbnail URL"
        name="thumbnail"
        value={formik.values.thumbnail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.thumbnail && Boolean(formik.errors.thumbnail)}
        helperText={formik.touched.thumbnail && formik.errors.thumbnail}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default AddProductForm;
