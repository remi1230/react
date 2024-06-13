// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
