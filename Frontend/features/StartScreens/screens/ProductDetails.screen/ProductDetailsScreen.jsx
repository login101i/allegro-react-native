import React, { useState, useContext, useEffect } from 'react';
import { colors } from '../../../../infrasctructure/theme';
import Header from '../../components/header/Header';
import ProductDetailsInfo from '../../components/ProductDetailsInfo';
import ProductPriceInfo from '../../components/ProductPriceInfo';
import AddToCart from '../../../../components/AddRemoveFromCart/AddRemoveFromCart';
// import { Space } from '../../../../components';
import ModalCart from '../../components/CartModal/ModalCart';
import { Textt, Flex, AppButton, Slider, Space } from '../../../../components';
import { CartContext } from '../../../../services/cart/CartContext';
import { ButtonsContainer, CustomScrollView } from './ProductDetailsScreen.styles';

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
    <>
      <CustomScrollView modal={modal}>
        <Header goBack={() => navigation.navigate('StartScreen')} />
        <Slider images={product.img} setCountSlider={setCountSlider} />
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
            width="40%"
            buttonColor={colors.white}
            onPress={() => console.log('Pressed')}
            color={colors.linkColor}
            title="Kup teraz"
          />

          <AppButton
            buttonColor={colors.allegroColor}
            color={colors.white}
            onPress={() => addToBasket(product, number, 1)}
            title="Do koszyka"
            width="40%"
          />
        </Flex>
        <ModalCart product={product} modal={modal} changeModal={changeModal} />
      </ButtonsContainer>
    </>
  );
};

export default ProductDetailsScreen;
