import { IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  margin: 8px;
`;
export const StyledBoxBtn = styled.div`
display: flex;
flex-flow: row;
border: 2px solid ${blue};
  margin: 8px;
`;

export const StyledIconButton = styled(IconButton)`
  color: #757575;

  &.active {
    color: #0077ff;
  }
`;
