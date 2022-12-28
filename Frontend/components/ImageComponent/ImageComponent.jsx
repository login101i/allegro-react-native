import React from 'react';
import { ImageContainer, Image } from './ImageComponent.styles';

export const ImageComponent = ({ img, size, style }) => {
  return (
    <ImageContainer style={style}>
      <Image src={img} size={size} />
    </ImageContainer>
  );
};
