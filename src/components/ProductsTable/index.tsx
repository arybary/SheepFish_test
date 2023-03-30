import { TableContainer, Table, TableHead, TableBody } from "@mui/material";
import { SetStateAction, useState } from "react";
import { selectAllProducts } from "../../store/selectors/products.selector";
import { useTypedSelector } from "../../store/useTypedSelector";
import HeaderTable from "./ProductsTableHeader";
import ProductTableRow from "./ProductsTableRow";

const ProductTable = () => {
  const products = useTypedSelector(selectAllProducts);
  console.log(products);
  const [searchText, setSearchText] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");

  const handleSearch = (text: SetStateAction<string>) => {
    setSearchText(text);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeaderTable onSearch={handleSearch} />
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <ProductTableRow key={product.id} {...product} product={product} {...product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
