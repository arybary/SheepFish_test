import * as React from "react";
import { Typography } from "@mui/material";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledBox,
  StyledColumn,
} from "./ProductSearch.styled";
import { ExpandMore,Search } from "@mui/icons-material";
import ProductsFieldFilter from "./ProductsFieldFilter";
import ProductSliderFilter from "./ProductsSliderFilter";

const ProductSearch: React.FC = () => (
  <StyledAccordion>
    <StyledAccordionSummary expandIcon={<ExpandMore />}>
    <Search /> <Typography >SEARCH_PRODUCT:</Typography>
    </StyledAccordionSummary>
    <StyledAccordionDetails>
      <StyledBox>
        <StyledColumn>
          <ProductsFieldFilter field={"title"} />
          <ProductsFieldFilter field={"category"} />
          <ProductsFieldFilter field={"brand"} />
          <ProductsFieldFilter field={"description"} />
        </StyledColumn>
        <StyledColumn>
          <ProductSliderFilter name={"price"} startValue={[0, 1000]} />
          <ProductSliderFilter name={"rating"} startValue={[0, 5]} />
          <ProductSliderFilter name={"stock"} startValue={[0, 200]} />
          <ProductSliderFilter
            name={"discountPercentage"}
            startValue={[0, 100]}
          />
        </StyledColumn>
      </StyledBox>
    </StyledAccordionDetails>
  </StyledAccordion>
);

export default ProductSearch;
