import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import StoreContext from "../../Context/StoreContext";


import { db } from "../../firebase/client";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const productRef = collection(db, "products");
        const queryFilter = categoryId
          ? query(productRef, where("categoryId", "==", categoryId))
          : productRef;
        const snapshot = await getDocs(queryFilter);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  console.log(products);
  return (
    <div>
      <h1>{greeting}</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" className="m-5" style={{ color: "#fff" }} />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
