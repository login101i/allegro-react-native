import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Constants from "expo-constants";

import { COLORS } from "../constants";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../screens/Screen";
import SimpleText from "../components/SimpleText";
import ActivityIndicator from "../components/ActivityIndicator";
import ProductContainer from "../components/ProductContainer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import productsApi from "../api/listings";
import useApi from "../hooks/useApi";

export default function ListingScreen({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	const getListingsApi = useApi(productsApi.getListings);

	const loadList = () => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	useEffect(() => {
		// getListingsApi.request();
		loadProducts();
	}, []);

	const loadProducts = async () => {

		
		const response = await productsApi.getListings();
		setProducts(response.data);
		console.log(response.data);
		console.log("hello")
	};

	// const listings = [
	// 	{
	// 		id: 1,
	// 		title: "Skarpetki skórzane",
	// 		price: "199",
	// 		image: require("../assets/images/ethereum.png"),
	// 		description: "UMG (w imieniu wytwórni  ",

	// 		price: 124,
	// 		discount: 21,
	// 		oldPrice: 645,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Kurtka z lisa",
	// 		price: "1199",
	// 		image: require("../assets/images/ethereum.png"),
	// 		description: "UMG (w imieniu wytwórni  ",

	// 		price: 124,
	// 		discount: 21,
	// 		oldPrice: 645,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Kurtka skórzana",
	// 		price: "199",
	// 		image: require("../assets/images/ethereum.png"),
	// 		description: "UMG (w imieniu wytwórni  ",

	// 		price: 164,
	// 		discount: 21,
	// 		oldPrice: 645,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Kurtka z lisa",
	// 		price: "1199",
	// 		image: require("../assets/images/ethereum.png"),
	// 		description: "UMG (w imieniu wytwórni  ",
	// 		price: 194,
	// 		discount: 21,
	// 		oldPrice: 645,
	// 	},
	// ];

	return (
		<>
			<ActivityIndicator visible={false} />
			<ScrollView style={{ paddingBottom: "80px" }}>
				<FlatList
					data={products}
					renderItem={({ item }) => (
						<View style={styles.productsContainer}>
							<ProductContainer
								productList
								title={item.title}
								subTitle={item.price + " zł"}
								description={item.description}
								onPress={() =>
									navigation.navigate("ProductDetailsScreen", item)
								}
								discount={item.discount}
								price={item.price}
							/>
						</View>
					)}
				/>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	productsContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	},
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: COLORS.backgroundColor,
		flex: 1,
	},
	viewContainer: {
		flex: 1,
	},
});
