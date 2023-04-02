import { AppBar, Container, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { blue, yellow } from "../Layout.styled";

export const FooterContainer = styled(Container)`

position: relative;

width: 100%;
color: black;
text-align: center;
`;



export const StyledToolbar = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${yellow};
  color: ${blue};
  display: flex;
  justify-content: space-around;
`;
