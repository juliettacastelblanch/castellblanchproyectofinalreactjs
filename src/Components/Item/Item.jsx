import  { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const storeContext = useContext(StoreContext);
  const { addToCart } = storeContext;
  const { id, name, description, price, image } = product;

  const [showModal, setShowModal] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({ productId: id, quantity });
    setShowModal(true);
    setTotalValue((prevTotal) => prevTotal + price * quantity);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    addToCart({ productId: id, quantity });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={image} style={{ width: "10rem" }} />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <ItemCount onAdd={setQuantity} />
          <Button variant="primary" onClick={handleAdd}>
            Agregar al Carrito
          </Button>
         
        </Card.Body>
      </Card>
      {showModal && (
        <div>
          <p>Producto agregado al carrito</p>
          <Link to="/cart" onClick={handleCloseModal}>
            Ver Carrito
          </Link>
        </div>
      )}
    </>
  );
};

export default Item;
