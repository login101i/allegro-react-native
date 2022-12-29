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
      {modal && (
        <ModalContainer>
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
          <ProductContainer product={product} />
          <ButtonsContainer>
            <Flex space>
              <AppButton
                width="40%"
                buttonColor={colors.white}
                onPress={changeModal}
                color={colors.linkColor}
                title="Kupuj dalej"
                uppercase
              />

              <AppButton
                buttonColor={colors.allegroColor}
                color={colors.white}
                onPress={() => navigation.navigate('Koszyk')}
                title="Idź do koszyka"
                width="40%"
                uppercase
              />
            </Flex>
          </ButtonsContainer>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalCart;
