import React, { useContext } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrasctructure/theme";
import styled from "styled-components/native";

import { Flex, Spacer } from "../components";

export const Container = styled.View`
  padding: 5px 20px;
  width: 100%;
`;

export const HeaderIcons = () => {
  // const [state, setState] = useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container>
        <Flex>
          <TouchableOpacity onPress={() => console.log("navigate")}>
            <Spacer position="right" size="big">
              <Ionicons name="md-star" size={25} color={colors.darkGray} />
            </Spacer>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("navigate")}>
            <Spacer position="right" size="big">
              <Ionicons name="md-search" size={25} color={colors.darkGray} />
            </Spacer>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("navigate")}>
            <Spacer>
              <Ionicons name="md-camera" size={25} color={colors.darkGray} />
            </Spacer>
          </TouchableOpacity>
        </Flex>
      </Container>
    </SafeAreaView>
  );
};
