import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cart, addToCart } = useContext(StoreContext); // Asumiendo que hay una función addToCart en el contexto
  const [subTotal, setSubTotal] = useState(0);

  const calculateSubTotal = () => {
    let calculatedSubTotal = 0;

    cart.forEach((product) => {
      calculatedSubTotal += product.quantity * product.product.price;
    });

    setSubTotal(calculatedSubTotal);
  };

  const handleShow = () => {
    calculateSubTotal();
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    calculateSubTotal();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ver carrito
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Mi Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <div className="cart__empty">
              <h3 className="empty">Tu carrito está vacío</h3>
              <Link to="/" className="cart__go" onClick={handleClose}>
                Ir al tienda
              </Link>
            </div>
          ) : (
            <>
              <div>
                {cart.map((product) => (
                  <ItemDetail product={product} key={product.id} />
                ))}
              </div>

              <div>
                <h4>Subtotal</h4>
                <span>${subTotal}</span>
              </div>

              <div>
                <h4>Total</h4>
                <span>${subTotal}</span>
              </div>

              <Link to="/checkout" onClick={handleClose}>
                COMPRAR
              </Link>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
