// src/components/ItemDetail.js

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div>
      {/* Mostrar detalles del producto */}
      <img src={product.product.image} style={{ width: "6rem" }}></img>
      <p>Titulo {product.product.title}</p>
      <p>Descripcion: {product.product.description}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
