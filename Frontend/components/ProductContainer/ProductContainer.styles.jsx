import styled from 'styled-components/native';
import { View, Text, Image, TouchableHighlight } from 'react-native';

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
  height: 300px;
  width: 180px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 2px solid green;
`;
export const CustomImage = styled.Image`
  width: 100%;
  max-width: 100%;
  height: 100% !important;
  object-fit: fill;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid orange;
`;
