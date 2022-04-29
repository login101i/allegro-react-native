import React, { useContext } from "react";
import styled from "styled-components/native";

import { COLORS } from "../../constants";
import Space from "../../components/BlackSpace";
import { SafeArea } from "../../components/SafeArea";
import Header from "../../components/Header";
import { CartContext } from "../../services/cart/CartContext";
import More from "../StartScreens/components/More";
import { Flex, Textt } from "../../components";

export default function Basket({ navigation, route }) {
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

	const Image = styled.Image`
		width: 60px;
		height: 60px;
		object-fit: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 150px;
	`;

	const { cart, addToCart } = useContext(CartContext);

	return (
		<SafeArea key={item.name}>
			<Header goBack={() => navigation.navigate("StartScreen")} />
			{cart.map(({ item }) => (
				<>
					<Flex>
						<CheckBox />
						<Textt>Sprzedający</Textt>
					</Flex>
					<Flex spacd>
						<CheckBox />
						<Textt>Nazwa produktu</Textt>
						<More product={item} />
					</Flex>
					<Flex>
						<Image />
					</Flex>
					<Textt>Darmowa Dostawa z smart</Textt>
					<Textt>Inne przedmioty sprzedającego</Textt>
					<Space />
				</>
			))}
		</SafeArea>
	);
}
