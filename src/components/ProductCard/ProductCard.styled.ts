import styled from 'styled-components';
import { Card, CardContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export const StyledCard = styled(Card)`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-hight: 500px;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;

`;
