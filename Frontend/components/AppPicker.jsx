import React, { useState } from "react";
import { StyleSheet, View, Modal, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants";

import defaultStyles from "../config/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {AppButton} from "../components";
import SimpleText from "../components/SimpleText";
import Screen from "../screens/Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
	icon,
	items,
	color = "#0c0c0c",
	size = 44,
	numColumns = 1,
	onSelectItem,
	placeholder,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = "100%",
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback
				onPress={() => {
					setModalVisible(true), console.log("hah");
				}}
			>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.iconka}
							name={icon}
							color={color}
							size={size}
						/>
					)}
					{selectedItem ? (
						<SimpleText textColor={defaultStyles.COLORS.darkGray}>
							{selectedItem.label}
						</SimpleText>
					) : (
						<SimpleText textColor={defaultStyles.COLORS.darkGray}>
							{placeholder}
						</SimpleText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						color={COLORS.dark}
						size={32}
						style={styles.arrowDown}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<FlatList
						data={items}
						numColumns={numColumns}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
					<AppButton
						title="zamknij"
						onPress={() => {
							setModalVisible(false), console.log("zamykam");
						}}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	arrowDown: {
		marginLeft: "auto",
	},
	container: {
		backgroundColor: defaultStyles.COLORS.lightGrey,
		borderRadius: 25,
		flexDirection: "row",
		// width: '100%',
		padding: 10,
		marginVertical: 10,
		alignItems: "center",
	},
	text: {
		flex: 1,
		marginLeft: 44,
	},
	placeholder: {
		color: defaultStyles.COLORS.purple,
		flex: 1,
	},
	iconka: {
		marginRight: 10,
	},
});
