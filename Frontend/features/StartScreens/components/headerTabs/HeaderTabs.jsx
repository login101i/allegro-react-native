import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Flex, Textt, ImageComponent } from "../../../../components";
import { Container, TabContainer } from "./HeaderTabs.styles";
import { COLORS } from "../../../../constants";
import { tabInfo } from "../../../../infrasctructure/dummy";

const HeaderTabs = () => {
	return (
		<Container>
			<Flex>
				{tabInfo.map((tab) => (
					<TabContainer backgroundColor={tab.backgroundColor} key={tab.title}>
						<Textt color={COLORS.lightGray} textAlign>{tab.title}</Textt>
						<ImageComponent img={tab.image} size={20}/>
					</TabContainer>
				))}
			</Flex>
		</Container>
	);
};

export default HeaderTabs;
