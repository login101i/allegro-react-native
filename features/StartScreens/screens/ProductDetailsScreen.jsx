import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Slider from "../../../components/Sider";

import { COLORS } from "../../../constants";
import AppText from "../../../components/AppText";
import Header from "../../../components/Header";
import ProductDetailsInfo from "../components/ProductPriceInfo";
import ProductPriceInfo from "../components/ProductPriceInfo";
import AddToCart from "../../../components/AddToCart";

export default function App({ navigation, route }) {
	const { product } = route.params;
	console.log(product.images[0].url);

	const productExample = {
		name: "SanDisk Ultra 128GB SDXC UHS-I Memory Card up to 80MB/s",
		price: "45.89",
		description:
			"Ultra-fast cards (2) to take better pictures and Full HD videos (1) with your compact to mid-range point-and-shoot cameras and camcorders. With SanDisk Ultra SDXC UHS-I cards you’ll benefit from faster downloads, high capacity, and better performance to capture and store 128GB (5) of high quality pictures and Full HD video (1). Take advantage of ultra-fast read speeds of up to 80MB/s (3) to save time moving photos and videos from the card to your computer. From a leader in flash memory storage, SanDisk Ultra SDXC UHS-I cards are compatible with SDHC and SDXC digital devices, and come with a 10-year limited warranty (6).",
		ratings: 4.5,
		images: [
			{
				public_id: "products/tzfsnrli3szrdnb4jgge",
				url: "https://res.cloudinary.com/mckrus/image/upload/v1612208133/dsstreet/pol_il_Bluza-meska-z-nadrukiem-zolta-BX4919-32520_o0xzz7.jpg"
			}
		],
		category: "Elektronika",
		seller: "Ebay",
		stock: 50,
		numOfReviews: 32,
		reviews: []
	};

	return (
		<ScrollView style={[{ backgroundColor: COLORS.backgroundColor }]}>
			<Header goBack={() => navigation.navigate("StartScreen")} />

			<Slider
				style={{ paddingTop: 56, backgroundColor: "white" }}
				images={product.images}
			/>
			<ProductDetailsInfo />
			<ProductPriceInfo />
			<AddToCart />

			<View style={[{ backgroundColor: COLORS.backgroundColor, flex: 1 }]}>
				<AppText title="Tytuł" />
				<AppText title="Cena" />
			</View>
		</ScrollView>
	);
}
