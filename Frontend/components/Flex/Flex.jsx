import React from 'react';
import { Container } from './Flex.styles';

export const Flex = ({
  space,
  style,
  align,
  column,
  fullWidth,
  borderTop,
  center,
  color,
  width,
  flexOne,
  borderBottomColor,
  borderBottomWidth,
  direction,
  flexEnd,
  onClick,
  children
}) => {
  return (
    <Container
      {...{
        space,
        style,
        align,
        column,
        fullWidth,
        borderTop,
        center,
        color,
        width,
        flexOne,
        borderBottomColor,
        borderBottomWidth,
        direction,
        flexEnd,
        onClick,
        children
      }}
    >
      {children}
    </Container>
  );
};
