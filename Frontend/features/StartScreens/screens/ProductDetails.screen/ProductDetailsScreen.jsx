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
  const [isProductInCart, setIsProductInCart] = useState(false);

  const { product } = route.params;
  const { addToCart, cart, user } = useContext(CartContext);


  useEffect(() => {
    const checkProductInCart = () => {
      // if (!cart.length) return;
      const productInCart = cart.map(({ item }) => item._id).includes(product._id);
      setIsProductInCart(productInCart);
    };
    checkProductInCart();
  }, [cart]);

  const handleAddToBasket = () => {
    if (isProductInCart) {
      navigation.navigate('Koszyk');
    } else {
      addToCart(product, number);
      setModal(true);
      setResetNumber(1);
    }
  };

  const handleToCart = () => {
    addToCart(product, number);
    setResetNumber(1);
    navigation.navigate('Koszyk');
  };

  const changeModal = () => {
    setModal(!modal);
    const random = Math.random();
    setResetNumber(random);
  };

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
            onPress={handleToCart}
            width="150px"
          />
          <AppButton
            color={colors.white}
            title={isProductInCart ? 'Produkt w koszyku' : 'Do koszyka'}
            buttonColor={colors.allegroColor}
            border={`2px solid ${colors.allegroColor}`}
            textColor={colors.white}
            smallLetters="uppercase"
            onPress={handleAddToBasket}
            width="150px"
          />
        </Flex>
      </ButtonsContainer>
      <ModalCart product={product} modal={modal} changeModal={changeModal} />
    </MainContainer>
  );
};

export default ProductDetailsScreen;
