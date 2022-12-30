import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const [cartStep, setCartStep] = useState(1);
  const [user, setUser] = useState('defaultUser');

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
      setCartSum(0);
      return;
    }
    calculateSum(cart);
    saveCart();
  }, [cart]);

  useEffect(() => {}, [excludeProduct]);

  const add = (item, ilosc) => {
    if (cart.map(({ item }) => item._id).includes(item._id)) {
      const productIndex = cart.findIndex((cartItem) => cartItem.item._id === item._id);
      cart[productIndex].ile += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: item, ile: ilosc }]);
    }
  };

  const remove = (item) => {
    if (cart.length === 0) {
      setCartSum(0);
      return;
    }
    if (cart.map(({ item }) => item._id).includes(item._id)) {
      const productIndex = cart.findIndex((cartItem) => cartItem.item._id === item._id);
      cart[productIndex].ile -= 1;
      setCart([...cart]);
    }
  };

  const removeProduct = (itemToRemove) => {
    const newCart = cart.filter((product) => product.item._id !== itemToRemove._id);
    setCart(newCart);
  };
  const excludeProduct = (itemToExclude) => {
    if (!itemToExclude) {
      calculateSum(cart);
    } else {
      const newCart = cart.filter((product) => product.item._id !== itemToExclude._id);
      calculateSum(newCart);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const calculateSum = (cartItems) => {
    let newSum = 0;
    cartItems.map((item) => {
      const price = item.item.price;
      const qty = item.ile;
      const itemSum = price * qty;
      newSum += itemSum;
      setCartSum(newSum.toFixed(2));
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
        cartSum,
        user,
        cartStep,
        addToCart: add,
        removeFromCart: remove,
        clearCart: clear,
        removeProduct,
        excludeProduct,
        calculateSum,
        addCartStep: handleCartStep
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
