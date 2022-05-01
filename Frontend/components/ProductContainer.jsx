import React from "react";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Flex, Textt, LogoLoader, ImageComponent } from "../components";
import {
  Discount,
  OldPrice,
  CustomImage,
  ImageContainer
} from "./ProductContainer.styles";

const ProductContainer = ({ product = {}, onPress, direction = "column" }) => {
  const {
    images,
    name,
    description,
    oldPrice = "100",
    newPrice = "99",
    price,
    discount = "0"
  } = product;

  return (
    <Flex>
      <TouchableWithoutFeedback onPress={onPress}>
        {product ? (
          <Flex
            style={{
              flexDirection: direction === "row" ? "column" : "row"
            }}
            width={direction === "row" ? "190px" : "480px"}
          >
            <ImageContainer>
              <CustomImage
                source={{
                  uri: images[0].url
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageContainer>
            <Flex column width={direction === "row" ? "190px" : "270px"}>
              <Flex>
                <Discount>-{discount} %</Discount>
                <OldPrice>{oldPrice} zł</OldPrice>
              </Flex>
              <Textt size={16} bold>
                {price} zł
              </Textt>
              <Textt />
              {price >= 40 && (
                <Flex>
                  <ImageComponent
                    img={require("../assets/images/smart.png")}
                    size={16}
                  />
                  <Textt> z kurierem</Textt>
                </Flex>
              )}
              <Textt size={8} wrap>
                {name}
              </Textt>
            </Flex>
          </Flex>
        ) : (
          <LogoLoader
            source={{
              uri: "https://maciejewski.com/wp-content/uploads/allegro.png"
            }}
            style={{
              width: "200px",
              height: "200px"
            }}
          />
        )}
      </TouchableWithoutFeedback>
    </Flex>
  );
};

export default ProductContainer;
