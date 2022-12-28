import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';

import { COLORS } from '../../../../constants';

export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 30;

  background-color: ${COLORS.white};
`;

export const CustomScrollView = styled.View`
  background-color: ${(props) => (props.modal ? 'grey' : '')};
  opacity: 0.8;
  pointer: none;
  left: 0;
  top: 0;
  height: 100vh;
`;
