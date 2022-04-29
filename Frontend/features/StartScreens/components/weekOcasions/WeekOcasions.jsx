import React, { useContext } from "react";

import { ScrollView } from "react-native";
import ProductContainer from "../../../../components/ProductContainer";
import { ProductsContext } from "../../../../services/products/ProductsContext";
import { Flex } from "../../../../components";

const WeekOcasions = ({ navigation }) => {
  const { products } = useContext(ProductsContext);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Flex>
        {products.map((product) => (
          <ProductContainer
            product={product}
            key={product.name}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: product })
            }
          />
        ))}
      </Flex>
    </ScrollView>
  );
};

export default WeekOcasions;
