import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";
import { blue, blueOpacity, yellowOpacity } from "../../../theme.";

export const StyledTableCell = styled(TableCell)`
  && {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: 2px solid ${blue};

  }
`;

export const StyledTableRow = styled(TableRow)`
  background-color: ${yellowOpacity};

  && {
    &:nth-of-type(even) {
      background-color: ${blueOpacity};
    
    padding: 0;
    text-align: center;
   
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
