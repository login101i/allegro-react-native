import React from "react";
import { Image, View, StyleSheet } from "react-native";

import {  images } from "../constants";

const Banner = ({ image = images.banner }) => {
	return (
		<View style={styles.bannerContainer}>
			<Image style={styles.bannerImg} source={image} />
		</View>
	);
};

const styles = StyleSheet.create({
	bannerContainer: {
		height: 120,
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	bannerImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover"
	}
});

export default Banner;
