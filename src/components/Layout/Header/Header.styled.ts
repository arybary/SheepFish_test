
import styled from "styled-components";
import { blue, yellow } from "../../../theme.";

export const HeaderContainer = styled.header`
height: 60px;
position: fixed;
display:flex;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
align-items: center;
z-index: 1;
background-color: ${blue};
color: ${yellow};
`;
