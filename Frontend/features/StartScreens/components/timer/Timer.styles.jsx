import styled from 'styled-components/native';

import { COLORS } from '../../../../constants';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;
export const StyledNumber = styled.Text`
  color: ${COLORS.allegroColor};
  font-size: 24px;
  font-weight: 600;
`;

export const TimeContainer = styled.View`
  display: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
`;
export const TimeItem = styled.View`
  height: 36px;
  width: 24px;
  background-color: #ff5a00;
  color: white;
  margin-right: 1.3px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Colon = styled.Text`
  color: #ff5a00;
  font-size: 25px;
  margin: 0px 5px;
`;
