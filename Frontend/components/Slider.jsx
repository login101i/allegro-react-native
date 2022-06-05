import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";

import { Dimensions, ScrollView, Image, View } from "react-native";

import SimpleImageSlider from "react-simple-image-slider";
const CustomImage = styled(Image)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 70%;
  height: 400px;
  object-fit:contain;
  z-index:-1;
`;

const ImageContainer = styled.View`
  height: 400px;
  width: 411px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Slider = ({ images, setCountSlider }) => {
  var imagesArray = [];

  for (var i = 0; i < images.length; i++) {
    imagesArray.push({ url: images[i].url });
  }

  const handleScroll = (event) => {
    const scrollOffset = event.nativeEvent.contentOffset.x;
    setCountSlider(Math.floor(scrollOffset / 350));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={32}
    >
      {imagesArray.map((image) => (
        <ImageContainer key={image.url}>
          <CustomImage source={image.url} />
        </ImageContainer>
      ))}
    </ScrollView>
  );
};
