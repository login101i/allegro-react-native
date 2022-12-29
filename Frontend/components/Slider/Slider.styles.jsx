import styled from 'styled-components/native';
import { Image } from 'react-native';

export const CustomImage = styled(Image)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 400px;
  object-fit: contain;
  z-index: -1;
`;

export const ImageContainer = styled.View`
  height: 400px;
  width: 411px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
