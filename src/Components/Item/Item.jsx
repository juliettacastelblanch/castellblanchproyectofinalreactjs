import { useContext, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const storeContext = useContext(StoreContext);
  const { addToCart, cart } = storeContext;
  const { id, name, description, price, image } = product;

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    addToCart({ productId: id, quantity });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };


  const calculateTotal = () => {
    return price * quantity;
  };

 
  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={image} style={{ width: "10rem" }} />
          
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Precio: ${price}</Card.Text>
          <ItemCount onQuantityChange={handleQuantityChange} />
          <Button variant="primary" onClick={handleAdd}>
            Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
          <p>Total Productos: ${calculateTotal()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Link to="/cart">
            <Button variant="primary" onClick={handleCloseModal}>
              Ver Carrito
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Item;
