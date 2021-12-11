import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import AppText from "../components/AppText";

const Category = ({
	icon,
	title,
	borderBottomColor,
	borderBottomWidth,
	borderLeftColor,
	borderLeftWidth,
	containerStyle,
	width = "25vw",
	height = 80,
	flexDirection = "column"
}) => {
	return (
		<TouchableOpacity>
			<View
				style={{
					borderBottomColor,
					borderBottomWidth,

					borderLeftColor,
					borderLeftWidth,
					height,
					width,
					display: "flex",
					flexDirection,
					alignItems: "center",
					justifyContent: "flex-start",
					marginRight: 1
				}}
			>
				<Image
					source={icon}
					style={[
						{
							tintColor: COLORS.lightGray,
							width: 35,
							height: 35,
							padding: 14
						},
						containerStyle
					]}
				/>
				<AppText
					style={{
						fontSize: SIZES.medium,
						color: COLORS.lightGray,
						textAlign: "center"
					}}
					title={title}
					fontSize={12}
				/>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default Category;
