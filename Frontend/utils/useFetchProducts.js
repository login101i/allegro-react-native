import React, { useState } from 'react';
import axios from 'axios';

export const useFetchProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get('http://192.168.43.35:8000/api/products');
      setProducts(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return { fetchData, isLoading, products };
};
