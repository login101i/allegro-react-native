import React from "react";
import styled from "styled-components";

import SmartImage from "../assets/images/Smart.svg";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  width: 224px;
  min-width: 220px;
`;

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Discount = styled.div`
  background: #0f7b1e;
  height: 16px;si
  padding: 4px 5px;
  margin-right: 10px;
  color: #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OldPrice = styled.div`
  color: #dbdbdb;
  text-decoration: line-through;
  font-size: 14px;
`;

const FlexRow = styled.div`
  display: flex;
`;
const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #dbdbdb;
`;
const Smart = styled.img`
  color: purple;
  height: 18px;
  display: flex;
  align-items: left;
  width: 100px;
  margin-left: -15px;
`;

const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 90%;
  object-fit: cover;
`;

const Description = styled.div`
  text-decoration: uppercase;
  font-size: 14px;
  color: #dbdbdb;
  margin-top: 6px;
`;

const Text = styled.div`
  color: #dbdbdb;
  font-size: 14px;
  margin-left: -10px;
`;

const ProductContainer = ({ img, discount, oldPrice, price, description }) => {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      <SectionInfo>
        <FlexRow style={{ justifyContent: "left", alignItems: "center" }}>
          <Discount>-{discount} %</Discount>
          <OldPrice>{oldPrice} zł</OldPrice>
        </FlexRow>
        <Price>{price} zł</Price>
        <Description />
        <FlexRow>
          <Smart src={SmartImage} />
          <Text>z kurierem</Text>
        </FlexRow>

        <Description>{description}</Description>
      </SectionInfo>
    </SectionContainer>
  );
};

export default ProductContainer;
