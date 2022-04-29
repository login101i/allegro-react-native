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

import axios from "axios";

export default function ListingScreen({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([
		{
			price: 34.9,
			ratings: 4.5,
			stock: 5,
			numOfReviews: 32,
			_id: "618d282bd934b25a6c8b07aa",
			name: "Kawa ziarnista Segafredo Caffè Crema Dolce 1 kg",
			description:
				"Kawa ziarnista Segafredo Caffè Crema Dolce 1 kg. Łagodna mieszanka wysokiej jakości ziaren arabiki i robusty gwarantuje aromatyczne i dobrze urozmaicone odczucie smaku.",
			ages: [
				{
					img: "https://a.allegroimg.com/s720/11d457/b569dce84356a783f560983642e9/Kawa-ziarnista-Segafredo-Caffe-Crema-Dolce-1-kg",
					thumbnail:
						"https://a.allegroimg.com/s720/11a0ed/3f4d09734e1788d18d7a4cf1e4a3/Kawa-ziarnista-Segafredo-Caffe-Crema-Dolce-1-kg-Marka-Segafredo",
					_id: "618d282bd934b25a6c8b07ab",
				},
			],
			category: "Supermarket",
			seller: "Login101i",
			reviews: [],
			createdAt: "2021-11-11T14:26:51.921Z",
		},
	]);

	const getListingsApi = useApi(productsApi.getProducts);

	const loadList = () => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	useEffect(() => {
		console.log("hehe");
		getProducts()
	}, []);

	const getProducts = async () => {
		try {
			const res = await axios.get("http://192.168.43.1:19006/api/v1/products");

			console.log(res.data.products);
		} catch (err) {
			console.log(err);
		}
	};

	const loadProducts = async () => {

		const response = await productsApi.getListings();
		setProducts(response.data);
		console.log(response.data);
		console.log("hello")
	};

	const listings = [
		{
			id: 1,
			title: "Skarpetki skórzane",
			price: "199",
			image: require("../assets/images/ethereum.png"),
			description: "UMG (w imieniu wytwórni  ",

			price: 124,
			discount: 21,
			oldPrice: 645,
		},
		{
			id: 2,
			title: "Kurtka z lisa",
			price: "1199",
			image: require("../assets/images/ethereum.png"),
			description: "UMG (w imieniu wytwórni  ",

			price: 124,
			discount: 21,
			oldPrice: 645,
		},
		{
			id: 3,
			title: "Kurtka skórzana",
			price: "199",
			image: require("../assets/images/ethereum.png"),
			description: "UMG (w imieniu wytwórni  ",

			price: 164,
			discount: 21,
			oldPrice: 645,
		},
		{
			id: 4,
			title: "Kurtka z lisa",
			price: "1199",
			image: require("../assets/images/ethereum.png"),
			description: "UMG (w imieniu wytwórni  ",
			price: 194,
			discount: 21,
			oldPrice: 645,
		},
	];

	return (
		<>
			<ActivityIndicator visible={false} />
			<ScrollView style={{ paddingBottom: "80px" }}>
				<FlatList
					data={products}
					keyExtractor={(item, index) => index.toString}
					renderItem={({ item }) => (
						<View style={styles.productsContainer}>
							<ProductContainer
								title={item.name}
								price={item.price}
								description={item.description}
								ratings={item.ratings}
								image={item.images[0].img}
								category={item.category}
								seller={item.seller}
								stock={item.stock}
								numOfReviews={item.numOfReviews}
								onPress={() =>
									navigation.navigate("ProductDetailsScreen", item)
								}
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
