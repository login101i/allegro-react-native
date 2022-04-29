import React from "react";
import { Flex, Textt } from "../../../../components";
import { StyledOpacity, Container } from "./Header.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import styled from "styled-components/native";

const Header = () => {
	const headerIcons = [
		{ iconName: "md-home" },
		{ iconName: "md-basket" },
		{ iconName: "md-apps" }
	];
	return (
		<Container>
			<Flex space align>
				<Textt size={20} bold>
					Witaj Maciej !
				</Textt>
				<Flex center>
					{headerIcons.map((icon, index) => (
						<StyledOpacity key={index}>
							<Ionicons name={icon.iconName} size={30} color="gray" />
						</StyledOpacity>
					))}
				</Flex>
			</Flex>
		</Container>
	);
};

export default Header;
