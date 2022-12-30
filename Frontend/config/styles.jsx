import { Platform } from 'react-native';
import { colors } from '../infrasctructure/theme';
export default {
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  },
  smallText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  },
  colors
};
