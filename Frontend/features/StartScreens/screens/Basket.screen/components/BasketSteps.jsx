import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { CartContext } from "../../../../../services/cart/CartContext";
import { Flex } from "../../../../../components";
const Step = styled.View`
  width: 23%;
  height: 4px;
  background-color: ${(props) =>
    props.val <= props.cartStep
      ? props.theme.colors.allegroColor
      : props.theme.colors.gray};
`;

export default function BasketStep() {
  const { cartStep } = useContext(CartContext);

  return (
    <Flex space>
      <Step cartStep={cartStep} val={1} />
      <Step cartStep={cartStep} val={2} />
      <Step cartStep={cartStep} val={3} />
      <Step cartStep={cartStep} val={4} />
    </Flex>
  );
}
