import React from "react";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { useTypedSelector } from "../../store/useTypedSelector";
import { selectTablePagination } from "../../store/selectors/selector";
import { useActions } from "../../store/useActions";
import { StyledPagination, StyledPaginationWrapper } from "./ProductsPagination.styled";

const ProductsPagination = () => {
  const { page, countPages } = useTypedSelector(selectTablePagination);
  const { setPaginationPage } = useActions();

  const handlePageChange = (e: any, newPage: number) => {
    setPaginationPage(newPage);
  };

  return (
    <StyledPaginationWrapper>
    <StyledPagination
      count={countPages}
      page={page}
      onChange={handlePageChange}
    />
    </StyledPaginationWrapper>
  );
};

export default ProductsPagination;
