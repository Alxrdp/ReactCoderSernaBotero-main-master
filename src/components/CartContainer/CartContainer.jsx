import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(CartContext);

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
