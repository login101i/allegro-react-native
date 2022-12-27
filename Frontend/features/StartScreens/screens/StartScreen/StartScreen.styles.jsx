import styled from 'styled-components/native';
import { AppButton } from '../../../../components';

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
  margin-top: 36px;
  justify-content: center;
`;

export const SmartBanner = styled.Image`
  width: 100vw;
  height: 80px;
  border: 2px solid green;
`;

export const BannerButton = styled.Button`
  position: absolute;
  width:100px;
  height:40px;
  top: 10px;
  right: 30px;
  padding: 4px 18px;
  border-radius: 3px;
  margin-bottom: 50px;
`;
