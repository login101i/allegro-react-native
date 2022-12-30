import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors } from '../../../../infrasctructure/theme';
import { Textt, Flex } from '../../../../components';

import { CategoryContainer } from './Category.styles';
import { Divider } from 'react-native-paper';

export const Category = ({ icon, title, borderColor, borderWidth, width = '25vw', height = 'auto', flexDirection = 'row', vertical }) => {
  return (
    <TouchableOpacity>
      <Flex column={vertical ? false : true} align>
        <CategoryContainer
          flexDirection={flexDirection}
          borderColor={borderColor}
          borderWidth={borderWidth}
          width={width}
          height={height}
          vertical={vertical}
        >
          <Image
            source={icon}
            style={{
              tintColor: colors.darkGray,
              width: 35,
              height: 35,
              padding: 5,
              marginBottom: vertical ? 0 : 10,
              margin: 8
            }}
          />
        </CategoryContainer>
        <Textt align size={vertical ? 15 : 12} color={colors.darkGray} bold>
          {title}
        </Textt>
      </Flex>
      {vertical && <Divider />}
    </TouchableOpacity>
  );
};
