import React, { useContext } from "react";
import CartContext from "../../context/CartContext"; // Ajusta la ruta según la ubicación real
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(CartContext); // Usa CartContext en lugar de CartContext

  return (
    <Link to="/cart">
      <div>
        🛒
        <span> {context.getTotalItemsInCart()} </span>
      </div>
    </Link>
  );
}

export default CartWidget;
