import { Box, Table, TableBody, Paper } from "@mui/material";
import { useEffect } from "react";
import { selectProductsForTable } from "../../store/selectors/selector";
import { useActions } from "../../store/useActions";
import { useTypedSelector } from "../../store/useTypedSelector";
import HeaderTable from "./ProductsTableHeader";

import ProductTableRow from "./ProductsTableBodyRow";

const ProductTable: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useTypedSelector(selectProductsForTable);

  return (
    <Table component={Box}>
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
  );
};

export default ProductTable;
