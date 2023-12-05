import React from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ onQuantityChange }) => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
    onQuantityChange(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      onQuantityChange(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0); 
    onQuantityChange(0); 
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
