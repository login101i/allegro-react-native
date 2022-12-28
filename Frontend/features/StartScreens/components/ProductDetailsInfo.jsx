import React, { useEffect } from "react";

import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { Textt, Flex } from "../../../components";

import { View } from "react-native";
import { COLORS } from "../../../constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const MainContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  width: 100%;
  border:2px solid green;
`;

const Counter = styled.View`
  padding: 5px;
`;

const ProductDetailsInfo = ({ product, countSlider }) => {
  const addStar = () => {
    var array = [];
    for (var i = 0; i < product.ratings; i++) {
      array = [...array, i];
    }

    return array;
  };

  return (
    <MainContainer>
      <Flex>
        <Counter>
          <Textt>
            {countSlider + 1}/ {product.img.length}
          </Textt>
        </Counter>
      </Flex>
      <Textt>{product.name}</Textt>
      <Flex align>
        <Textt>{product.ratings}</Textt>
        <Flex>
          {addStar().map((star) => (
            <Ionicons
              name="star"
              color={COLORS.allegroColor}
              key={Math.random()}
              size={17}
            />
          ))}
        </Flex>
        <Textt>{product.numOfReviews} ocen produktu</Textt>
      </Flex>
    </MainContainer>
  );
};

export default ProductDetailsInfo;
