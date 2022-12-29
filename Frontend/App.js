import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { ProductContextProvider } from './services/products/ProductsContext';
import { CartContextProvider } from './services/cart/CartContext';
import { AuthenticationContextProvider } from './services/authentication/AuthenticationContext';
import AppNavigator from './features/navigation/AppNavigator';
import theme from './infrasctructure/theme';
import { Flex, LogoLoader } from './components';

import { useFetchProducts } from './utils/useFetchProducts';
import { useLoadFonts } from './utils/useLoadFonts';

const App = () => {
  const { fetchData, isLoading } = useFetchProducts();
  const { areFontsLoaded } = useLoadFonts();

  useEffect(() => {
    fetchData();
  }, []);

  // if (isLoading || !areFontsLoaded) {
  //   return (
  //     <Flex align center flexOne>
  //       <LogoLoader
  //         source={{
  //           uri: 'https://maciejewski.com/wp-content/uploads/allegro.png'
  //         }}
  //         style={{
  //           width: '300px',
  //           height: '300px'
  //         }}
  //       />
  //     </Flex>
  //   );
  // }
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
