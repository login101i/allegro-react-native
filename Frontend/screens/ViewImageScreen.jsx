import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageButt from "../assets/images/foto4.jpg";

import { COLORS } from "../constants";

export default function ViewImageScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color="white" size={33} />
			</View>
			<View style={styles.removeIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					color="white"
					size={33}
				/>
			</View>

			<Image
				source={ImageButt}
				resizeMode="contain"
				style={styles.image}
			></Image>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		zIndex: -1,
	},
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.black,
		position: "relative",
	},
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 40,
	},
	removeIcon: {
		position: "absolute",
		top: 40,
		right: 40,
	},
});
