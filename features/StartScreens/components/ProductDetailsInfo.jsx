import React from "react";

import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { Text } from "../../../components/Text";

import { View } from "react-native";
import { COLORS } from "../../../constants/theme";

const MainContainer = styled.View`
	padding: ${(props) => props.theme.space[2]};
	display: flex;
	justify-content: space-between;
	border-bottom-color: grey;
	border-bottom-width: 2px;
	width: 100%;
`;

const Container = styled.View`
	display: flex;
	flex-direction: row;

	align-items: center;
	padding: ${(props) => props.theme.space[2]};
`;

const Counter = styled.View`
	background: grey;
	padding: 5px;
`;

const ProductDetailsInfo = ({ product }) => {
	const addStar = (rating) => {
		var array = [];
		for (var i = 0; i < product.ratings; i++) {
			array = [...array, i];
		}
		return array;
	};

	console.log("To jest produkt", product);
	return (
		<MainContainer>
			<Container style={{ justifyContent: "space-between" }}>
				<Counter>
					<Text variant="body">
						{product.images.length}/{product.images.length}
					</Text>
				</Counter>
				<Icon name="star" color="#00a790" />
			</Container>

			<Text variant="hint">{product.name}</Text>

			<Container>
				<Text variant="hint">{product.ratings}</Text>
				<Container>
					{addStar().map((star) => (
						<Icon name="star" color={COLORS.allegroColor} key={Math.random()} />
					))}
				</Container>
				<Text variant="hint">{product.numOfReviews} ocen produktu</Text>
			</Container>
		</MainContainer>
	);
};

export default ProductDetailsInfo;
