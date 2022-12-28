import React from 'react';
import { Text } from 'react-native';
import { TextContainer, SubTitle } from './Textt.styles';

export const Textt = ({
  title = '',
  size,
  marginTop,
  bold,
  children,
  subTitle = '',
  color,
  borderBottom,
  hovered,
  onClick,
  wrap,
  textAlign,
  style,
  background,
  fullWidth,
  borderBottomColor,
  borderBottomWidth,
  upperCase
}) => {
  return (
    <TextContainer
      size={title ? 18 : size}
      marginTop={marginTop}
      bold={bold}
      color={color}
      borderBottom={borderBottom}
      hovered={hovered}
      onClick={onClick}
      wrap={wrap}
      textAlign={textAlign}
      style={style}
      background={background}
      borderBottomColor={borderBottomColor}
      borderBottomWidth={borderBottomWidth}
      upperCase={upperCase}
    >
      <Text>
        {title}
        {children}
        {subTitle && (
          <SubTitle color={color} textAlign={textAlign}>
            {subTitle}
          </SubTitle>
        )}
      </Text>
    </TextContainer>
  );
};
