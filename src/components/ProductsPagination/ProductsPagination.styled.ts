import { Box, Select, Pagination } from "@mui/material";
import styled from "styled-components";
import { blue, yellow } from "../../theme.";


export const StyledPaginationWrapper = styled(Box)`
  position:fixed;
  bottom:0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${blue};
  color: ${yellow};
  margin-bottom: 30px;
`; 

export const StyledSelectWrapper = styled(Select)`
  margin-left: 16px;
  background-color: ${yellow};
  border: none;
  color: ${blue} & .MuiSelect-select {
    padding-right: 24px;
  }

  & .MuiSelect-icon {
    right: 8px;
  }
`;

export const StyledPagination = styled(Pagination)`
  margon: 10px;
  & .Mui-selected {
    background-color: ${yellow};
    color: ${blue};
  }

  & .MuiPaginationItem-root {
    background-color: ${blue};
    color: ${yellow};
    border-radius: 50%;
    font-size: 12px;
    margin: 0 4px;
    min-width: 40px;
    height: 40px;
  }

  & .MuiPaginationItem-ellipsis {
    background-color: ${yellow};
    color: ${blue};
    font-size: 18px;
  }

  & .MuiPaginationItem-page:hover:not(.Mui-selected) {
    background-color: ${yellow};
    color: ${blue};
  }

  & .MuiPaginationItem-page.Mui-selected:hover {
    background-color: #1976d2;
  }
`;
