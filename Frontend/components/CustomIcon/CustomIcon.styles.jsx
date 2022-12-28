import styled from 'styled-components/native';
import { Badge } from 'react-native-paper';

export const Icon = styled.View`
  color: grey;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const StyledBadge = styled(Badge)`
  background-color: ${(props) => props.theme.colors.allegroColor};
  padding: 0px 4px;
  right: 0px;
  top: 10px;
  color: 'white';
  width: 10px;
  height: 10px;
  border-radius: 5px;
  z-index: 99;
  position: absolute;
`;
