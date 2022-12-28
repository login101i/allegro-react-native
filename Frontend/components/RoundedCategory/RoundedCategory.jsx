import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Textt } from '../../components';
import { colors } from '../../infrasctructure/theme';
import { Text } from 'react-native';

const ImgContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26vw;
  padding: 5px;
  margin-bottom: 30px;
`;

const StyledImage = styled(Image)`
  width: 88px;
  height: 88px;
`;

export const RoundedCategory = ({ image, text }) => {
  return (
    <ImgContainer>
      <StyledImage source={image} />
      <Textt size={14} wrap textAlign color={colors.darkGray}>
        {text}
      </Textt>
    </ImgContainer>
  );
};
