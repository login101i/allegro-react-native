// import React from "react";
// import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

// import { COLORS } from "../constants/theme";
// import { Textt } from "../components";

// const Category = ({
// 	icon,
// 	title,
// 	borderBottomColor,
// 	borderBottomWidth,
// 	borderLeftColor,
// 	borderLeftWidth,
// 	containerStyle,
// 	width = "25vw",
// 	height = 80,
// 	flexDirection = "column"
// }) => {
// 	return (
// 		<TouchableOpacity>
// 			<View
// 				style={{
// 					borderBottomColor,
// 					borderBottomWidth,

// 					borderLeftColor,
// 					borderLeftWidth,
// 					height,
// 					width,
// 					display: "flex",
// 					flexDirection,
// 					alignItems: "center",
// 					justifyContent: "flex-start",
// 					marginRight: 1
// 				}}
// 			>
// 				<Image
// 					source={icon}
// 					style={[
// 						{
// 							tintColor: COLORS.lightGray,
// 							width: 35,
// 							height: 35,
// 							padding: 14
// 						},
// 						containerStyle
// 					]}
// 				/>
// 				<Textt title={title} sieze={12} />
// 			</View>
// 		</TouchableOpacity>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center"
// 	}
// });

// export default Category;
