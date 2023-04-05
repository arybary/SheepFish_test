import React from 'react';
import { StyledPaginationWrapper } from './ProductsPagination.styled';
import PagesPagination from './PaginationPages';
import PageSelect from './SelectPages';

const ProductsPagination: React.FC = () => (
  <StyledPaginationWrapper>
    <PagesPagination />
    <PageSelect />
  </StyledPaginationWrapper>
);

export default ProductsPagination;
