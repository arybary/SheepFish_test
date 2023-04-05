import React from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Product } from '../../model/Product';
import { StyledCard, StyledCardContent, StyledCarousel } from './ProductCard.styled';
import { CardActions, CardMedia, Rating, Typography } from '@mui/material';
import ProductDelete from '../ProductDelete';
import ProductEdit from '../ProductEdit';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, price, images, description, discountPercentage, rating, brand, stock } =
    product;
  return (
    <StyledCard>
      <StyledCarousel
        NextIcon={<NavigateNext fontSize="large" />}
        PrevIcon={<NavigateBefore fontSize="large" />}
        indicators={true}
      >
        {images.map(image => (
          <CardMedia key={image} component="img" height="500px" image={image} alt={image} />
        ))}
      </StyledCarousel>
      <StyledCardContent>
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          {brand}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
        <Typography variant="h5" component="p">
          {price}$
        </Typography>
        <Typography variant="h6" component="p" color="error">
          {discountPercentage}%
        </Typography>
        <Rating value={rating} />
        <Typography variant="h6" component="p">
          {`Stock: ${stock}`}
        </Typography>
        <CardActions>
          <ProductEdit product={product} />
          <ProductDelete productId={id} />
        </CardActions>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
