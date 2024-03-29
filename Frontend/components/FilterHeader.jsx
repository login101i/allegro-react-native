import React from 'react';
import { Flex, Textt } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../infrasctructure/theme';

export const FilterHeader = () => {
  return (
    <Flex fullWidth>
      <Flex space width="90%" align>
        <Flex>
          <Textt color={colors.linkColor} upperCase size={15}>
            kategorie
          </Textt>
          <Textt color={colors.linkColor} upperCase size={15}>
            Filtry
          </Textt>
          <Textt color={colors.linkColor} upperCase size={15}>
            sortuj
          </Textt>
        </Flex>
        <Ionicons name="md-star" size={25} color={colors.darkGray} />
      </Flex>
    </Flex>
  );
};
