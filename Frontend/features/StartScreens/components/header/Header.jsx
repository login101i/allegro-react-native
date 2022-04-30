import React from "react";
import { Flex, Textt } from "../../../../components";
import { StyledOpacity, Container } from "./Header.styles";
import { Ionicons } from "@expo/vector-icons";

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
        <Textt size={24} >
          Witaj Maciej !
        </Textt>
        <Flex width="40%">
          {headerIcons.map((icon, index) => (
            <StyledOpacity key={index}>
              <Ionicons name={icon.iconName} size={25} color="gray" />
            </StyledOpacity>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
