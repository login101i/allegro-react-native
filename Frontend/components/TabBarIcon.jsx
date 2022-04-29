import React from "react";
import { View, Text, Image } from "react-native";

import { COLORS, icons, FONTS } from "../constants";

export const TabBarIcon = ({ barTitle, icon, focused }) => {
	return (
		<View style={{ alignItems: "center", justifyContent: "center" }}>
			<Image
				source={icon}
				resizeMode="contain"
				style={{
					width: 30,
					height: 30,
					tintColor: focused ? COLORS.allegroColor : COLORS.lightGray
				}}
			/>
			<Text
				style={{
					color: focused ? COLORS.allegroColor : COLORS.lightGray,
					...FONTS.body5
				}}
			>
				{" "}
				{barTitle}
			</Text>
		</View>
	);
};

export default TabBarIcon;
