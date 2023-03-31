import { TableContainer, Table, TableHead, TableBody } from "@mui/material";
import { selectProductsForTable } from "../../store/selectors/products.selector";
import { useTypedSelector } from "../../store/useTypedSelector";
import HeaderTable from "./ProductsTableHeader";
import ProductTableRow from "./ProductsTableRow";

const ProductTable = () => {
  const products = useTypedSelector(selectProductsForTable);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeaderTable />
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <ProductTableRow
              key={product.id}
              {...product}
              product={product}
              {...product}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
