import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, ScrollView } from "react-native";

import { BorderAndTitle } from "../../../../../../components";
import BasketItemCenter from "./BasketItem.center";
import BasketItemHeader from "./BasketItem.header";
import BasketItemHeaderInfo from "./BasketItem.headerInfo";
const Container = styled(SafeAreaView)`
  background-color: white;
  margin-bottom: 12px;
  padding: 5px 15px;
`;
export default function BasketItem({ item = null }) {
  const [visible, setVisible] = useState();
  const [checked, setChecked] = useState(true);

  const { seller, title } = item.item;
  const {ile}=item
  return (
    <Container space column>
      <BasketItemHeader seller={seller} />
      <BasketItemHeaderInfo title={title} />
      <BasketItemCenter item={item} ile={ile}/>
      <BorderAndTitle title="Inne przedmioty sprzedającego" border />
    </Container>
  );
}

const styles = StyleSheet.create({});
