import React, { useState, useContext, useEffect } from 'react';
import { colors } from '../../../../infrasctructure/theme';
import Header from '../../components/header/Header';
import ProductDetailsInfo from '../../components/ProductDetailsInfo/ProductDetailsInfo';
import ProductPriceInfo from '../../components/ProductPriceInfo';
import AddToCart from '../../../../components/AddRemoveFromCart/AddRemoveFromCart';
import ModalCart from '../../components/CartModal/ModalCart';
import { SubmitButton } from '../../../../components/forms';
import { Textt, Flex, Slider, Space, AppButton } from '../../../../components';
import { CartContext } from '../../../../services/cart/CartContext';
import { ButtonsContainer, CustomScrollView, MainContainer } from './ProductDetailsScreen.styles';

const ProductDetailsScreen = ({ navigation, route }) => {
  const [number, setNumber] = useState(1);
  const [countSlider, setCountSlider] = useState(0);
  const [resetNumber, setResetNumber] = useState();
  const [modal, setModal] = useState(false);

  const { product } = route.params;

  const { addToCart, socket, user } = useContext(CartContext);

  const addToBasket = (product, nb, type) => {
    addToCart(product, nb);
    setModal(true);
    setResetNumber(1);
  };

  const changeModal = () => {
    setModal(!modal);
    const random = Math.random();
    setResetNumber(random);
  };

  useEffect(() => {
    console.log(countSlider);
  }, [countSlider]);

  return (
    <MainContainer>
      <CustomScrollView modal={modal}>
        <Header goBack={() => navigation.navigate('StartScreen')} />
        <Slider images={product.img} setCountSlider={setCountSlider} />
        <Flex column>
          <Textt title="Tytuł" />
          <Textt title="Cena" />
        </Flex>

        <ProductDetailsInfo product={product} countSlider={countSlider} />
        <ProductPriceInfo product={product} />
        <AddToCart product={product} func={(ilosc) => setNumber(ilosc)} resetNumber={resetNumber} modal={modal} />
        <Space height="100px" />
        <Flex>
          <Textt title="Tytuł" />
          <Textt title="Cena" />
        </Flex>
      </CustomScrollView>

      <ButtonsContainer>
        <Flex space>
          <AppButton
            color={colors.white}
            title="Kup Teraz"
            buttonColor={colors.white}
            textColor={colors.allegroColor}
            border={`2px solid orange`}
            smallLetters="uppercase"
            onPress={() => addToBasket(product, number, 1)}
            width="150px"
          />
          <AppButton
            color={colors.white}
            title="Do koszyka"
            buttonColor={colors.allegroColor}
            border={`2px solid ${colors.allegroColor}`}
            textColor={colors.white}
            smallLetters="uppercase"
            onPress={() => addToBasket(product, number, 1)}
            width="150px"
          />
        </Flex>
      </ButtonsContainer>
      <ModalCart product={product} modal={modal} changeModal={changeModal} />
    </MainContainer>
  );
};

export default ProductDetailsScreen;
