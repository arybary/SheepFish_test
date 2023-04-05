import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styled from "styled-components";
import { blue, yellow } from "../../theme.";


export const StyledAccordion = styled(Accordion)`
width:100%;
  border: solid ${blue};
  .MuiAccordionSummary-root {
    display: flex;
    align-items: center;
    background-color: ${yellow};
    color: ${blue};
    font-weight: 800;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    cursor: pointer;
    .MuiAccordionSummary-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
     
    }
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  pading: 10px;
  background-color: rgba(255, 255, 0, 0.25);
`;

export const StyledBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  margin: 8px;
`;
export const StyledColumn = styled.div`
border: 2px solid ${blue};
  margin: 8px;
`;
