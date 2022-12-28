import React from 'react';
import { Container } from './Space.styles';
import { colors } from '../../infrasctructure/theme';

export const Space = ({ height = '15px', backgroundColor = colors.white }) => {
  return <Container height={height} backgroundColor={backgroundColor}></Container>;
};
