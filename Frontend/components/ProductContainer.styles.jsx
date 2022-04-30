import styled from "styled-components/native";
import { View, Text, Image, TouchableHighlight } from "react-native";


export const Discount = styled.Text`
  background: #0f7b1e;
  height: 16px;
  padding: 4px 5px;
  margin-right: 10px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OldPrice = styled.Text`
  color: black;
  text-decoration: line-through;
  font-size: 14px;
`;

export const ImageContainer = styled.View`
  height: 180px;
  width: 180px;
  display: flex;
  align-items: center;
 
`;
export const CustomImage = styled.Image`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 150px;
`;
