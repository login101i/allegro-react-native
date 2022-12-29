import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../infrasctructure/theme';
import { ProductContainer } from '../../../../components';
import { Textt, Flex, AppButton } from '../../../../components';
import { ButtonsContainer } from '../../screens/ProductDetails.screen/ProductDetailsScreen.styles';
import { ModalContainer, TitleContainer, Button } from './ModalCart.styles';

const ModalCart = ({ product, modal, changeModal }) => {
  const navigation = useNavigation();

  return (
    <>
      <ModalContainer modal={modal}>
        <TitleContainer>
          <Button
            onPress={() => {
              changeModal();
            }}
          >
            <Ionicons name="md-basket" size={22} />
          </Button>
          <Textt size={16}>Product został dodany do koszyka</Textt>
        </TitleContainer>
        <ProductContainer product={product} compactImages />
        <ButtonsContainer>
          <Flex space>
            <AppButton
              title="Kupuj dalej"
              buttonColor={colors.white}
              textColor={colors.allegroColor}
              border={`2px solid orange`}
              smallLetters="uppercase"
              onPress={() => changeModal()}
              width="150px"
            />

            <AppButton
              buttonColor={colors.allegroColor}
              textColor={colors.white}
              onPress={() => navigation.navigate('Koszyk')}
              title="Idź do koszyka"
              uppercase
              smallLetters="uppercase"
              width="150px"
            />
          </Flex>
        </ButtonsContainer>
      </ModalContainer>
    </>
  );
};

export default ModalCart;
