import React from 'react';
import LottieView from 'lottie-react-native';
import { Container } from './ActivityIndicator.styles';
import Animation from '../../assets/animation/loader.json';
function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <Container>
      <LottieView source={Animation} autoPlay loop />
    </Container>
  );
}

export default ActivityIndicator;
