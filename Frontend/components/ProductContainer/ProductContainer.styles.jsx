import styled from 'styled-components/native';
import { View, Text, Image, TouchableHighlight } from 'react-native';

export const MainContainer = styled.View`
  margin: 10px;
`;

export const Discount = styled.Text`
  background: #0f7b1e;
  height: 16px;
  padding: 4px 5px;
  margin-right: 10px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2px;
`;
export const OldPrice = styled.Text`
  color: black;
  text-decoration: line-through;
  font-size: 14px;
`;

export const ImageContainer = styled.View`
  height: ${(props) => (props.productsByKeyword ? '170px' : '300px')};
  width: ${(props) => (props.productsByKeyword ? '140px' : '180px')};
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.productsByKeyword ? '0px 20px 0px 10px' : '5px')};
`;
export const CustomImage = styled.Image`
  width: 100%;
  max-width: 100%;
  height: 100% !important;
  object-fit: fill;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreatPrice = styled.Text`
  width: 100px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  border-radius: 3px;
  font-size: 10px;
`;

export const Rating = styled.View`
  flex-direction: row;
`;
export const DescriptionContainer = styled.View`
  width: 240px;
  height: 100%;
`;
