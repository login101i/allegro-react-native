import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const ProductsContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('http://192.168.43.35:8000/api/products');
      setProducts(data.products);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        error
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
