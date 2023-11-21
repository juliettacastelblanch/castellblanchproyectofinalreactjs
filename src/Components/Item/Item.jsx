import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

import { Card, Button } from "react-bootstrap";

const Item = ({ product }) => {
  const a = useContext(StoreContext);
  const { addToCart } = a;
  // console.log(a);
  const { id, name, description, price, image } = product;

  const handleAdd = () => {
    addToCart({ productId: id, quantity: 1 });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={image} style={{ width: "10rem" }} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary" onClick={handleAdd}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
