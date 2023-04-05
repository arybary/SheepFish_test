import { Select } from '@mui/material';
import styled from 'styled-components';
import { blue, blueOpacity, yellow } from '../../../theme.';

export const StyledSelect = styled(Select)`
  background-color: ${yellow};
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
  color: ${blue};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${blueOpacity};
  }
`;
