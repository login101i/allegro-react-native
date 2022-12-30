import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Icon } from 'react-native-elements';
import { Textt } from '..';
import { Button } from 'react-native';
import { FlexCenter, MainContainer, Container, BorderView, InputBorderView, StyledIcon, Input } from './AddRemoveFromCart.styles';
import { CartContext } from '../../services/cart/CartContext';

const AddRemoveFromCart = ({ product = null, func = () => null, resetNumber = 1, orderedNumber, calculateSum }) => {
  const [number, setNumber] = useState(orderedNumber || 1);
  const [itemsCart, setItemsCart] = useState();
  const { addToCart, removeFromCart } = useContext(CartContext);

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
    calculateSum && removeFromCart(product);
  };

  const plus = () => {
    if (number === product.stock) return;
    setNumber((prev) => prev + 1);
    calculateSum && addToCart(product, number);
  };

  return (
    <Container>
      <Container style={{ width: '200px' }}>
        <StyledIcon onPress={() => minus()} name="remove-outline" />

        <BorderView>
          <Input onChangeText={onChangeText} value={number} style={{ color: 'black' }} />
        </BorderView>

        <StyledIcon onPress={() => plus()} name="add-outline" />
      </Container>
      {product?.stock && <Textt>z {product.stock} sztuk</Textt>}
    </Container>
  );
};

export default AddRemoveFromCart;
