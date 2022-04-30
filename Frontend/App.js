import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./features/navigation/AppNavigator";
import theme from "./infrasctructure/theme";
import { ProductContextProvider } from "./services/products/ProductsContext";
import { CartContextProvider } from "./services/cart/CartContext";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Flex, LogoLoader } from "./components";

const App = () => {
  const [load, setLoad] = React.useState(true);

  let [oswaldLoaded] = useFonts({
    Oswald_400Regular
  });
  let [latoLoaded] = useFonts({
    Lato_400Regular
  });

  setTimeout(() => {
    setLoad(false);
  }, 400);

  if (!oswaldLoaded || !latoLoaded || load) {
    return (
      <Flex align center flexOne>
        <LogoLoader
          source={{
            uri: "https://maciejewski.com/wp-content/uploads/allegro.png"
          }}
          style={{
            width: "200px",
            height: "200px"
          }}
        />
      </Flex>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <ProductContextProvider>
        <CartContextProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </CartContextProvider>
      </ProductContextProvider>
    </ThemeProvider>
  );
};

export default App;
