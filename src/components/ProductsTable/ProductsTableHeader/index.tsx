import { TableRow, TableCell, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";

interface TableHeaderProp {
  onSearch: (text: any) => void;
}

const HeaderTable: React.FC<TableHeaderProp> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

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
      <TableCell align="right">
        <TextField
          label="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
      </TableCell>
    </TableRow>
  );
};
export default HeaderTable;
