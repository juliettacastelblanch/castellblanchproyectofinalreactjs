import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();
  const { loading, setLoading } = useState(true);

  useEffect(() => {
    const productsRef = document(db, "products", id);
    getDoc(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <>
      {loading ? (
        <loader loading={loading} />
      ) : (
        <ItemDetail producto={producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;
