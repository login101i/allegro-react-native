import React, { useState, useContext, useEffect } from "react";

import { COLORS } from "../../../../constants";
import Header from "../../../../components/Header";
import ProductDetailsInfo from "../../components/ProductDetailsInfo";
import ProductPriceInfo from "../../components/ProductPriceInfo";
import AddToCart from "../../../../components/AddRemoveFromCart";
import Space from "../../../../components/BlackSpace";
import ModalCart from "../../components/Modal";
import { Textt, Flex, AppButton, Slider } from "../../../../components";

import { CartContext } from "../../../../services/cart/CartContext";
import {
  ButtonsContainer,
  CustomScrollView
} from "./ProductDetailsScreen.styles";

const ProductDetailsScreen = ({ navigation, route }) => {
  const [number, setNumber] = useState(1);
  const [countSlider, setCountSlider] = useState(0);
  const [resetNumber, setResetNumber] = useState();
  const [modal, setModal] = useState(false);

  const { product } = route.params;

  const {  addToCart,  socket, user } =
    useContext(CartContext);

  const addToBasket = (product, nb, type) => {
    addToCart(product, nb);
    setModal(true);
    setResetNumber(1);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: user,
      type
    });
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
        <Header goBack={() => navigation.navigate("StartScreen")} />
        <Slider images={product.img} setCountSlider={setCountSlider} />
        <ProductDetailsInfo product={product} countSlider={countSlider} />
        <ProductPriceInfo product={product} />
        <AddToCart
          product={product}
          func={(ilosc) => setNumber(ilosc)}
          resetNumber={resetNumber}
          modal={modal}
        />
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
            buttonColor={COLORS.white}
            onPress={() => console.log("Pressed")}
            color={COLORS.linkColor}
            title="Kup teraz"
          />

          <AppButton
            buttonColor={COLORS.allegroColor}
            color={COLORS.white}
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
