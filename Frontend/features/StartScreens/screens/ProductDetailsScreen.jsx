import React, { useState, useContext, useEffect } from "react";
import { View, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import { COLORS } from "../../../constants";
import Header from "../../../components/Header";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import ProductPriceInfo from "../components/ProductPriceInfo";
import AddToCart from "../../../components/AddToCart";
import Space from "../../../components/BlackSpace";
import ModalCart from "../components/Modal";
import { Textt, Flex, AppButton, Slider } from "../../../components";

import { CartContext } from "../../../services/cart/CartContext";
import { ButtonsContainer } from "./ProductDetailsScreen.styles";

export default function App({ navigation, route }) {
  const [number, setNumber] = useState(1);

  const [countSlider, setCountSlider] = useState(0);
  console.log(
    "🚀 ~ file: ProductDetailsScreen.jsx ~ line 22 ~ App ~ countSlider",
    countSlider
  );
  const [resetNumber, setResetNumber] = useState();
  const [modal, setModal] = useState(false);
  const { product } = route.params;

  const { cart, addToCart } = useContext(CartContext);
  console.log(cart.length);

  const addToBasket = (product, nb) => {
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
      <ScrollView>
        <Header goBack={() => navigation.navigate("StartScreen")} />
        <Slider images={product.images} setCountSlider={setCountSlider} />
        <ProductDetailsInfo product={product} countSlider={countSlider} />
        <ProductPriceInfo product={product} />
        <AddToCart
          product={product}
          func={(ilosc) => setNumber(ilosc)}
          resetNumber={resetNumber}
          modal={modal}
        />
        <Space height="100px" />
        <ModalCart product={product} modal={modal} changeModal={changeModal} />

        <Flex>
          <Textt title="Tytuł" />
          <Textt title="Cena" />
        </Flex>
      </ScrollView>

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
            onPress={() => addToBasket(product, number)}
            title="Do koszyka"
            width="40%"
          />
        </Flex>
      </ButtonsContainer>
    </>
  );
}
