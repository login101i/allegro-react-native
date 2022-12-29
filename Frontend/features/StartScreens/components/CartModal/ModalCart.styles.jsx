import styled from 'styled-components/native';
import { colors } from '../../../../infrasctructure/theme';

export const ModalContainer = styled.View`
  bottom: ${(props) => (props.modal ? '5px' : '-655px')};
  left: 0;
  right: 0;
  z-index: 111;
  background-color: ${colors.white};
  position: absolute;
  z-index: 121;
  min-height: 450px;
  transition: 0.5s all ease-in-out;
`;

export const TitleContainer = styled.View`
  margin-top: 15px;
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
