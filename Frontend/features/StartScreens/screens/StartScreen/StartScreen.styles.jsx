import styled from 'styled-components/native';
import { AppButton } from '../../../../components';

export const ScrollViewContainer = styled.ScrollView`
  position: relative;
`;
export const ContainerView = styled.View`
  display: flex;
  flex: 1;
  color: black;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const BannerContainer = styled.View`
  position: relative;
  width: 100vw;
  height: auto;
  margin-top: 36px;
  justify-content: center;
`;

export const SmartBanner = styled.Image`
  width: 100vw;
  height: 80px;
`;

export const BannerButton = styled.Text`
  position: absolute;
  background-color: orange;
  color: white;
  width: 100px;
  height: 40px;
  top: 20px;
  bottom: 0px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
`;
