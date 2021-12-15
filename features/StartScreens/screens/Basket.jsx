import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, CheckBox } from "react-native";
import { Menu } from "react-native-paper";
import styled from "styled-components/native";

import { COLORS } from "../../../constants";
import AppText from "../../../components/AppText";
import Modal from "../components/Modal";
import BlackSpace from "../../../components/BlackSpace";
import { SafeArea } from "../../../components/SafeArea";
import Header from "../../../components/Header";

import { CartContext } from "../../../services/cart/CartContext";
import AddToCart from "../../../components/AddToCart";
import More from "../components/More";

export default function App({ navigation, route }) {
	// console.log(product.images[0].url);

	const ButtonsContainer = styled.View`
		position: absolute;
		bottom: 75px;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		border-top-color: ${COLORS.blackSpace},
		border-top-width: 1px;
		border-bottom-color:  ${COLORS.blackSpace},
		border-bottom-width: 1px;
		padding:5px;
	`;

	const FlexRow = styled.View`
		display: flex;
		flex-direction: row;
		flex-align: center;
	`;
	const FlexCol = styled(FlexRow)`
		flex-direction: column;
	`;

	const Image = styled.Image`
		width: 60px;
		height: 60px;
		object-fit: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 150px;
	`;
	const SpaceBetween = styled(FlexRow)`
		justify-content: space-between;
	`;

	const { cart, addToCart } = useContext(CartContext);
	console.log(cart);

	const addToBasket = (product, nb) => {
		addToCart(product, nb);
		setModal(true);
		setResetNumber(1);
	};

	const changeModal = () => {
		setModal(!modal);
		const random = Math.random();
		setResetNumber(random);
	};

	const policzIle = (ilosc) => {
		setNumber(ilosc);
	};

	return (
		<>
			{cart.map(({ item }) => (
				<SafeArea key={item.name}>
					<Header goBack={() => navigation.navigate("StartScreen")} />

					<FlexRow>
						<CheckBox />
						<Text>Sprzedający</Text>
					</FlexRow>
					<SpaceBetween>
						<CheckBox />
						<Text>Nazwa produktu</Text>
						<More product={item} />
					</SpaceBetween>
					<FlexRow>
						<Image />
					</FlexRow>
					<Text>Darmowa Dostawa z smart</Text>
					<Text>Inne przedmioty sprzedającego</Text>
					<BlackSpace />
				</SafeArea>
			))}
		</>
	);
}
