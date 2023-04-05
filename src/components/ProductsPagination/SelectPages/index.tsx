import { MenuItem } from '@mui/material';
import { selectTablePagination } from '../../../store/selectors/selector';
import { useActions } from '../../../store/useActions';
import { useTypedSelector } from '../../../store/useTypedSelector';
import { StyledSelect } from './SelectPages.styled';

const options = [5, 10, 25, 50];

const PageSelect: React.FC = () => {
  const { rowsPerPage } = useTypedSelector(selectTablePagination);
  const { setPaginationRowsPerPage } = useActions();

  return (
    <StyledSelect
      value={rowsPerPage}
      onChange={event => {
        setPaginationRowsPerPage(Number(event.target.value as string));
      }}
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default PageSelect;
