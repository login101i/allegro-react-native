import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ProductsContext } from "../services/products/ProductsContext";
import { FilterHeader, Textt } from "../components";
import WeekOcasions from "../features/StartScreens/components/weekOccasions/WeekOccasions";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export const SearchOutputScreen = ({
  route,
  currentPage = 1,
  price = [1, 10000],
  category = "",
  rating = 0
}) => {
  const [productsByKeyword, setProductsByKeyword] = useState([]);
  const keyword = route.params.searchKeyword || "";

  const navigation = useNavigation();

  useEffect(() => {
    searchByKeyword();
  }, []);


  const searchByKeyword = async () => {
    try {
      const link = `http://localhost:8000/api/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;

      const { data } = await axios.get(link);
      console.log(
        "🚀 ~ file: SearchOutputScreen.jsx ~ line 31 ~ searchByKeyword ~ data",
        data
      );
      setProductsByKeyword(data.products);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView>
      <FilterHeader />
      <WeekOcasions
        navigation={navigation}
        keyword={keyword}
        productsByKeyword={productsByKeyword}
      />
      <Textt>{productsByKeyword.length}</Textt>
    </ScrollView>
  );
};

