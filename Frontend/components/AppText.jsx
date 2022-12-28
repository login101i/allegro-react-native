// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import defaultStyles from '../config/styles';
// import { COLORS } from '../constants';
// import Icon from '../components/Icon';

// export default function AppText({
// 	title,
// 	subTitle,
// 	textColor = COLORS.lightGray,
// 	center = false,
// 	widthh,
// 	icon,
// 	iconName,
// 	style,
// 	fontSize,
// 	...otherProps
// }) {
// 	return (
// 		<>
// 			<View style={[styles.container, center ? styles.center : {}, style]}>
// 				{title && (
// 					<Text
// 						style={[defaultStyles.text, { textTransform: 'uppercase' }, { color: textColor }, { fontSize: fontSize }]}
// 						{...otherProps}
// 					>
// 						{title}
// 					</Text>
// 				)}
// 				{icon && <Icon size={50} name={iconName} color={COLORS.yellow} />}
// 				{subTitle && (
// 					<Text style={[styles.subtitleText, { color: COLORS[textColor] }]} {...otherProps}>
// 						{subTitle}
// 					</Text>
// 				)}
// 			</View>
// 		</>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 5,
// 		flexDirection: 'row',
// 	},

// 	subtitleText: {
// 		fontWeight: '200',
// 		fontSize: 18,
// 	},
// 	center: {
// 		alignItems: 'center',
// 		display: 'flex',
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
