import React from "react";
import {
	StyleSheet,
	View,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Textt } from "../components";
import styled from "styled-components/native";

import { COLORS } from "../constants";

const ButtonContainer = styled.View`
width:70%;
height:36px;
align-items:center;
justify-content:center;
border-radius:4px; 
margin-vertical:2px;
margin-horizontal:5px;
flex-direction:row;
border: ${(props) => (props.border ? props.border : "none")}
margin-vertical:6px;
cursor:pointer;
background-color:${(props) =>
	props.buttonColor ? props.buttonColor : "transparent"}

`;

export const AppButton = ({
	title,
	buttonColor = COLORS.darkGray,
	onPress,
	textColor = "lightGray",
	iconName,
	smallLetters,
	fontSize = "30",
	color,
	border
}) => {
	return (
		<ButtonContainer buttonColor={buttonColor} border={border}>
			<TouchableOpacity onPress={onPress}>
				<MaterialCommunityIcons name={iconName} color="white" size={25} />
				<Textt color={color}>{title}</Textt>
			</TouchableOpacity>
		</ButtonContainer>
	);
};
