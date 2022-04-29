import React, { useState, useEffect } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	Flatlist,
	ScrollView,
	TextInput,
} from "react-native";

import AppText from "../components/AppText";
import BlackSpace from "../components/BlackSpace";
import Category from "../components/Category";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";

const FindScreen = () => {
	function renderSearchInput() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Czego szukasz?"
					keyboardType="numeric"
				/>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Image
						source={icons.star}
						style={{
							tintColor: COLORS.secondary,
							marginLeft: 10,
							width: 20,
							height: 20,
						}}
					/>
					<Image
						source={icons.star}
						style={{
							tintColor: COLORS.secondary,
							marginLeft: 10,
							width: 20,
							height: 20,
							marginRight: 10,
						}}
					/>
				</View>
			</View>
		);
	}

	function renderCategories() {
		return (
			<ScrollView>
				<AppText
					title="Wszystkie kategorie"
					style={{ paddingVertical: "10px" }}
					fontSize={SIZES.h3}
				/>
				{dummyData.categories.map(({ icon, categoryTitle, borderColor }) => (
					<Category
						title={categoryTitle}
						icon={icon}
						width="100%"
						flexDirection="row"
						height={50}
						borderLeftWidth={6}
						borderLeftColor={borderColor}
						containerStyle={{ marginHorizontal: "15px" }}
					/>
				))}
			</ScrollView>
		);
	}

	// ----------------------------------------------

	return (
		<ScrollView>
			<View
				style={{
					display: "flex",
					flex: 1,
					paddingBottom: 130,
					backgroundColor: COLORS.backgroundColor,
					color: "white",
					height: "100%",
				}}
			>
				{renderSearchInput()}
				{renderCategories()}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: "90%",

		marginLeft: 15,
		marginRight: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	input: {
		height: "100%",
		border: "none",
		padding: 6,
	},
});

export default FindScreen;
