import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import { COLORS, dummyData, SIZES } from "../../../constants";

import Category from "../../../components/Category";

const Categories = () => {
	return (
		<>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.categoriesContainer}
			>
				{dummyData.categories.map(
					({ icon, categoryTitle, borderColor, id }) => (
						<Category
							key={id}
							icon={icon}
							title={categoryTitle}
							borderBottomColor={borderColor}
							borderBottomWidth={6}
						/>
					)
				)}
			</ScrollView>
			<Text style={styles.categoryTitle}>Kategorie</Text>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8
	},
	inputContainer: {
		border: "1px solid grey",
		width: "90%",

		marginLeft: 15,
		marginRight: 15,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	input: {
		height: "100%",
		border: "none",
		padding: 6
	},

	categoriesContainer: {
		height: 100
	},
	categoryTitle: {
		textTransform: "uppercase",
		color: COLORS.linkColor,
		display: "flex",
		flexAlign: "center",
		justifyContent: "center",
		fontWeight: 600,
		fontSize: SIZES.body3,
		marginBottom: 7
	},

	bannerContainer: {
		height: 120,
		width: "100%",
		backgroundColor: COLORS.black,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	bannerImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover"
	},

	roundedCatContainer: {
		backgroundColor: COLORS.backgroundColor,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "left"
	},
	flexRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},

	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},

	textBig: {
		fontSize: SIZES.h3,
		fontWeight: 500,
		color: COLORS.white,
		marginTop: 10
	},
	timeContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10
	},
	timeItem: {
		color: COLORS.allegroColor,
		fontSize: 26
	},
	colon: {
		color: COLORS.allegroColor,
		fontSize: 26,
		margin: 5
	}
});

export default Categories;
