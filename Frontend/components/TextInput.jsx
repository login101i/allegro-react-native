import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Platform,
	Keyboard
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import defaultStyles from "../config/styles";

export default function AppTextInput({
	icon,
	color = COLORS.white,
	size = 44,
	width = "100%",
	...otherProps
}) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					color={color}
					size={size}
				/>
			)}
			<TextInput
				style={([defaultStyles.text], { color: "white" }, { width })}
				onSubmitEditing={Keyboard.dismiss}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 2,
		flexDirection: "row",
		width: "100%",
		padding: 2,
		marginVertical: 2,
		borderBottomColor: COLORS.black,
		borderBottomWidth: 2
	},
	icon: {
		marginRight: 10
	}
});
