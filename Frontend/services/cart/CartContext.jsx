import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { io } from 'socket.io-client';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [cartStep, setCartStep] = useState(1);

  const [user, setUser] = useState('defaultUser');
  const [notifications, setNotifications] = useState([]);

  const saveCart = async (cart) => {
    try {
      const jsonValue = JSON.stringify({ cart: cart });
      await AsyncStorage.setItem('Your cart is ', jsonValue);
    } catch (e) {
      console.log('Storage error', e);
    }
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    calculateSum(cart);
    saveCart();
  }, [cart]);

  const add = (item, ilosc) => {
    setCart([...cart, { item: item, ile: ilosc }]);
  };

  const remove = (item) => {
    if (cart.length === 0) {
      setSum(0);
      return;
    }
    cart.splice(0, 1);
    const newCart = cart;

    setCart(newCart);
  };

  const removeProduct = (itemToRemove) => {
    const newCart = cart.filter((product) => product.item.name !== itemToRemove.name);
    setCart(newCart);
    console.log(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const calculateSum = (cartItems) => {
    let newSum = 0;
    cartItems.map((item) => {
      const price = item.price;
      const qty = item.ile;
      const itemSum = price * qty;
      newSum += itemSum;
      setSum(newSum.toFixed(2));
    });
  };

  const handleCartStep = () => {
    setCartStep((prevState) => prevState + 1);
    if (cartStep > 4) return;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        sum,
        user,
        cartStep,
        addToCart: add,
        removeFromCart: remove,
        clearCart: clear,
        removeProduct,
        addCartStep: handleCartStep
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
