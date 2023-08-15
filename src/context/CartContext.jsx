import { useState, createContext } from "react";

export const CartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    const newCart = [...cart];
    if (isInCart(product.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id);
      newCart[indexUpdate].count += count;
      setCart(newCart);
    } else {
      const newItemInCart = { ...product, count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }
  
  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    return null;
  }

  function getTotalItemsInCart() {
    let total = 0;
      cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        getItemInCart,
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };