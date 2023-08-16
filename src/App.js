import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsCont/ItemDetailsContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";
import { CartContextProvider } from "./context/CartContext";
import Error from './components/Error/Error'


function App() {
  return (
    <CartContextProvider>
  <header className="headerPatriota">
    <div className="App">  
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/product/:id" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}></Route>
           <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </div>
    </header>
    </CartContextProvider>
  );
}

export default App;
