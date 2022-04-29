


import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import SmartImage from "../assets/images/Smart.svg";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "./AppText";
import AppTextInput from "./TextInput";
import {Flex} from '../components'

const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: flex-start;
	alignitems: center;
	width: 100%;
	min-width: 80px;
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
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const OldPrice = styled.div`
	color: black;
	text-decoration: line-through;
	font-size: 14px;
`;

const FlexRow = styled.div`
	display: flex;
`;
const Price = styled.div`
	font-size: 22px;
	font-weight: 600;
	color: black;
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
	height: 180px;
	width: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Image = styled.img`
	width: 90%;
	object-fit: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 150px;
`;

const Description = styled.div`
	text-decoration: uppercase;
	font-size: 14px;
	color: black;
	margin-top: 6px;
`;

const Text = styled.div`
	color: black;
	font-size: 14px;
	margin-left: -10px;
`;

const ProductContainer = ({ product, onPress, productList = false }) => {
	const {
		images,
		name,
		description,
		oldPrice = "100",
		newPrice = "99",
		price,
		discount = "0"
	} = product;
	if (productList) {
		return (
			<TouchableWithoutFeedback
				style={{
					flexDirection: "row",
					display: "flex",
					height: "auto",
					alignItems: "center"
				}}
				onPress={onPress}
			>
				<ImageContainer>
					<Image src={images[0].url} />
				</ImageContainer>
				<SectionInfo>
					<AppTextInput title={name} />
					<Description>{description}</Description>

					<Flex>
						<Discount>-{discount} %</Discount>
						<OldPrice>{oldPrice} zł</OldPrice>
					</Flex>
					<Price>{price} zł</Price>
					<Description />
					<Flex>
						<AppText title="Smart" style={{ marginRight: "6px" }} />
						<Text> z kurierem</Text>
					</Flex>
				</SectionInfo>
				<MaterialCommunityIcons
					name="star"
					color={COLORS.black}
					size={25}
					style={{ marginBottom: "70px" }}
				/>
			</TouchableWithoutFeedback>
		);
	} else
		return (
			<TouchableWithoutFeedback
				style={{
					flexDirection: "row",
					display: "flex",
					height: "auto",
					alignItems: "center"
				}}
				onPress={onPress}
			>
				<SectionContainer>
					<ImageContainer>
						<Image src={images[0].url} />
					</ImageContainer>
					<SectionInfo>
						<Flex style={{ justifyContent: "left", alignItems: "center" }}>
							<Discount>-{discount} %</Discount>
							<OldPrice>{oldPrice} zł</OldPrice>
						</Flex>
						<Price>{price} zł</Price>
						<Description />
						<Flex>
							<Smart src={SmartImage} />
							<Text>z kurierem</Text>
						</Flex>

						<Description>{description.substring(0, 20) + "..."}</Description>
					</SectionInfo>
				</SectionContainer>
			</TouchableWithoutFeedback>
		);
};

export default ProductContainer;
