import styled from 'styled-components/native';

export const ScrollViewContainer = styled.ScrollView`
  position: relative;
  height: 100vh;
  background-color: white;
`;

export const BannerContainer = styled.View`
  position: relative;
  width: 100vw;
  height: auto;
  margin-top: 36px;
  justify-content: center;
  margin-bottom: 70px;
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
