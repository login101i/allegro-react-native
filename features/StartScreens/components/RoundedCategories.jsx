import React from "react";

import { StyleSheet, ScrollView } from "react-native";

import { COLORS, dummyData, SIZES } from "../../../constants";
import RoundedCategory from "../../../components/RoundedCategory";

const RoundedCategories = () => {
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.roundedCatContainer}
		>
			{dummyData.categoriesData.map((category, id) => {
				return (
					<RoundedCategory
						key={id}
						image={category.image}
						text={category.text}
					/>
				);
			})}
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

export default RoundedCategories;
