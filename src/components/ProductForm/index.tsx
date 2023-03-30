import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Product } from "../../store/products.type";
import { TextField, Button } from "@mui/material";
import { validationSchema } from "./validation.shema";

interface ProductFormProps {
  product: Product ;
  onSubmit: (values: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit }) => {

  return (
    product && (
      <Formik
        initialValues={product}
        onSubmit={(values) => {console.log(values);onSubmit(values)}}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form style={{ maxWidth: "880px", margin: " 0 auto" }}>
            <Field
              as={TextField}
              label="Title"
              name="title"
              helperText={touched.title && errors.title}
              error={Boolean(touched.title && errors.title)}
            />
            <br />
            <Field
              as={TextField}
              multiline
              label="Description"
              name="description"
              helperText={touched.description && errors.description}
              error={Boolean(touched.description && errors.description)}
            />
            <br />
            <Field
              as={TextField}
              type="number"
              label="Price"
              name="price"
              helperText={touched.price && errors.price}
              error={Boolean(touched.price && errors.price)}
            />
            <br />
            <Field
              as={TextField}
              type="number"
              label="Discount Percentage"
              name="discountPercentage"
              helperText={
                touched.discountPercentage && errors.discountPercentage
              }
              error={Boolean(
                touched.discountPercentage && errors.discountPercentage
              )}
            />
            <br />
            <Field
              as={TextField}
              type="number"
              label="Rating"
              name="rating"
              helperText={touched.rating && errors.rating}
              error={Boolean(touched.rating && errors.rating)}
            />
            <br />
            <Field
              as={TextField}
              type="number"
              label="Stock"
              name="stock"
              helperText={touched.stock && errors.stock}
              error={Boolean(touched.stock && errors.stock)}
            />
            <br />
            <Field
              as={TextField}
              label="Brand"
              name="brand"
              helperText={touched.brand && errors.brand}
              error={Boolean(touched.brand && errors.brand)}
            />
            <br />
            <Field
              as={TextField}
              label="Category"
              name="category"
              helperText={touched.category && errors.category}
              error={Boolean(touched.category && errors.category)}
            />
            <br />
            <Field
              as={TextField}
              label="Thumbnail URL"
              name="thumbnail"
              helperText={touched.thumbnail && errors.thumbnail}
              error={Boolean(touched.thumbnail && errors.thumbnail)}
            />
            <br />
            <Field
              as={TextField}
              multiline
              minRows={3}
              label="Images URLs (Optional)"
              name="images"
              helperText={touched.images && errors.images}
              error={Boolean(touched.images && errors.images)}
            />
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  );
};

export default ProductForm;
