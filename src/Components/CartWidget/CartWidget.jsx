import { useContext } from "react";
import Button from "react-bootstrap/Button";

import { StoreContext } from "../../Context/StoreContext";

const CartWidget = () => {
  // const { getNumberOfItems, openCart } = useContext(StoreContext);

  return (
    <div className="cart-widget">
      <Button variant="primary">
        <div>asd</div>
        {/* Open Cart ({getNumberOfItems()}) */}
      </Button>
    </div>
  );
};

export default CartWidget;
