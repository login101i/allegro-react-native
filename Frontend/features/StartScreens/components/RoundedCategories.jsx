import React from "react";

import { StyleSheet, ScrollView } from "react-native";

import { dummyData } from "../../../constants";
import {RoundedCategory} from "../../../components/RoundedCategory/RoundedCategory";

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
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "left"
	}
});

export default RoundedCategories;
