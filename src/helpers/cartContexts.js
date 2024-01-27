import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [addCart, setAddCart] = useState(() => {
    return JSON.parse(localStorage.getItem('products')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(addCart));
  }, [addCart]);

  return (
    <CartContext.Provider value={{ addCart, setAddCart }}>
      {children}
    </CartContext.Provider>
  );
};
