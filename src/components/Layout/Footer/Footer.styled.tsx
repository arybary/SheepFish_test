import styled from "styled-components";
import { yellow, blue } from "../../../theme.";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  position: fixed;
  display:flex;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${yellow};
  color: ${blue};
`;
