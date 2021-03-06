import React, { useState, createContext, useEffect } from "react";

import { productsData } from "./ProductsData";

export const ProductsContext = createContext();
import axios from "axios";

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:8000/api/products`);
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
