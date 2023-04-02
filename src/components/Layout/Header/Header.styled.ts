import { AppBar, Container, Toolbar } from "@mui/material";
import styled from "styled-components";
import { blue, yellow } from "../Layout.styled";

export const HeaderContainer = styled(Container)`
  position: relative;
  z-index: 4;
`;

export const StyledAppBar = styled(AppBar)`
  && {
    position: fixed;
    background-color: ${blue};
    color: ${yellow};
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;
