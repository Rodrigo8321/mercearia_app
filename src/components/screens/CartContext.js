import React, { createContext, useState, useContext } from 'react';
import { cartItems as initialCartItems } from '../data/MockData';

// 1. Criar o Contexto
const CartContext = createContext();

// 2. Criar o Provedor (Provider)
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(initialCartItems);

  const addItem = (product) => {
    // Lógica para evitar itens duplicados e apenas adicionar um novo
    setItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Se o item já existe, você pode aumentar a quantidade ou simplesmente não fazer nada
        // Por simplicidade, vamos apenas notificar e não adicionar de novo.
        console.log(`O item "${product.category}" já está no carrinho.`);
        return prevItems;
      }
      return [...prevItems, { ...product, id: Date.now().toString() }]; // Adiciona com um novo ID para evitar conflitos de chave
    });
  };

  const removeItem = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Criar um Hook customizado para facilitar o uso
export const useCart = () => useContext(CartContext);