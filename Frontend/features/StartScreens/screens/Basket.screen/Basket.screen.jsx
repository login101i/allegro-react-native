import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, CheckBox } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../../infrasctructure/theme';
import Header from '../../components/header/Header';
import { Flex, AppButton, Textt } from '../../../../components';
import { CartContext } from '../../../../services/cart/CartContext';
import BasketItem from './components/BasketItem/BasketItem';

export default function App({ navigation, route }) {

  const MainContainer = styled.View`
    height: 100vh;
  `;
  const CustomScrollView = styled.ScrollView`
    background-color: white;
    opacity: 0.8;
    z-index: 2;
    filter: ${(props) => (props.modal ? 'blur(3px)' : 'none')};
  `;
  const ButtonsContainer = styled.View`
    position: absolute;
    bottom: 70px;
    left: 0%;
    right: 0px;
    z-index: 30;
    width: 100%;
    background-color: white;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `;

  const { cart, addCartStep, cartStep, cartSum } = useContext(CartContext);

  return (
    <MainContainer>
      <Header goBack={() => navigation.navigate('StartScreen')} title="Twój koszyk" headerBottom cartStep={cartStep} />
      <CustomScrollView style={{ width: '100%', height: '100%' }}>
        {cart.map((item) => (
          <BasketItem key={item.item._id} item={item} />
        ))}
      </CustomScrollView>

      <ButtonsContainer>
        <Flex flexEnd width="80%">
          <Textt size={24}>Razem : {cartSum} zł</Textt>
        </Flex>
        <Flex space>
          <AppButton
            color={colors.white}
            title="Zapłaś później"
            buttonColor={colors.lightBlue}
            textColor={colors.white}
            border={`2px solid white`}
            smallLetters="uppercase"
            onPress={console.log('zapłać później')}
            width="150px"
          />
          <AppButton
            color={colors.white}
            title={'Do kasy'}
            buttonColor={colors.allegroColor}
            border={`2px solid ${colors.allegroColor}`}
            textColor={colors.white}
            smallLetters="uppercase"
            onPress={addCartStep}
            width="150px"
          />
        </Flex>
      </ButtonsContainer>
    </MainContainer>
  );
}
