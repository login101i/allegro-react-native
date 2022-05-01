import React, { useContext } from "react";

import { ScrollView, FlatList } from "react-native";
import ProductContainer from "../../../../components/ProductContainer";
import { ProductsContext } from "../../../../services/products/ProductsContext";
import { Flex, BorderAndTitle, Textt } from "../../../../components";

const WeekOcasions = ({
  navigation,
  filter = "Elektronika",
  direction = "column"
}) => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      {filter !== "Elektronika" && (
        <Textt size={17}>Hity w kategorii {filter}:</Textt>
      )}
      {/* <ScrollView
        horizontal={direction === "row" ? true : false}
        showsHorizontalScrollIndicator={false}
      > */}
      <FlatList
        horizontal={direction === "row" ? true : false}
        showsHorizontalScrollIndicator={false}
        data={products.filter((p) => p.category === filter)}
        keyExtractor={(product) => product.name}
        contentContainerStyle={{ margin: 20 }}
        renderItem={(product) => (
          <ProductContainer
            product={product.item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: product.item
              })
            }
            direction={direction}
          />
        )}
      />
      {/* </ScrollView> */}
      <BorderAndTitle title="Zobacz więcej" border />
    </>
  );
};

export default WeekOcasions;
