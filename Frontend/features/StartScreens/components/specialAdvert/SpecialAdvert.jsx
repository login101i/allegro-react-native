import { TouchableOpacity,  } from "react-native";
import React from "react";
import {  Card } from "react-native-paper";

import {  CustomCover } from "./SpecialAdvert.styles";



export default function SpacialAdvert({ advert = {} }) {
	const { name = "Naveadvert", image = "../../../../assets/images/sale.png" } =
		advert;

	return (
		<TouchableOpacity>
			<Card elevation={2}>
				<CustomCover source={require("../../../../assets/images/sale.png")} />
			</Card>
		</TouchableOpacity>
	);
}
