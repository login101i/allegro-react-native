import React from 'react';
import LottieView from 'lottie-react-native';
import { Container } from './ActivityIndicator.styles';
import Animation from '../../assets/animation/loader.json';
import { Text } from 'react-native-paper';
export const ActivityIndicator = () => {
  return (
    <Container>
      {/* <LottieView source={Animation} autoPlay /> */}
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require('../../assets/animation/delivery_animation')}
      />
      <Text>animacja</Text>
    </Container>
  );
};
