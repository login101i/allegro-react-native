import React, { useContext } from "react";

import { ScrollView } from "react-native";
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
      <ScrollView
        horizontal={direction === "row" ? true : false}
        showsHorizontalScrollIndicator={false}
      >
        <Flex
          style={{ flexDirection: direction }}
          width={direction === "row" ? "190px" : "480px"}
        >
          {products
            .filter((p) => p.category === filter)
            .map((product) => (
              <ProductContainer
                product={product}
                key={product.name}
                onPress={() =>
                  navigation.navigate("ProductDetails", { product: product })
                }
                direction={direction}
              />
            ))}
        </Flex>
      </ScrollView>
      <BorderAndTitle title="Zobacz więcej" border />
    </>
  );
};

export default WeekOcasions;
