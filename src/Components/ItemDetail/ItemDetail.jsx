import  { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity) => {
    const newItem = { product, quantity };
    setCart([...cart, newItem]);
  };

  return (
    <div>
      <img
        src={product.product.image}
        style={{ width: "6rem" }}
        alt="Product"
      ></img>
      <p>Titulo: {product.product.title}</p>
      
   
   
    </div>
  );
};

export default ItemDetail;
