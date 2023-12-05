import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const [show, setShow] = useState(false);
  const { cart, setCart } = useContext(StoreContext);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    calculateSubTotal();
  }, [cart]);

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

  const handleEmptyCart = () => {
    setCart([]);
    calculateSubTotal();
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ver carrito
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mi Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <div>
              <h3>Tu carrito está vacío</h3>
              <Link to="/" onClick={handleClose}>
                Ir al tienda
              </Link>
            </div>
          ) : (
            <>
              <div>
                {cart.map((product) => (
                  <div key={product.product.id}>
                    <p>
                      {product.product.name} - Cantidad: {product.quantity}
                    </p>
                   
                  </div>
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

              <div>
                <Button variant="danger" onClick={handleEmptyCart}>
                  Vaciar Carrito
                </Button>
              </div>
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
