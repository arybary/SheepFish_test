import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Product } from "../../model/Product";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { validationSchema } from "./validation.shema";
import ProductImagesField from "./ProductImagesField";

interface ProductFormProps {
  product: Product;
  nameBtn: string;
  onSubmitProduct: (values: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSubmitProduct,
  nameBtn,
}) => (
  <Formik
    initialValues={product}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      onSubmitProduct(values);
    }}
  >
    {({ values, errors, touched, handleSubmit, handleChange, handleReset }) => (
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              <img width={"50%"} src={values.thumbnail} alt={values.title} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              fullWidth
              name="title"
              label="Title"
              value={values.title}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              fullWidth
              name="description"
              label="Description"
              value={values.description}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={values.price}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="discountPercentage"
              label="Discount Percentage %"
              type="number"
              value={values.discountPercentage}
              error={
                touched.discountPercentage && Boolean(errors.discountPercentage)
              }
              helperText={
                touched.discountPercentage && errors.discountPercentage
              }
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="rating"
              label="Rating 0-5"
              type="number"
              value={values.rating}
              error={touched.rating && Boolean(errors.rating)}
              helperText={touched.rating && errors.rating}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="stock"
              label="Stock"
              type="number"
              value={values.stock}
              error={touched.stock && Boolean(errors.stock)}
              helperText={touched.stock && errors.stock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="brand"
              label="Brand"
              value={values.brand}
              error={touched.brand && Boolean(errors.brand)}
              helperText={touched.brand && errors.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="category"
              label="Category"
              value={values.category}
              error={touched.category && Boolean(errors.category)}
              helperText={touched.category && errors.category}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              as={TextField}
              fullWidth
              name="thumbnail"
              label="Thumbnail URL"
              value={values.thumbnail}
              error={touched.thumbnail && Boolean(errors.thumbnail)}
              helperText={touched.thumbnail && errors.thumbnail}
              onChange={handleChange}
            />
          </Grid>

          <ProductImagesField
            images={values.images}
            touched={touched.images}
            erros={errors.images}
            handleChange={handleChange}
          />

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {nameBtn}
            </Button>
            <Button type="reset" variant="contained">
              Reset
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default ProductForm;
