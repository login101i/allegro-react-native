import React from 'react';
import { Flex } from '..';
import { Header, SpanText } from './BorderAndTitle.styles';

export const BorderAndTitle = (props) => {
  return (
    <>
      {props.border ? (
        <Flex center>
          <Header>
            <SpanText>{props.title || 'Zobacz więcej'} </SpanText>
          </Header>
        </Flex>
      ) : (
        <SpanText>{props.title || 'Zobacz więcej'} </SpanText>
      )}
    </>
  );
};
