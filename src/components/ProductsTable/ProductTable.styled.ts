import styled from "styled-components";
import { blue, yellow } from "../../theme.";

export const TableWrapper = styled.div`
  height: 100hv;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
`;

export const StyledTableHead = styled.thead`
  background: ${yellow};
  color: ${blue};
`;

export const StyledTableCell = styled.th`
  padding: 0;
  align-items: center;
  font-size: 14px;
  line-height: 15px;
`;

export const StyledHeaderTitle = styled.div`
  text-align: center;
  margin-top: 7px;
  font-weight: 800;
`;

export const StyledTableBody = styled.tbody`
  overflow-y: auto;
  overflow-x: auto;
`;
