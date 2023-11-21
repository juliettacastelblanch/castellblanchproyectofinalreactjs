import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Nabvar/Navbar";
import Cart from "./Components/Cart/Cart";
import CheckoutForm from "./Components/ChecKoutForm/ChecKoutForm";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import StoreComponentContext from "./Context/StoreContext";

const App = () => {
  return (
    <div>
      <StoreComponentContext>
        <BrowserRouter>
          {/* <Cart /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} /> {/* Funciona*/}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </BrowserRouter>
      </StoreComponentContext>
    </div>
  );
};

const Home = () => {
  return <h2>¡Bienvenido a nuestra tienda en línea!</h2>;
};

export default App;
