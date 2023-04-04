import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";
import { blueOpacity, yellowOpacity } from "../../../theme.";


export const StyledTableCell = styled(TableCell)`
  && {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const StyledTableRow = styled(TableRow)`
  background-color: ${yellowOpacity};
  && {
    &:nth-of-type(even) {
      background-color: ${blueOpacity};
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
