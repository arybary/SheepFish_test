import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number()
    .typeError("Must be a number")
    .min(0, "Must be positive")
    .required("Required"),
  discountPercentage: Yup.number()
    .typeError("Must be a number")
    .min(0, "Must be positive")
    .max(100, "Must not surpass 100")
    .required("Required"),
  rating: Yup.number()
    .typeError("Must be a number")
    .min(0, "Must be positive")
    .max(5, "Must not surpass 5")
    .required("Required"),
  stock: Yup.number().integer().min(0).required("Required"),
  brand: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  thumbnail: Yup.string().url("Must be a valid URL").required("Required"),
  images: Yup.array().of(Yup.string().url("Must be a valid URL")),
});
