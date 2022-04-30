import React from "react";

import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { Textt } from "../../../components";

import { View } from "react-native";
import { COLORS } from "../../../constants/theme";

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
  justify-content: flex-start;
`;

const ProductPriceInfo = ({ product }) => {
  return (
    <>
      <MainContainer>
        <Container>
          <Textt>{product.price} zł</Textt>
          <Textt>Smart z kurierem</Textt>
        </Container>

        <Textt>Zapłać mniej z payu</Textt>
      </MainContainer>
      <Container>
        <Icon name="info" color="grey" />
        <Textt>Dostawa w środę</Textt>
        <Icon name="info" color="grey" />
      </Container>
    </>
  );
};

export default ProductPriceInfo;
