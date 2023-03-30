import { TableRow, TableCell } from "@mui/material";
import { Product } from "../../../store/products.type";
import DeleteButton from "../../ProductButtonDelete";
import EditButton from "../../ProductButtonEdit";
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
    <TableCell align="right">
      <EditButton product={product} />
      <DeleteButton productId={id} />
    </TableCell>
  </TableRow>
);

export default ProductTableRow;
