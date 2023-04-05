import { Product } from "../../../model/Product";
import ProductDelete from "../../ProductDelete";
import ProductEdit from "../../ProductEdit";
import { StyledTableCell} from "./ProductsTableBodyRow.styled";
import { Link } from "react-router-dom";
import { Avatar, Rating } from "@mui/material";

interface ProductStyledTableRowProps extends Product {
  product: Product;
}

const ProductStyledTableRow: React.FC<ProductStyledTableRowProps> = ({
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
  thumbnail,
}) => (
  <tr>
    <StyledTableCell>
      {id}
      <Avatar alt="img-product" variant="rounded" src={thumbnail} />
    </StyledTableCell>
    <StyledTableCell>
      <Link to={`/${id}`}>{title}</Link>
    </StyledTableCell>
    <StyledTableCell>{description}</StyledTableCell>
    <StyledTableCell>{price}</StyledTableCell>
    <StyledTableCell>{discountPercentage}</StyledTableCell>
    <StyledTableCell>
      <Rating value={rating} readOnly precision={0.1} />
    </StyledTableCell>
    <StyledTableCell>{stock}</StyledTableCell>
    <StyledTableCell>{brand}</StyledTableCell>
    <StyledTableCell>{category}</StyledTableCell>
    <StyledTableCell align="right">
      <ProductDelete productId={id} />
      <ProductEdit product={product} />
    </StyledTableCell>
  </tr>
);

export default ProductStyledTableRow;
