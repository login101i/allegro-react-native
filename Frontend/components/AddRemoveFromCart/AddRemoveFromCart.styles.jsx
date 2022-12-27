import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  width: 100%;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
`;
export const Input = styled.TextInput`
  width: 40px;
  text-align: center;
  font-size: 20px;
  ${FlexCenter}
`;

export const BorderView = styled.View`
  border: 0.5px solid black;
  height: 45px;
  width: 45px;
  ${FlexCenter}
`;

export const StyledIcon = styled(Ionicons)`
  text-align: center;
  color: black;
  height: 45px;
  width: 45px;
  font-size:30px
  border: 0.5px solid black;
  ${FlexCenter}

`;
