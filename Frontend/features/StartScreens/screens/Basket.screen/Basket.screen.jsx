import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, CheckBox } from "react-native";
import styled from "styled-components/native";
import { COLORS } from "../../../../constants";
import Header from "../../components/header/Header";
import { Flex, AppButton } from "../../../../components";
import { CartContext } from "../../../../services/cart/CartContext";
import BasketItem from "./components/BasketItem/BasketItem";

export default function App({ navigation, route }) {
  // console.log(product.images[0].url);

  const ButtonsContainer = styled.View`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 30;

    background-color: ${COLORS.white};
  `;

  const { cart, addCartStep, cartStep } = useContext(CartContext);


  return (
    <>
      <Header
        goBack={() => navigation.navigate("StartScreen")}
        title="Twój koszyk"
        headerBottom
        cartStep={cartStep}
      />
      <ScrollView style={{ width: "100%", height: "100%" }}>
        {cart.map((item) => (
          <BasketItem key={Math.random()} item={item} />
        ))}
      </ScrollView>

      <ButtonsContainer>
        <Flex space>
          <AppButton
            width="40%"
            buttonColor={COLORS.white}
            onPress={() => console.log("Pressed")}
            color={COLORS.linkColor}
            title="Kup teraz"
          />

          <AppButton
            buttonColor={COLORS.allegroColor}
            color={COLORS.white}
            onPress={() => addCartStep()}
            title="Do koszyka"
            width="40%"
          />
        </Flex>
      </ButtonsContainer>
    </>
  );
}
