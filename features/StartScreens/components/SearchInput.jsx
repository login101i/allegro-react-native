import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Image, View, StyleSheet, TextInput } from "react-native";

import { COLORS, dummyData, icons, images, SIZES } from "../../../constants";

const SearchContainer = styled.View`
	padding: 20px;
`;

const SearchInput = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	return (
		<>
			<SearchContainer>
				<Searchbar
					icon={"heart"}
					placeholder="Czego szukasz?"
					onChangeText={(text) => {
						setSearchKeyword(text);
					}}
					value={searchKeyword}
					onSubmitEditing={() => null}
				/>
			</SearchContainer>
		</>
	);
};

export default SearchInput;
