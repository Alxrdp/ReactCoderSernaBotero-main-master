/*import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CartContainer() {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div className="item-card-1">
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <ButtonComponent onClick={() => removeItem(item.id)}>Eliminiar</ButtonComponent>
        </div>
      ))}
      <br />
      <div>Total de la compra: $20000</div>
      <Link to="/checkout"><ButtonComponent>Comprar</ButtonComponent></Link>
    </div>
  );
}

export default CartContainer;*/

import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function CartContainer() {
  const { cart, removeItem } = useContext(CartContext);

  // Función para calcular el precio total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.count * item.price, 0);
  };

  return (
    <div className="item-card-1">
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar: {item.count}</p>
          <p>Precio total: ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: ${calculateTotal()}</div>
      <Link to="/checkout"><button>Comprar</button></Link>
    </div>
  );
}

export default CartContainer;
