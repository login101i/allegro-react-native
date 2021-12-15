import React from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./features/navigation/AppNavigator";
import theme from "./infrasctructure/theme";
import { ProductContextProvider } from "./services/products/ProductsContext";
import { CartContextProvider } from "./services/cart/CartContext";

const App = () => {
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
