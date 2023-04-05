import styled from 'styled-components';
import { Slider, TextField, Box } from '@mui/material';
import { blue, yellow } from '../../../theme.';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: z;
  align-items: center;
  padding: 4px;
  margin: 16px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  border: solid ${yellow};
  border-radius: 20px;
  color: ${blue};
`;

export const TitleSlider = styled.h2`
  font-size: 1rem;
  margin: 5px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StyledSlider = styled(Slider)`
  color: ${blue};
  margin: 0 20px;
  & .MuiSlider-rail {
    color: ${yellow};
    height: 4px;
    opacity: 1;
    border-radius: 2px;
  }

  & .MuiSlider-track {
    height: 4px;
    border-radius: 2px;
  }

  & .MuiSlider-thumb {
    width: 14px;
    height: 14px;
    margin-top: -5px;
    margin-left: -7px;
    background-color: ${yellow};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

    &:hover,
    &.Mui-focusVisible {
      box-shadow: 0px 0px 0px 8px rgba(63, 81, 181, 0.16);
    }
  }
`;

export const StyledTextField = styled(TextField)`
  width: 30%;
  border: solid ${blue};

  .MuiInputBase-input {
    font-size: 14px;
    font-weight: 800;
    align-items: center;
    color: ${blue};
    padding: 10px;
    border-radius: 25px;
    border: 2px solid ${blue};

    &:focus {
      outline: none;
      background-color: ${yellow};
      border-color: ${blue};
      border-radius: 10px;
      box-shadow: 0 0 3px ${yellow};
    }
  }
`;
