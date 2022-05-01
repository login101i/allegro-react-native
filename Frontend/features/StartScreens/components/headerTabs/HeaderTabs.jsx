import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Flex, Textt, ImageComponent, Spacer } from "../../../../components";
import { TabContainer } from "./HeaderTabs.styles";
import { COLORS } from "../../../../constants";
import { tabInfo } from "../../../../infrasctructure/dummy";

const HeaderTabs = () => {
  return (
    <Spacer position="left" size="medium">
      <Flex>
        {tabInfo.map((tab) => (
          <TabContainer backgroundColor={tab.backgroundColor} key={tab.title}>
            <Textt color={COLORS.lightGray} textAlign>
              {tab.title}
            </Textt>
            <ImageComponent img={tab.image} size={20} />
          </TabContainer>
        ))}
      </Flex>
    </Spacer>
  );
};

export default HeaderTabs;
