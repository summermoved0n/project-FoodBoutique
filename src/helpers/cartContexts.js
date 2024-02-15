import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState(() => {
    return JSON.parse(localStorage.getItem('products')) ?? [];
  });
  const [order, setOrder] = useState(() => {
    return JSON.parse(localStorage.getItem('order')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(addCart));
    window.localStorage.setItem('order', JSON.stringify(order));
  }, [addCart, order]);

  return (
    <CartContext.Provider value={{ addCart, setAddCart, order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
};
