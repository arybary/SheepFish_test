import { Pagination } from '@mui/material';
import styled from 'styled-components';
import { blue, yellow } from '../../../theme.';

export const StyledPagination = styled(Pagination)`
  bottom: 60px;
  margin: auto;
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
