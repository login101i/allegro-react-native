import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { COLORS } from "../../../constants/theme";

import { Alert, Modal, StyleSheet, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import ProductContainer from "../../../components/ProductContainer";
import { Text } from "../../../components/Text";

const ModalContainer = styled.View`
	width: 100%;
	background: white;
	position: fixed;
	bottom: 120;
	left: 0;
	right: 0;
	z-index: 111;
	background: ${COLORS.backgroundColor};
`;

const TitleContainer = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	text-align: center;
	width: 100%;
	position: relative;
`;

const Button = styled.Pressable`
	position: absolute;
	top: 0px;
	left: 10px;
	z-index: 112;
`;

const ModalCart = ({ product, modal, changeModal }) => {
	const [modalVisible, setModalVisible] = useState(modal);
	console.log("modal", modal);
	console.log("modalVisible", modalVisible);

	useEffect(() => {
		setModalVisible(modal);
	}, [modal]);

	return (
		<>
			{modalVisible && (
				<ModalContainer>
					<TitleContainer>
						<Button
							onPress={() => {
								setModalVisible(!modalVisible);
								changeModal();

								console.log("close");
							}}
						>
							<Icon name="bulb" color="black" />
						</Button>
						<Text variant="title">Product został dodany do koszyka</Text>
					</TitleContainer>
					<ProductContainer product={product} />
				</ModalContainer>
			)}
		</>
	);
};

export default ModalCart;
