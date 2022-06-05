import React from "react";
import styled from "styled-components/native";
import { Textt, Flex } from "../../../../../components";
import BasketSteps from "./BasketSteps";

const StepsContainer = styled.View`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: space-between;
`;
export default function BasketHeaderSteps() {
  return (
    <StepsContainer>
      <BasketSteps />

      <Flex flexEnd>
        <Textt size={12} color={(props) => props.theme.colors.textColor}>
          Krok 1 z 4
        </Textt>
      </Flex>
    </StepsContainer>
  );
}
