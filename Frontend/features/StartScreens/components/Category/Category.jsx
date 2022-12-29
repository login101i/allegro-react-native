import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors } from '../../../../infrasctructure/theme';
import { Textt, Flex } from '../../../../components';

import { CategoryContainer } from './Category.styles';

export const Category = ({
  icon,
  title,
  borderBottomColor,
  borderBottomWidth,
  borderLeftColor,
  borderLeftWidth,
  width = '25vw',
  height = 'auto',
  flexDirection = 'column'
}) => {
  return (
    <TouchableOpacity>
      <Flex
        column
        align
        borderBottomColor={borderBottomColor}
        borderBottomWidth={borderBottomWidth}
        style={{ paddingBottom: '10px', margin: '1px' }}
      >
        <CategoryContainer
          flexDirection={flexDirection}
          borderLeftColor={borderLeftColor}
          borderLeftWidth={borderLeftWidth}
          width={width}
          height={height}
        >
          <Image
            source={icon}
            style={{
              tintColor: colors.darkGray,
              width: 35,
              height: 35,
              padding: 5,
              marginBottom: 10
            }}
          />
        </CategoryContainer>
        <Textt align size={9} color={colors.darkGray} bold>
          {title}
        </Textt>
      </Flex>
    </TouchableOpacity>
  );
};
