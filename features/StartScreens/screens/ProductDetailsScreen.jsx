import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Slider from "../../../components/Sider";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { COLORS } from "../../../constants";
import AppText from "../../../components/AppText";
import Header from "../../../components/Header";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import ProductPriceInfo from "../components/ProductPriceInfo";
import AddToCart from "../../../components/AddToCart";
import BlackSpace from "../../../components/BlackSpace";
import ModalCart from "../components/Modal";

import { CartContext } from "../../../services/cart/CartContext";

export default function App({ navigation, route }) {
	const [number, setNumber] = useState(1);
	const [resetNumber, setResetNumber] = useState();
	const [modal, setModal] = useState(false);
	const { product } = route.params;
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

	const { cart, addToCart } = useContext(CartContext);

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
			<ScrollView style={[{ backgroundColor: COLORS.backgroundColor }]}>
				<Header goBack={() => navigation.navigate("StartScreen")} />

				{/* <Slider
				style={{ paddingTop: 56, backgroundColor: "white" }}
				images={product.images}
			/> */}

				<ProductDetailsInfo product={product} />
				<ProductPriceInfo product={product} />
				<AddToCart
					product={product}
					funkcja={policzIle}
					resetNumber={resetNumber}
					modal={modal}
				/>
				<BlackSpace />
				<ModalCart product={product} modal={modal} changeModal={changeModal} />

				<View style={[{ backgroundColor: COLORS.backgroundColor, flex: 1 }]}>
					<AppText title="Tytuł" />
					<AppText title="Cena" />
				</View>
			</ScrollView>
			<ButtonsContainer>
				<Button
					style={{ width: "50%", backgroundColor: COLORS.backgroundColor }}
					onPress={() => console.log("Pressed")}
					color={COLORS.linkColor}
				>
					KUPUJĘ I PŁACĘ
				</Button>
				<Button
					style={{ width: "50%", backgroundColor: COLORS.allegroColor }}
					mode="contained"
					onPress={() => addToBasket(product, number)}
				>
					DO KOSZYKA
				</Button>
			</ButtonsContainer>
		</>
	);
}
