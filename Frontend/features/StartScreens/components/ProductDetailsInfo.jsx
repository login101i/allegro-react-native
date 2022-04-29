import React from "react";

import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { Textt, Flex } from "../../../components";

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

	return (
		<MainContainer>
			<Flex>
				<Counter>
					<Textt >
						{product.images.length}/{product.images.length}
					</Textt>
				</Counter>
				<Icon name="star" color="#00a790" />
			</Flex>
			<Textt>{product.name}</Textt>
			<Flex>
				<Textt >{product.ratings}</Textt>
				<Flex>
					{addStar().map((star) => (
						<Icon name="star" color={COLORS.allegroColor} key={Math.random()} />
					))}
				</Flex>
				<Textt>{product.numOfReviews} ocen produktu</Textt>
			</Flex>
		</MainContainer>
	);
};

export default ProductDetailsInfo;
