import { Box, TableCell, TableHead } from "@mui/material/";
import styled from "styled-components";
import { yellow, blueOpacity, blue } from "../../../theme.";


export const StyledTableHead = styled(TableHead)`
   && {
    position: sticky;
    top: 70px;
    hight: 30px;
    top: 70px;
    hight: 30px;
    z-index: 2;
    background-color: ${yellow};
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    padding: 0;
    text-align: start;
    border: ${blueOpacity};
    align-items: center;
    color: ${blue};
    font-weight: 600;
    color: ${blue};
    margin-top: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    .Mui-table-cell {
    }
  }
`;

export const StyledHeaderTitle = styled(Box)`
  margin: 0;
  font-weight: 500;
`;
