import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { COLORS } from "../constants";
import ListItem from "../components/ListItem";
import ImageButt from "../assets/images/wallpaper_butt.jpg";
import AppText from "../components/AppText";

export default function App() {
	return (
		<View style={{ height: "100%" }}>
			<Image style={styles.image} source={ImageButt} />
			<View
				style={[
					styles.detailsContainer,
					{ backgroundColor: COLORS.backgroundColor, flex: 1 },
				]}
			>
				<AppText title="Tytuł" />
				<AppText title="cena" textColor="green" />
				<ListItem
					image={ImageButt}
					title="Mosh Hamedani"
					subTitle="5 Listings"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 10,
	},
	image: {
		width: "100%",
		height: 400,
	},
	price: {
		color: COLORS.green,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},

});
