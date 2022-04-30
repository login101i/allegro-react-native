import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { Dimensions, ScrollView } from "react-native";

import SimpleImageSlider from "react-simple-image-slider";

export const Slider = ({ images, setCountSlider }) => {
  const Image = styled.img`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ImageContainer = styled.div`
    height: 400px;
    width: 411px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  `;

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
          <Image src={image.url} />
        </ImageContainer>
      ))}
    </ScrollView>
  );
};
