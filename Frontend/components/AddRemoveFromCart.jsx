import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Icon } from "react-native-elements";
import { Textt } from ".";
import { Button } from "react-native";

import { CartContext } from "../services/cart/CartContext";

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  width: 100%;
`;
const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
`;
const Input = styled.TextInput`
  width: 40px;
  text-align: center;
  font-size: 20px;
  ${FlexCenter}
`;

const BorderView = styled.View`
  border: 0.5px solid black;
  height: 45px;
  width: 45px;
  ${FlexCenter}
`;

const StyledIcon = styled(Ionicons)`
  text-align: center;
  color: black;
  height: 45px;
  width: 45px;
  font-size:30px
  border: 0.5px solid black;
  ${FlexCenter}

`;

const AddRemoveFromCart = ({
  product = null,
  func = () => null,
  resetNumber = 1,
  orderedNumber
}) => {
  const [number, setNumber] = useState(orderedNumber || 1);
  const [itemsCart, setItemsCart] = useState();

  useEffect(() => {
    func(number);
  }, [number]);

  useEffect(() => {
    if (number > 1 && orderedNumber === undefined) {
      setNumber(resetNumber);
    }
  }, [resetNumber]);

  const onChangeText = (text, e) => {
    if (number <= 0) return;
    setNumber(e.target.value);
  };

  const minus = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  const plus = () => {
    if (number === product.stock) return;
    setNumber(number + 1);
  };

  return (
    <Container>
      <Container style={{ width: "200px" }}>
        <StyledIcon onPress={() => minus()} name="remove-outline" />

        <BorderView>
          <Input
            onChangeText={onChangeText}
            value={number}
            style={{ color: "black" }}
          />
        </BorderView>

        <StyledIcon onPress={() => plus()} name="add-outline" />
      </Container>
      {product?.stock && <Textt>z {product.stock} sztuk</Textt>}
    </Container>
  );
};

export default AddRemoveFromCart;
