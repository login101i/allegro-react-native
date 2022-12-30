import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView,  } from 'react-native';
import { BorderAndTitle, Textt } from '../../../../../../components';
import BasketItemCenter from './BasketItem.center';
import BasketItemHeader from './BasketItem.header';
import BasketItemHeaderInfo from './BasketItem.headerInfo';
const Container = styled(SafeAreaView)`
  background-color: white;
  margin-bottom: 12px;
  padding: 5px 15px;
`;
export default function BasketItem({ item = null }) {
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(true);
  const { seller, title } = item.item;
  const { ile } = item;

  return (
    <Container space column>
      <BasketItemHeader seller={seller} />
      <BasketItemHeaderInfo title={title} item={item} setVisible={setVisible} visible={visible} />
      <BasketItemCenter item={item} ile={ile} visible={visible} />
      <BorderAndTitle title="Inne przedmioty sprzedającego" border />
    </Container>
  );
}

const styles = StyleSheet.create({});
