import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Modal, Button } from "react-bootstrap";
import { StoreContext } from "../../Context/StoreContext";
import styles from "./ChecKoutForm.module.css"

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useContext(StoreContext);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal, handleCloseModal] = useState(false);
  const [shModal, setShModal] = useState(false);

  const handleInputChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    setShModal(true);
    if (!buyerInfo.name || !buyerInfo.email) {
      setShowModal({
        title: "Error",
        text: "Por favor, completa todos los campos del formulario.",
        icon: "error",
        background: "#51585e",
        color: "#fff",
      });
      return;
    }

    try {
      console.log(cart);
      const orderItems = cart.map((item) => ({
        id: item.product.id,
        title: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
      }));

      console.log(orderItems);
      const order = {
        buyer: buyerInfo,
        items: orderItems,
        total: getTotalPrice(),
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      console.log(ordersCollection);

      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      clearCart();
      setLoading(true);

      setShowModal({
        title: "¡Compra exitosa!",
        text: `Tu orden ha sido procesada con éxito. Número de orden: ${docRef.id}`,
        icon: "success",
        background: "#51585e",
        color: "#fff",
      });
    } catch (error) {
      console.error("Error al procesar la orden:", error);

      // Mostrar mensaje de error de Bootstrap
      setShowModal({
        title: "Error",
        text: "Hubo un error al procesar la orden. Por favor, inténtalo de nuevo.",
        icon: "error",
        background: "#51585e",
        color: "#fff",
      });
    } finally {
      setLoading(false); // Desactivar la carga
    }
  };

  const handleClose = () => {
    setShModal(false);
  };

  return (
    <div>
      <h2>Información de Contacto</h2>
      {loading && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Loading...
          </div>
        </div>
      )}
      <form>
        <label>
          NOMBRE:
          <input
            type="text"
            name="name"
            value={buyerInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          EMAIL:
          <input
            type="email"
            name="email"
            value={buyerInfo.email}
            onChange={handleInputChange}
          />
        </label>

        <button type="button" onClick={handleCheckout}>
        Realizar pedido
        </button>
      </form>
      <Modal show={shModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Compra exitosa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu orden ha sido procesada con éxito. Número de orden: {orderId}
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

export default CheckoutForm;
