import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./features/navigation/AppNavigator";
import theme from "./infrasctructure/theme";
import { ProductContextProvider } from "./services/products/ProductsContext";
import { CartContextProvider } from "./services/cart/CartContext";
import { AuthenticationContextProvider } from "./services/authentication/AuthenticationContext";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Flex, LogoLoader } from "./components";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  let [oswaldLoaded] = useFonts({
    Oswald_400Regular
  });
  let [latoLoaded] = useFonts({
    Lato_400Regular
  });

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:8000/api/products`);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!oswaldLoaded || !latoLoaded || isLoading) {
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
        <AuthenticationContextProvider>
          <CartContextProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </CartContextProvider>
        </AuthenticationContextProvider>
      </ProductContextProvider>
    </ThemeProvider>
  );
};

export default App;
