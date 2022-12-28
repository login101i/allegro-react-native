import React from 'react';
import { Image } from 'react-native';
import theme from '../../infrasctructure/theme';
import { IconContainer } from './TabBarIcon.styles';

export const TabBarIcon = ({ icon, size = 25, color = theme.colors.darkGray, activeColor = theme.colors.orange, focused }) => {
  return (
    <IconContainer>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: size,
          height: size,
          tintColor: focused ? activeColor : color
        }}
      />
    </IconContainer>
  );
};
