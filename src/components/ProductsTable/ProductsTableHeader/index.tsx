import { TableRow, TableCell } from "@mui/material";

const HeaderTable: React.FC = () => {
  return (
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Title</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Discount %</TableCell>
      <TableCell>Rating</TableCell>
      <TableCell>Stock</TableCell>
      <TableCell>Brand</TableCell>
      <TableCell>Category</TableCell>
      <TableCell align="right">action</TableCell>
    </TableRow>
  );
};
export default HeaderTable;
