import { StyleSheet } from 'react-native';
import React from 'react';
import { Flex, Textt } from '../../../../../../components';
import { ImageComponent } from '../../../../../../components';
import AddRemoveFromCart from '../../../../../../components/AddRemoveFromCart/AddRemoveFromCart';
import styled from 'styled-components/native';

const Container = styled(Flex)`
  padding: 25px 0px;
`;
export default function BasketItem({ item }) {
  const { price, title, img } = item.item;
  const { ile } = item;

  return (
    <>
      <Container>
        <ImageComponent style={{ height: '80px', width: '30px', margin: ' 0px 30px' }} size={80} img={img[0].url} />
        <Flex column>
          <Textt style={{ marginLeft: '17px' }} wrap>
            {title.slice(0, 30)} ...
          </Textt>
          <AddRemoveFromCart orderedNumber={ile} product={item.item} />
          <Textt style={{ marginLeft: '17px' }} title={price + ' zł'} size={18} />
        </Flex>
      </Container>
      <Flex>
        {price >= 40 && (
          <Flex>
            <Textt size={14}>Darmowa dostawa </Textt>
            <ImageComponent img={require('../../../../../../assets/images/smart.png')} size={16} />
          </Flex>
        )}
      </Flex>
    </>
  );
}

const styles = StyleSheet.create({});
