import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

import { COLORS, SIZES } from "../../../constants/theme";
import { Textt, Flex } from "../../../components";

const CategoryContainer = styled.View`
height:${(props) => props.height};
width:${(props) => props.width};
 border-bottom-width:${(props) => props.borderBottomWidth};
border-bottom-color:${(props) => props.borderBottomColor};

height:${(props) => props.height}
diplay:flex;
flex-direction:${(props) => (props.flexDirection ? "column" : "row")}
justify-content: flex-start;
align-items:center;
`;

const Category = ({
	icon,
	title,
	borderBottomColor,
	borderBottomWidth,
	borderLeftColor,
	borderLeftWidth,
	containerStyle,
	width = "25vw",
	height = 80,
	flexDirection = "column"
}) => {
	return (
		<TouchableOpacity>
			<CategoryContainer
				flexDirection={flexDirection}
				borderBottomColor={borderBottomColor}
				borderBottomWidth={borderBottomWidth}
				borderLeftColor={borderLeftColor}
				borderLeftWidth={borderLeftWidth}
				width={width}
				height={height}
			>
				<Image
					source={icon}
					style={[
						{
							tintColor: COLORS.lightGray,
							width: 35,
							height: 35,
							padding: 14
						},
						containerStyle
					]}
				/>
				<Textt size={12} color="gray">
					{title}
				</Textt>
			</CategoryContainer>
		</TouchableOpacity>
	);
};

export default Category;
