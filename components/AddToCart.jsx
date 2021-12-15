import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";

import { Icon } from "react-native-elements";
import { Text } from "./Text";
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

const AddToCart = ({ product, funkcja = () => null, resetNumber }) => {
	const [number, setNumber] = useState(1);
	const [itemsCart, setItemsCart] = useState();
	console.log(number);

	const { cart, addToCart } = useContext(CartContext);

	useEffect(() => {
		funkcja(number);
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
				<Icon
					onPress={() => minus()}
					name="sc-telegram"
					style={{
						textAlign: "center",
						color: "white",
						height: 45,
						width: 45,
						border: "0.5px solid black"
					}}
				/>

				<BorderView>
					<Input
						onChangeText={onChangeText}
						value={number}
						style={{ color: "white" }}
					/>
				</BorderView>

				<Icon
					onPress={() => plus()}
					name="sc-telegram"
					style={{
						textAlign: "center",
						color: "white",
						height: 45,
						width: 45,
						border: "0.5px solid black"
					}}
				/>
			</Container>
			<Text style={{ marginLeft: "10px" }}>z {product.stock} sztuk</Text>
		</Container>
	);
};

export default AddToCart;
