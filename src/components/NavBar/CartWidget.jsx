import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(CartContext);
  const totalItems = getTotalItemsInCart();

  if (totalItems === 0) {
    return null; 
  }

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div className="cart-widget">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{totalItems}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
