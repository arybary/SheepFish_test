import { Select, Pagination } from "@mui/material";

import styled from "styled-components";
import { blue, yellow } from "../../theme.";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  background-color: ${blue};
  color: ${yellow};
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