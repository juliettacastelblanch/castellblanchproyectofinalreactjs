import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(1);
  };

  const handleAddToCart = () => {
    // Agregar lógica para agregar al carrito
    const newItem = {
      id: cartItems.length + 1,
      quantity: count,
    };

    setCartItems([...cartItems, newItem]);

    // Puedes mostrar una notificación, enviar a un servidor, etc.
    alert(`Agregado ${count} al carrito`);
  };

  return (
    <div>
      <p>Cantidad: {count}</p>
      <Button variant="danger" onClick={handleDecrease}>
        -
      </Button>
      <Button variant="success" onClick={handleIncrease}>
        +
      </Button>
      <Button variant="warning" onClick={handleReset}>
        Borrar
      </Button>
      
    </div>
  );
};

export default ItemCount;
