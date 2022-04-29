import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

import { COLORS, dummyData, SIZES } from "../../../../constants";

import Category from "../../components/Category";
import { Textt, BorderAndTitle } from "../../../../components";

const Categories = () => {
	return (
		<>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
			<BorderAndTitle title="Kategorie"  />
		</>
	);
};

export default Categories;
