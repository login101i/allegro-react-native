import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS } from "../../../constants/theme";

import ProductContainer from "../../../components/ProductContainer";
import { Textt, Flex, AppButton } from "../../../components";
import { ButtonsContainer } from "../screens/ProductDetails.screen/ProductDetailsScreen.styles";

const ModalContainer = styled.View`
  width: 100%;
  background: white;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111;
  background: ${COLORS.white};
  position: absolute;
  z-index: 21;
  min-height: 300px;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  position: relative;
`;

const Button = styled.Pressable`
  position: absolute;
  top: 0px;
  left: 10px;
  z-index: 112;
`;

const ModalCart = ({ product, modal, changeModal }) => {
  const navigation = useNavigation();

  return (
    <>
      {modal && (
        <ModalContainer>
          <TitleContainer>
            <Button
              onPress={() => {
                changeModal();
              }}
            >
              <Ionicons name="md-basket" size={22} />
            </Button>
            <Textt size={16}>Product został dodany do koszyka</Textt>
          </TitleContainer>
          <ProductContainer product={product} />
          <ButtonsContainer>
            <Flex space>
              <AppButton
                width="40%"
                buttonColor={COLORS.white}
                onPress={changeModal}
                color={COLORS.linkColor}
                title="Kupuj dalej"
                uppercase
              />

              <AppButton
                buttonColor={COLORS.allegroColor}
                color={COLORS.white}
                onPress={() => navigation.navigate("Koszyk")}
                title="Idź do koszyka"
                width="40%"
                uppercase
              />
            </Flex>
          </ButtonsContainer>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalCart;
