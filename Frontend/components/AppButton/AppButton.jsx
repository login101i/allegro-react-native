import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Textt } from '..';
import { ButtonContainer } from './AppButton.styles';
import { COLORS } from '../../constants';

export const AppButton = ({
  title,
  buttonColor = COLORS.darkGray,
  onPress,
  textColor = 'lightGray',
  iconName,
  smallLetters,
  fontSize = '30',
  color,
  border,
  width,
  upperCase
}) => {
  return (
    <ButtonContainer buttonColor={buttonColor} border={border} width={width}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name={iconName} color="white" size={25} />
        <Textt color={color} upperCase={upperCase}>
          {title}
        </Textt>
      </TouchableOpacity>
    </ButtonContainer>
  );
};
