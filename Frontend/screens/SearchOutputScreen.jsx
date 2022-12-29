import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ProductsContext } from '../services/products/ProductsContext';
import { FilterHeader, Textt, SafeArea } from '../components';
import WeekOccasions from '../features/StartScreens/components/WeekOccasions/WeekOccasions';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export const SearchOutputScreen = ({ route, currentPage = 1, price = [1, 10000], category = '', rating = 0 }) => {
  const [productsByKeyword, setProductsByKeyword] = useState([]);
  const keyword = route.params.searchKeyword || 'dog';

  const navigation = useNavigation();

  useEffect(() => {
    searchByKeyword();
  }, []);

  const searchByKeyword = async () => {
    try {
      const link = `http://localhost:8000/api/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;

      const { data } = await axios.get(link);
      setProductsByKeyword(data.products);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeArea>
      <FilterHeader />
      <WeekOccasions navigation={navigation} keyword={keyword} productsByKeyword={productsByKeyword} />
    </SafeArea>
  );
};
