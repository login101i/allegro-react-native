import { View, Text } from 'react-native';
import React, { useReducer } from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

import { Flex, Textt } from '../../../../components';
import { accountHeaderReducer } from '../../../../constants/dummy';

const StyledHeader = styled(Flex)`
  height: 40px;
`;

export const LoginScreenHeader = () => {
  const [headerTitle, dispatch] = useReducer(accountHeaderReducer, 'zakupy');

  const headerTitles = ['zakupy', 'lokalnie', 'konto'];
  return (
    <StyledHeader align>
      {headerTitles.map((header, i) => (
        <TouchableHighlight key={header + i}>
          <Flex
            style={{
              borderBottom: headerTitle === header ? '2px solid orange' : 'grey',
              width: '30vw'
            }}
            center
            onClick={() => dispatch({ type: header })}
          >
            <Textt textAlign uppercase bold color={headerTitle === header ? ' orange' : 'grey'}>
              {header}
            </Textt>
          </Flex>
        </TouchableHighlight>
      ))}
    </StyledHeader>
  );
};
