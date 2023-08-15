import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/firebase.js";
import { Link, useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar{item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: $20000</div>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;