import React, { useContext } from "react";

import { ScrollView, FlatList } from "react-native";
import ProductContainer from "../../../../components/ProductContainer";
import { ProductsContext } from "../../../../services/products/ProductsContext";
import { Flex, BorderAndTitle, Textt } from "../../../../components";
import { colors } from "../../../../infrasctructure/theme";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { Divider, Text } from "react-native-paper";

const CustomActivityIndicator = styled.ActivityIndicator`
  width: 100px;
  height: 100px;
  margin: 40px;
`;

const WeekOcasions = ({
  navigation,
  filter = "",
  direction = "column",
  keyword = "",
  productsByKeyword = []
}) => {
  let { products, isLoading } = useContext(ProductsContext);
  if (productsByKeyword.length > 0) products = productsByKeyword;
  console.log("🚀 ~ file: WeekOcasions.jsx ~ line 27 ~ products", products);

  const Separator = () => {
    return <Divider />;
  };

  return (
    <>
      {!keyword && filter !== "Elektronika" && (
        <Textt size={17}>Hity w kategorii {filter}:</Textt>
      )}
      <FlatList
        horizontal={direction === "row" ? true : false}
        showsHorizontalScrollIndicator={false}
        data={
          productsByKeyword.length > 0
            ? products
            : products
                .filter(
                  (p) => p.category.toLowerCase() === filter.toLowerCase()
                )
                .slice(0, 3)
        }
        keyExtractor={(product) => product.name}
        // contentContainerStyle={{ marginTop: 20 }}
        ItemSeparatorComponent={Separator}
        renderItem={(product) =>
          isLoading ? (
            <CustomActivityIndicator />
          ) : (
            <ProductContainer
              product={product.item}
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  product: product.item
                })
              }
              direction={direction}
            />
          )
        }
      />

      <BorderAndTitle title="Zobacz więcej" border />
    </>
  );
};

export default WeekOcasions;
