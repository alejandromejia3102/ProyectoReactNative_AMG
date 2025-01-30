import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (item) => {
    const itemExist = carts.find((cart) => cart.id === item.id);

    if (itemExist) {
      const updatedCarts = carts.map((cart) =>
        cart.id === item.id
          ? { ...cart, cantidad: cart.cantidad + 1 }
          : cart
      );
      setCarts(updatedCarts);
    } else {
      setCarts((prevCarts) => [...prevCarts, { ...item, cantidad: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCarts = carts.filter((cart) => cart.id !== id);
    setCarts(updatedCarts);
  };

  const removeProduct = (id) => {
    const updatedCarts = carts.map((cart) =>
      cart.id === id && cart.cantidad > 1
        ? { ...cart, cantidad: cart.cantidad - 1 }
        : cart
    );
    setCarts(updatedCarts);
  };

  const value = {
    carts,
    addToCart,
    removeFromCart,
    removeProduct
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
