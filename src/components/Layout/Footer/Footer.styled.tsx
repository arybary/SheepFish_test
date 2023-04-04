import {  Container, } from "@mui/material";
import styled from "styled-components";
import { yellow, blue } from "../../../theme.";

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
