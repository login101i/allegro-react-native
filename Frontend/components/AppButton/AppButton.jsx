import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Textt } from '..';
import { ButtonContainer } from './AppButton.styles';
import { COLORS } from '../../constants';
// import { colors } from 'react-native-elements';
import { colors } from '../../infrasctructure/theme';

export const AppButton = ({
  title,
  buttonColor = colors.darkGray,
  onPress,
  textColor = 'lightGray',
  iconName,
  smallLetters,
  fontSize = '30',
  border,
  width,
  upperCase
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer buttonColor={buttonColor} border={border} width={width}>
        <MaterialCommunityIcons name={iconName} color={textColor} size={25} />
        <Textt color={textColor} upperCase={upperCase}>
          {title}
        </Textt>
      </ButtonContainer>
    </TouchableOpacity>
  );
};
