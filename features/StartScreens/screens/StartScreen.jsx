import React from "react";
import { ScrollView, View } from "react-native";

import BlackSpace from "../../../components/BlackSpace";
import { COLORS } from "../../../constants";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import RoundedCategories from "../components/RoundedCategories";
import Timer from "../components/Timer";
import WeekOcasions from "../components/WeekOcasions";

const StartScreen = ({ navigation }) => {
	return (
		<ScrollView>
			<View
				style={{
					display: "flex",
					flex: 1,
					paddingBottom: 130,
					backgroundColor: COLORS.backgroundColor,
					color: "white",
					height: "100%"
				}}
			>
				<Header />
				<SearchInput />
				<Categories />
				<BlackSpace />
				<Banner />
				<BlackSpace />
				<RoundedCategories />
				<BlackSpace />
				<Timer />
				<WeekOcasions navigation={navigation} />
			</View>
		</ScrollView>
	);
};

export default StartScreen;
