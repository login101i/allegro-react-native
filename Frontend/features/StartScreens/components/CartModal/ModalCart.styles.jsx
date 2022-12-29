import styled from 'styled-components/native';
import { colors } from '../../../../infrasctructure/theme';

export const ModalContainer = styled.View`
  width: 100%;
  background: white;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111;
  background: ${colors.white};
  position: absolute;
  z-index: 21;
  min-height: 300px;
`;

export const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  position: relative;
`;

export const Button = styled.Pressable`
  position: absolute;
  top: 0px;
  left: 10px;
  z-index: 112;
`;
