import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, CheckBox } from "react-native";
import { Menu } from "react-native-paper";
import styled from "styled-components/native";

import { COLORS } from "../../../../constants";
import AppText from "../../../../components/AppText";
import Modal from "../../components/Modal";
import BlackSpace from "../../../../components/BlackSpace";
import { SafeArea } from "../../../../components/SafeArea";
import Header from "../../../../components/Header";
import { Flex, AppButton } from "../../../../components";

import { CartContext } from "../../../../services/cart/CartContext";
import AddToCart from "../../../../components/AddRemoveFromCart";
import More from "../../components/More";
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

  const FlexRow = styled.View`
    display: flex;
    flex-direction: row;
    flex-align: center;
  `;
  const FlexCol = styled(FlexRow)`
    flex-direction: column;
  `;

  const Image = styled.Image`
    width: 60px;
    height: 60px;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 150px;
  `;
  const SpaceBetween = styled(FlexRow)`
    justify-content: space-between;
  `;

  const { cart, addCartStep, cartStep } = useContext(CartContext);
  console.log("🚀 ~ file: Basket.screen.jsx ~ line 55 ~ App ~ cart", cart);

  const addToBasket = (product, nb) => {
    addToCart(product, nb);
    setModal(true);
    setResetNumber(1);
  };

  const changeModal = () => {
    setModal(!modal);
    const random = Math.random();
    setResetNumber(random);
  };

  const policzIle = (ilosc) => {
    setNumber(ilosc);
  };

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
          <BasketItem key={item.item.id} item={item} />
        ))}
      </ScrollView>

      {/* {cart.map(({ item }) => (
        <SafeArea key={item.name}>
          <FlexRow>
            <CheckBox />
            <Text>Sprzedający</Text>
          </FlexRow>
          <SpaceBetween>
            <CheckBox />
            <Text>Nazwa produktu</Text>
            <More product={item} />
          </SpaceBetween>
          <FlexRow>
            <Image />
          </FlexRow>
          <Text>Darmowa Dostawa z smart</Text>
          <Text>Inne przedmioty sprzedającego</Text>
          <Text>Inne przedmioty sprzedającego</Text>
          <BlackSpace />
        </SafeArea>
      ))} */}
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
