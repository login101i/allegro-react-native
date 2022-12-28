// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// import defaultStyles from "../config/styles";
// import { COLORS } from "../constants";

// export default function SimpleText({
// 	children,
// 	textColor = COLORS.lightGray,
// 	smallText = false,
// 	textAlign="left",
// 	title,
// 	subTitle,
// 	...otherProps
// }) {
// 	return (
// 		<View style={{ paddingVertical: "10px" }}>
// 			{smallText ? (
// 				<Text
// 					style={[
// 						defaultStyles.smalpcaalText,
// 						{ color: textColor, textAlign: textAlign },
// 						styles.flexRow,
// 					]}
// 					{...otherProps}
// 				>
// 					{children}
// 				</Text>
// 			) : (
// 				<Text
// 					style={[
// 						defaultStyles.text,
// 						{ color: textColor, textAlign: textAlign },
// 						styles.flexRow,
// 					]}
// 					{...otherProps}
// 				>
// 					{children}
// 				</Text>
// 			)}
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	flexRow: {
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		flexDirection: "row",
// 		width: "100%",
// 	},
// });
