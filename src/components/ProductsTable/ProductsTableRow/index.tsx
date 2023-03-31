import { TableRow, TableCell } from "@mui/material";
import { Product } from "../../../model/Product";
import ProductDelete from "../../ProductDelete";

import ProductEdit from "../../ProductEdit";

import TextRating from "../../ProductRating";

interface ProductTableRowProps extends Product {
  product: Product;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({
  id,
  title,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  brand,
  category,
  product,
}) => (
  <TableRow key={id}>
    <TableCell>{id}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{description}</TableCell>
    <TableCell>{price}</TableCell>
    <TableCell>{discountPercentage}</TableCell>
    <TableCell>
      <TextRating value={rating} />
    </TableCell>
    <TableCell>{stock}</TableCell>
    <TableCell>{brand}</TableCell>
    <TableCell>{category}</TableCell>
    <TableCell align="right" style={{ display: "flex" }}>
      <ProductDelete productId={id} />
      <ProductEdit product={product} />
    </TableCell>
  </TableRow>
 
);

export default ProductTableRow;
