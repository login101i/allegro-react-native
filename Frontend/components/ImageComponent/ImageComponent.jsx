import React from 'react';
import { ImageContainer, Image } from './ImageComponent.styles';

export const ImageComponent = ({ img, height, width, style }) => {
  return (
    <ImageContainer style={style}>
      <Image source={img} height={height} width={width} />
    </ImageContainer>
  );
};
