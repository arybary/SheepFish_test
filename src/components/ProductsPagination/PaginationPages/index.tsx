import React from 'react';
import { selectTablePagination } from '../../../store/selectors/selector';
import { useActions } from '../../../store/useActions';
import { useTypedSelector } from '../../../store/useTypedSelector';
import { StyledPagination } from './PaginationPages.styled';

const PagesPagination: React.FC = () => {
  const { page, countPages } = useTypedSelector(selectTablePagination);
  const { setPaginationPage } = useActions();

  const handlePageChange = (e: any, newPage: number) => {
    setPaginationPage(newPage);
  };

  return <StyledPagination count={countPages} page={page} onChange={handlePageChange} />;
};

export default PagesPagination;
