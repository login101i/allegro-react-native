import React, { useContext } from "react";
import { Flex, Text } from "../../../../components";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../infrasctructure/theme";
import { AuthenticationContext } from "../../../../services/authentication/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { StyledOpacity, Container } from "./Header.styles";

const Header = ({navigation}) => {
  const { state, setState } = useContext(AuthenticationContext);

  const headerIcons = [
    { iconName: "md-home" },
    { iconName: "md-basket" },
    { iconName: "md-apps" }
  ];

  return (
    <Container>
      <Flex align space>
        <Text variant="title">
          {state.user?.name ? "Witaj " + state.user.name : "Witaj"} !
        </Text>
        <Flex width="40%" center>
          {headerIcons.map((icon, index) => (
            <StyledOpacity key={index}>
              <Ionicons
                name={icon.iconName}
                size={25}
                color={colors.darkGray}
                onClick={async () => {
                  await AsyncStorage.removeItem("@auth");
                  setState({ user: null, token: "" });
                  navigation.navigate("Login");
                }}
              />
            </StyledOpacity>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
