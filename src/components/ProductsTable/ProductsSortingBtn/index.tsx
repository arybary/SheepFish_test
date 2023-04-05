import React from 'react';
import { Product } from '../../../model/Product';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyledBox, StyledBoxBtn, StyledIconButton } from './ProductsSortingBtn.styled';
import { useTypedSelector } from '../../../store/useTypedSelector';
import { selectTableSorting } from '../../../store/selectors/selector';
import { useActions } from '../../../store/useActions';

interface SortParams {
  name: 'asc' | 'desc';
  icon: any;
}

interface ProductsSortingBtnProps {
  nameCell: keyof Product;
}

const sortParams: SortParams[] = [
  { name: 'desc', icon: <KeyboardArrowUpIcon /> },
  { name: 'asc', icon: <KeyboardArrowDownIcon /> },
];

const ProductsSortingBtn: React.FC<ProductsSortingBtnProps> = ({ nameCell }) => {
  const { field, order } = useTypedSelector(selectTableSorting);
  const { setSorting, removeSorting } = useActions();

  return (
    <StyledBox>
      <StyledBoxBtn>
        {sortParams.map(({ name, icon }, index) => (
          <StyledIconButton
            size="small"
            key={name + index}
            className={nameCell === field && name === order ? 'active' : undefined}
            onClick={() => {
              setSorting({ field: nameCell, order: name });
            }}
          >
            {icon}
          </StyledIconButton>
        ))}

        <StyledIconButton
          className={nameCell === field ? 'active' : undefined}
          onClick={() => removeSorting()}
        >
          <SortIcon />
        </StyledIconButton>
      </StyledBoxBtn>
    </StyledBox>
  );
};

export default ProductsSortingBtn;
