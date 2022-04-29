import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../../constants/theme";


import ProductContainer from "../../../components/ProductContainer";
import { Textt } from "../../../components";

const ModalContainer = styled.View`
	width: 100%;
	background: white;
	bottom: 120;
	left: 0;
	right: 0;
	z-index: 111;
	background: ${COLORS.white};
	position: -webkit-sticky;
	position: sticky;
	bottom: 90;
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
							}}
						>
							<Ionicons name="md-basket" size={22} />
						</Button>
						<Textt size={16}>Product został dodany do koszyka</Textt>
					</TitleContainer>
					<ProductContainer product={product} />
				</ModalContainer>
			)}
		</>
	);
};

export default ModalCart;
