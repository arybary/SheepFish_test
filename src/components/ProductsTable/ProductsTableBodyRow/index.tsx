import { Product } from "../../../model/Product";
import ProductDelete from "../../ProductDelete";
import ProductEdit from "../../ProductEdit";
import TextRating from "../../ProductRating";
import { StyledTableCell, StyledTableRow } from "./ProductsTableBodyRow.styled";
import { Link } from "react-router-dom";

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
}) => (
  <StyledTableRow key={id}>
    <StyledTableCell>{id}</StyledTableCell>
    <StyledTableCell>
      <Link to={`/${id}`}>{title}</Link>
    </StyledTableCell>
    <StyledTableCell>{description}</StyledTableCell>
    <StyledTableCell>{price}</StyledTableCell>
    <StyledTableCell>{discountPercentage}</StyledTableCell>
    <StyledTableCell>
      <TextRating value={rating} />
    </StyledTableCell>
    <StyledTableCell>{stock}</StyledTableCell>
    <StyledTableCell>{brand}</StyledTableCell>
    <StyledTableCell>{category}</StyledTableCell>
    <StyledTableCell align="right" style={{ display: "flex" }}>
      <ProductDelete productId={id} />
      <ProductEdit product={product} />
    </StyledTableCell>
  </StyledTableRow>
);

export default ProductStyledTableRow;
