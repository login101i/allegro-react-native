import React from "react";
import styled from "styled-components/native";
import { Appbar } from "react-native-paper";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS, dummyData, icons, images, SIZES } from "../constants";

// const Icons = styled.View`
// 	display: flex;slid
// 	align-items: center;
// 	justify-content: center;
// `;

const Header = ({ goBack }) => {
	const _goBack = () => console.log("Went back");

	const _handleSearch = () => console.log("Searching");

	const _handleMore = () => console.log("Shown more");

	return (
		<>
			<Appbar.Header style={{ backgroundColor: COLORS.backgroundColor }}>
				<Appbar.BackAction onPress={goBack} />
				<Appbar.Content />

				<Appbar.Action icon="share-variant" onPress={_handleMore} />
				<Appbar.Action icon="find-replace" onPress={_handleSearch} />
				<Appbar.Action icon="shopping" onPress={_handleMore} />
			</Appbar.Header>
		</>
	);
};

export default Header;
