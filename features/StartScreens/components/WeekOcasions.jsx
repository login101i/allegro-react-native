import React, { useContext } from "react";

import { ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

import ProductContainer from "../../../components/ProductContainer";
import { ProductsContext } from "../../../services/products/ProductsContex";

const WeekOcasions = ({ navigation }) => {
	const { products } = useContext(ProductsContext);
	console.log(products);

	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.roundedCatContainer}
		>
			{products.map((product) => (
				<ProductContainer
					product={product}
					key={product.name}
					onPress={() =>
						navigation.navigate("ProductDetails", { product: product })
					}
				/>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	roundedCatContainer: {
		backgroundColor: COLORS.backgroundColor,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "left"
	}
});

export default WeekOcasions;
