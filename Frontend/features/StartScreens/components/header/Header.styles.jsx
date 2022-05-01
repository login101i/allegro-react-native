import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";
import { colors } from "../../../../infrasctructure/theme";
export const Container = styled.View`
  padding: 5px 20px;
  width: 100%;
`;

export const StyledOpacity = styled(TouchableOpacity)`
  width: auto;

  tintcolor: ${colors.lightGray};
  margin-left: 25px;
`;
