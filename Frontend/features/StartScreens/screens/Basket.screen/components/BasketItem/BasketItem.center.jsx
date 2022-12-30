import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Flex, Textt } from '../../../../../../components';
import { ImageComponent } from '../../../../../../components';
import AddRemoveFromCart from '../../../../../../components/AddRemoveFromCart/AddRemoveFromCart';
import styled from 'styled-components/native';
import SmartImage from '../../../../../../assets/images/smart.png';

export default function BasketItem({ item, visible = true }) {
  const { price, title, img } = item.item;
  const { ile } = item;
  const itemSum = (price * ile).toFixed(2);

  const Container = styled(Flex)`
    padding: 15px 0px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    opacity: ${(props) => (props.visible ? '1' : '0.5')};
    filter: grayscale(0.2);
    max-width: 100vw;
    margin: 0px 10px;
  `;

  const ImageContainer = styled.View`
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
  `;
  const CustomImage = styled.Image`
    width: 100%;
    max-width: 100%;
    height: 100% !important;
    object-fit: fill;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <Container visible={visible}>
        <ImageContainer>
          <CustomImage source={{ uri: img[0]?.url }} />
        </ImageContainer>
        <Flex column>
          <Textt wrap="true">{title.slice(0, 50)} ...</Textt>
          <AddRemoveFromCart orderedNumber={ile} product={item.item} calculateSum />
          <Textt style={{ marginLeft: '17px' }} title={itemSum + ' zł'} size={18} />
        </Flex>
      </Container>
      <Flex flexEnd>
        {itemSum >= 40 && (
          <Flex aling>
            <Textt size={14}>Darmowa dostawa </Textt>
            <ImageComponent img={SmartImage} width="90px" />
          </Flex>
        )}
      </Flex>
    </>
  );
}

const styles = StyleSheet.create({});
