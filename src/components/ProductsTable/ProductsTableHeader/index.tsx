import { TableRow, TableCell, TableHead } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Product } from "../../../model/Product";
import ProductsSortingBtn from "./ProductsSortingBtn";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  "& button": {
    marginLeft: theme.spacing(1),
    border: "none",
    background: "none",
    color: "inherit",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

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
    <TableRow>
      {tableHeaderData.map(({ name, sortBy }) => (
        <StyledTableCell key={name + sortBy}>
          {name}
          {sortBy && <ProductsSortingBtn nameCell={sortBy} />}
        </StyledTableCell>
      ))}
    </TableRow>
  </StyledTableHead>
);

export default HeaderTable;
