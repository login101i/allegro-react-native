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
	justify-content: flex-start;
	padding: ${(props) => props.theme.space[2]};
`;

const ProductPriceInfo = ({ product }) => {
	console.log(product);
	return (
		<>
			<MainContainer>
				<Container>
					{/* <Text variant="big">{product.price} zł</Text> */}
					<Text variant="body">Smart z kurierem</Text>
				</Container>

				<Text variant="hint">Zapłać mniej z payu</Text>
			</MainContainer>
			<Container>
				<Icon name="info" color="grey" />
				<Text style={{ color: COLORS.red }}>Dostawa w środę</Text>
				<Icon name="info" color="grey" />
			</Container>
		</>
	);
};

export default ProductPriceInfo;
