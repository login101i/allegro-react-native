import { DefaultTheme } from '@react-navigation/native';
import { colors } from '../../Frontend/infrasctructure/theme';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: 'black'
  }
};
