import { Box, TableCell, TableHead } from "@mui/material/";
import styled from "styled-components";
import { yellow, blueOpacity, blue } from "../../../theme.";

export const StyledTableHead = styled(TableHead)`
  && {
    hight: 30px;
    top: 70px;
    hight: 30px;
    z-index: 2;
  }
`;

export const StyledTableCell = styled(TableCell)`
  && {
    background: ${yellow};
    padding: 0;
    text-align: center;
    border: 2px solid ${blue};
    align-items: center;
    font-weight:800;
    margin-top: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    .Mui-table-cell {
    }
  }
`;

export const StyledHeaderTitle = styled(Box)`
  background: ${yellow};
  margin: 0;
  font-weight: 500;
`;
