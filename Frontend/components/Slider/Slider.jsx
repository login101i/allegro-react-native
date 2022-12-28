import React, { useEffect, useRef } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { CustomImage, ImageContainer } from './Slider.styles.jsx';
import { SafeArea } from '../SafeArea/SafeArea.jsx';

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
    <SafeArea horizontal showsHorizontalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={32}>
      {imagesArray.map((image) => (
        <ImageContainer key={image.url}>
          <CustomImage source={image.url} />
        </ImageContainer>
      ))}
    </SafeArea>
  );
};
