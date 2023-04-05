import { TableRow } from "@mui/material";
import { Product } from "../../../model/Product";
import ProductsSortingBtn from "./ProductsSortingBtn";
import {
  StyledTableHead,
  StyledTableCell,
  StyledHeaderTitle,

} from "./ProductTableHeader.Styled";

interface TableHeaderCell {
  name: string;
  sortBy: keyof Product | false;
}

const tableHeaderData: TableHeaderCell[] = [
  { name: "#", sortBy: "id" },
  { name: "TITLE", sortBy: "title" },
  { name: "DESCRIPTION", sortBy: "description" },
  { name: "PRICE $", sortBy: "price" },
  { name: "DISCOUNT %", sortBy: "discountPercentage" },
  { name: "Rating", sortBy: "rating" },
  { name: "STOCK", sortBy: "stock" },
  { name: "BRAND", sortBy: "brand" },
  { name: "CATEGORY", sortBy: "category" },
  { name: "ACTIONS", sortBy: false },
];

const HeaderTable: React.FC = () => (
  <StyledTableHead>
    <TableRow >
      {tableHeaderData.map(({ name, sortBy }) => (
        <StyledTableCell key={name + sortBy}>
          <StyledHeaderTitle>
            {name}
            {sortBy && <ProductsSortingBtn nameCell={sortBy} />}
          </StyledHeaderTitle>
        </StyledTableCell>
      ))}
    </TableRow>
  </StyledTableHead>
);

export default HeaderTable;
