import {
  TableContainer,
  Table, 
  TableBody,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { selectProductsForTable } from "../../store/selectors/selector";
import { useActions } from "../../store/useActions";
import { useTypedSelector } from "../../store/useTypedSelector";
import HeaderTable from "./ProductsTableHeader";
import TablePagination from "./ProductsTablePagination";
import ProductTableRow from "./ProductsTableRow";

const ProductTable: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useTypedSelector(selectProductsForTable);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table stickyHeader>
          <HeaderTable />

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
        <TablePagination />
      </TableContainer>
 
    </Paper>
  );
};

export default ProductTable;
