import { Autocomplete } from "@mui/material";
import styled from "styled-components";
import { blue, yellow } from "../../Layout/Layout.styled";

export const StyledAutocomplete = styled(Autocomplete)`
  color: ${blue};
  margin: 20px;
  border: 2px solid ${yellow};
  border-radius: 20px;

  .MuiInputBase-input {
    font-size: 20px;
    color: ${blue};
    padding: 10px;
    border-radius:15px;
    border: 2px solid ${blue};

    &:focus {
      outline: none;
      border-color: ${blue};
      box-shadow: 0 0 3px ${yellow};
    }
  }

  .MuiInputLabel-root {
    font-size: 18px;
    color: ${blue};
  }
`;
