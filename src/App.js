import "./App.css";
import ItemDetailsCont from "./components/ItemDetailsCont/ItemDetailsCont";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (

  <header className="headerPatriota">
    <div className="App">  
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/prueba" element={<h1>Prueba</h1>} />
            <Route path="/product/:id" element={<ItemDetailsCont />} />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
    </header>
  );
}

export default App;
