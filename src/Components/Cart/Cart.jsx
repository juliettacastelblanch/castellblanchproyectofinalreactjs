import { useContext, useState, useRef, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { StoreContext } from "../../Context/StoreContext";
import { Overlay } from "react-bootstrap";


const Cart = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { cart } = useContext(StoreContext);
  const [subTotal, setSubTotal] = useState(0);
  
  useEffect(() => {
    let calculatedSubTotal = 0;

    cart.forEach((product) => {
      calculatedSubTotal += product.quantity * product.product.price;
    });

    setSubTotal(calculatedSubTotal);
  }, [cart]);

  const handleClose = () => {
    console.log(cart);
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
        Ver carrito
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "#BF09BE",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <MdOutlineClose onClick={handleClose} className="cart__close" />
            {cart.length === 0 ? (
              <div className="cart__empty">
                <h3 className="empty">Tu carrito esta vacio</h3>
                <Link to="/" className="cart__go" onClick={handleClose}>
                  Ir al tienda
                </Link>
              </div>
            ) : (
              <div className="cart__content">
                <h3 className="cart__title">Mi carrito</h3>

                <div className="cart__items">
                  {cart.map((product) => (
                    <ItemDetail product={product} key={product.id} />
                  ))}
                </div>

                <div className="flex-row cart__subtotal">
                  <h4>Subtotal</h4>
                  <span>${subTotal}</span>
                </div>

                <div className="flex-row cart__total">
                  <h4>Total</h4>
                  <span>${subTotal}</span>
                </div>
                <Link
                  to="/checkout"
                  className="cart__cta"
                  onClick={handleClose}
                >
                  COMPRAR
                </Link>
              </div>
            )}
          </div>
        )}
      </Overlay>
    </div>
  );
};

export default Cart;