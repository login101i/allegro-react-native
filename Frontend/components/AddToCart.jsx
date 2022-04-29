import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";

import { Icon } from "react-native-elements";
import { Textt } from "../components";
import { Button } from "react-native";

import { CartContext } from "../services/cart/CartContext";

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
const Input = styled.TextInput`
	width: 40px;
	text-align: center;
	font-size: 20px;
`;

const BorderView = styled.View`
	border: 0.5px solid black;
	height: 45px;
	width: 45px;
	display: flex;na
	align-items: center;
	justify-content: center;
`;

const StyledIcon = styled(Icon)`
	text-align: center;
	color: white;
	height: 45px;
	width: 45px;
	border: 0.5px solid black;
`;

const AddToCart = ({ product, func = () => null, resetNumber = 1 }) => {
	const [number, setNumber] = useState(1);
	const [itemsCart, setItemsCart] = useState();

	useEffect(() => {
		func(number);
	}, [number]);

	useEffect(() => {
		if (number > 1) {
			setNumber(resetNumber);
		}
	}, [resetNumber]);

	const onChangeText = (text, e) => {
		if (number <= 0) return;
		setNumber(e.target.value);
	};

	const minus = () => {
		if (number === 0) return;
		setNumber(number - 1);
	};

	const plus = () => {
		if (number === product.stock) return;
		setNumber(number + 1);
	};

	return (
		<Container>
			<Container style={{ width: "200px" }}>
				<StyledIcon onPress={() => minus()} name="sc-telegram" />

				<BorderView>
					<Input
						onChangeText={onChangeText}
						value={number}
						style={{ color: "white" }}
					/>
				</BorderView>

				<StyledIcon onPress={() => plus()} name="sc-telegram" />
			</Container>
			<Textt>z {product.stock} sztuk</Textt>
		</Container>
	);
};

export default AddToCart;
