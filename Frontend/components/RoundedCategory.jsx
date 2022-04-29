import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { Textt } from "../components";
import { COLORS } from "../constants";

const ImgContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 26vw;
	padding: 5px;
`;

const StyledImage = styled(Image)`
	width: 88px;
	height: 88px;
`;

const RoundedCategory = ({ image, text }) => {
	return (
		<ImgContainer>
			<StyledImage source={image} />
			<Textt size={14} color={COLORS.grey} wrap textAlign>
				{text}
			</Textt>
		</ImgContainer>
	);
};

export default RoundedCategory;
