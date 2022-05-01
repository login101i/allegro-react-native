import React from "react";
import styled from "styled-components/native";
import { Image} from "react-native";



export const TabContainer = styled.View`
	width: auto;
	height: 28px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.backgroundColor};
	margin-right: 8px;
	padding: 2px 10px;
	border-radius: 2px;
`;

export const CustomImage = styled(Image)`
	width: 20px;
	height: 20px;
`;


