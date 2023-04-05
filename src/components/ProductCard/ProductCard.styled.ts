import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";

import styled from "styled-components";

export const  StyledCard = styled(Card)`
  display: flex;
  margin: 50px auto;
  max-width: 1200px;
`;

export const  ProductImage = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export const  ProductContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const  ProductTitle = styled(Typography)`
  font-weight: bold;
`;

export const  ProductPrice = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
`;

export const  ProductDescription = styled(Typography)`
  margin-top: 20px;
`;

export const  ProductCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
`;