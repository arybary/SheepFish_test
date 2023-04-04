import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Carousel from "react-material-ui-carousel";
import { Product } from "../../model/Product";

const ProductCard: React.FC<Product> = ({
  title,
  images,
  price,
  description,
  discountPercentage,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={`$${price} (${discountPercentage}% off)`}
      />
      <Carousel>
        {images.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            height="194"
            image={image}
            alt={title}
          />
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained">Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
