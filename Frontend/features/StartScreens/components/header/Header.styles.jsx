import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../../../constants/theme";

export const Container = styled.View`
  padding: 5px 20px;
  width: 100%;
`;

export const StyledOpacity = styled(TouchableOpacity)`
  width: auto;
  height: 35px;
  tintcolor: ${COLORS.lightGray};
  margin-left: 25px;
`;
