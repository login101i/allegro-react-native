import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Image} from 'react-native'

import SmartImage from "../assets/images/Smart.svg";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "./AppText";

const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: flex-start;
	alignitems: center;
	width: 100%;
	min-width: 80px;
	background: ${COLORS.backgroundColor};
`;

const SectionInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 20px;
`;
const Discount = styled.div`
	background: #0f7b1e;
	height: 16px;
	padding: 4px 5px;
	margin-right: 10px;
	color: #dbdbdb;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const OldPrice = styled.div`
	color: #dbdbdb;
	text-decoration: line-through;
	font-size: 14px;
`;

const FlexRow = styled.div`
	display: flex;
`;
const Price = styled.div`
	font-size: 28px;
	font-weight: 600;
	color: #dbdbdb;
`;
const Smart = styled.img`
	color: purple;
	height: 18px;
	display: flex;
	align-items: left;
	width: 100px;
	margin-left: -15px;
`;

const ImageContainer = styled.div`
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
// const Image = styled.img`
// 	width: 100px;
// 	object-fit: cover;
// 	margin: 0 15px;
// `;

const Description = styled.div`
	text-decoration: uppercase;
	font-size: 14px;
	color: #dbdbdb;
	margin-top: 6px;
`;

const Text = styled.div`
	color: #dbdbdb;
	font-size: 14px;
	margin-left: -10px;
`;

const ProductContainer = ({
	imageUrl,
	discount,
	oldPrice,
	price,
	description,
	productList = false,
	onPress,
}) => {
	if (productList) {
		return (
			<TouchableWithoutFeedback
				style={{
					flexDirection: "row",
					display: "flex",
					height: "auto",
					alignItems: "center",
				}}
				onPress={onPress}
			>
				<ImageContainer>
					<Image source={{ uri: imageUrl }} />
				</ImageContainer>
				<SectionInfo>
					<Description>{description}</Description>

					<FlexRow style={{ justifyContent: "left", alignItems: "center" }}>
						<Discount>-{discount} %</Discount>
						<OldPrice>{oldPrice} zł</OldPrice>
					</FlexRow>
					<Price>{price} zł</Price>
					<Description />
					<FlexRow>
						<AppText title="Smart" style={{ marginRight: "6px" }} />
						<Text> z kurierem</Text>
					</FlexRow>
				</SectionInfo>
				<MaterialCommunityIcons
					name="star"
					color={COLORS.gray}
					size={25}
					style={{ marginBottom: "70px" }}
				/>
			</TouchableWithoutFeedback>
		);
	} else
		return (
			<SectionContainer>
				<ImageContainer>
					<Image source={{ uri: imageUrl }} />
				</ImageContainer>
				<SectionInfo>
					<FlexRow style={{ justifyContent: "left", alignItems: "center" }}>
						<Discount>-{discount} %</Discount>
						<OldPrice>{oldPrice} zł</OldPrice>
					</FlexRow>
					<Price>{price} zł</Price>
					<Description />
					<FlexRow>
						<Smart src={SmartImage} />
						<Text>z kurierem</Text>
					</FlexRow>

					<Description>{description}</Description>
				</SectionInfo>
			</SectionContainer>
		);
};

export default ProductContainer;
