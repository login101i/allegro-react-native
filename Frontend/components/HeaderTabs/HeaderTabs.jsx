import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../infrasctructure/theme';
import { Flex, Space } from '..';
import { Container } from './HeaderTabs.styles';

export const HeaderTabs = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container>
        <Flex space width="120px">
          <TouchableOpacity onPress={() => console.log('navigate')}>
            <Ionicons name="md-star" size={25} color={colors.darkGray} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('navigate')}>
            <Ionicons name="md-search" size={25} color={colors.darkGray} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('navigate')}>
            <Ionicons name="md-camera" size={25} color={colors.darkGray} />
          </TouchableOpacity>
        </Flex>
      </Container>
    </SafeAreaView>
  );
};
