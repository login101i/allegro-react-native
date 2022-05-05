import React from "react";
import { Flex, Textt, Text } from "../../../../components";
import { StyledOpacity, Container } from "./Header.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../infrasctructure/theme";

import styled from "styled-components/native";

const Header = () => {
  const headerIcons = [
    { iconName: "md-home" },
    { iconName: "md-basket" },
    { iconName: "md-apps" }
  ];

  
  return (
    <Container>
      <Flex align space>
        <Text variant="title">Witaj Maciej !</Text>
        <Flex width="40%" center>
          {headerIcons.map((icon, index) => (
            <StyledOpacity key={index}>
              <Ionicons
                name={icon.iconName}
                size={25}
                color={colors.darkGray}
              />
            </StyledOpacity>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
