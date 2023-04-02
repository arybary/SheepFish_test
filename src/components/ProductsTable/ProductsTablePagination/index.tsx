import React from "react";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { useTypedSelector } from "../../../store/useTypedSelector";
import { selectTablePagination } from "../../../store/selectors/selector";
import { useActions } from "../../../store/useActions";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & .MuiPaginationItem-root {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    border-radius: 50%;
    transition: background-color 0.3s;

    &:hover {
      background-color: #eee;
    }

    &.Mui-selected {
      background-color: #2196f3;
      color: #fff;

      &:hover {
        background-color: #2196f3;
      }
    }
  }

  & .MuiPagination-ul {
    justify-content: center;
  }
`;

const TablePagination = () => {
  const { page, rowsPerPage } = useTypedSelector(selectTablePagination);
  const { setPagination } = useActions();

  const handlePageChange = (e: any, newPage: number) => {
    console.log(e,newPage);
    setPagination({ page: newPage, rowsPerPage: 10 });
  };

  return (
    <StyledPagination
      count={rowsPerPage}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default TablePagination;
