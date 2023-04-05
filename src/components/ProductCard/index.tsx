import * as React from "react";
import { Product } from "../../model/Product";
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";



const ProductCard: React.FC<Product> = ({
  title,
  images,
  price,
  description,
  discountPercentage,
  rating,
  brand,
  category,
  stock,
}) => (
  <Container>
  <Card>
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col xs={10} md={6}>
        <Carousel style={{ backgroundColor: "grey" }} fade>
    {images.map((image, i) => (
      <Carousel.Item key={`IMG${i}`}>
        <img style={{ width: "50%", height: "50%" }} src={image} alt="slide" />
        <Carousel.Caption>
          <h3>{`IMG${i + 1}`}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
        </Col>
        <Col xs={10} md={6}>
          <Card.Title>цвет:</Card.Title>
         
          <Card.Text>{description}</Card.Text>
 
          
          <Card.Title>цена: {price} $</Card.Title>
        </Col>
      </Row>
    </Card.Body>
    <Card.Footer>
      <Card.Link href="/">All products</Card.Link>
    </Card.Footer>
  </Card>
</Container>
);

export default ProductCard;
